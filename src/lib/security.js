/**
 * Security utilities for admin authentication
 */

/**
 * Generate a strong, random admin key
 * @returns {string} A 32-character strong random key
 */
export function generateAdminKey() {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-_=+";
  let key = "";

  // Use crypto API for better randomness
  const randomValues = new Uint8Array(32);
  crypto.getRandomValues(randomValues);

  for (let i = 0; i < 32; i++) {
    key += charset[randomValues[i] % charset.length];
  }

  return key;
}

/**
 * Hash an admin key using SHA-256
 * @param {string} key - The admin key to hash
 * @returns {Promise<string>} The hashed key in hex format
 */
export async function hashAdminKey(key) {
  const encoder = new TextEncoder();
  const data = encoder.encode(key);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

/**
 * Store admin key securely in localStorage
 * @param {string} key - The admin key to store
 */
export async function storeAdminKey(key) {
  try {
    const hashedKey = await hashAdminKey(key);
    localStorage.setItem("zahra_admin_key_hash", hashedKey);
    localStorage.setItem("zahra_admin_key_timestamp", Date.now().toString());
    return true;
  } catch (error) {
    console.error("Failed to store admin key:", error);
    return false;
  }
}

/**
 * Verify an admin key against stored hash
 * @param {string} key - The admin key to verify
 * @returns {Promise<boolean>} True if key matches stored hash
 */
export async function verifyAdminKey(key) {
  try {
    const storedHash = localStorage.getItem("zahra_admin_key_hash");
    if (!storedHash) return false;

    const keyHash = await hashAdminKey(key);
    return keyHash === storedHash;
  } catch (error) {
    console.error("Failed to verify admin key:", error);
    return false;
  }
}

/**
 * Clear admin session
 */
export function clearAdminSession() {
  localStorage.removeItem("zahra_admin_key_hash");
  localStorage.removeItem("zahra_admin_key_timestamp");
  localStorage.removeItem("zahra_admin_session");
}

/**
 * Check if admin is currently logged in
 * @returns {boolean} True if admin key is stored
 */
export function isAdminLoggedIn() {
  return localStorage.getItem("zahra_admin_key_hash") !== null;
}

/**
 * Get session duration (in minutes)
 * @returns {number} Minutes since last login, or -1 if not logged in
 */
export function getSessionDuration() {
  const timestamp = localStorage.getItem("zahra_admin_key_timestamp");
  if (!timestamp) return -1;

  const now = Date.now();
  const loginTime = parseInt(timestamp);
  return Math.floor((now - loginTime) / 1000 / 60);
}

/**
 * Check if session has expired (default: 24 hours)
 * @param {number} maxMinutes - Max session duration in minutes (default: 1440 = 24 hours)
 * @returns {boolean} True if session is expired
 */
export function isSessionExpired(maxMinutes = 1440) {
  const duration = getSessionDuration();
  return duration > maxMinutes;
}
