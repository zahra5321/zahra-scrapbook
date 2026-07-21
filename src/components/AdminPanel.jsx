import React, { useState, useEffect } from "react";
import { verifyAdminKey, isAdminLoggedIn, clearAdminSession } from "../lib/security.js";
import AdminKeyGenerator from "./AdminKeyGenerator.jsx";

export default function AdminPanel({ open, onClose }) {
  const [showKeyGenerator, setShowKeyGenerator] = useState(false);
  const [adminKey, setAdminKey] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("today");

  // Check if already logged in on mount
  useEffect(() => {
    if (isAdminLoggedIn()) {
      setIsLoggedIn(true);
    }
  }, [open]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const isValid = await verifyAdminKey(adminKey);
      if (isValid) {
        setIsLoggedIn(true);
        setAdminKey("");
      } else {
        setError("❌ Invalid admin key. Try again.");
        setAdminKey("");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("❌ An error occurred. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    clearAdminSession();
    setIsLoggedIn(false);
    setAdminKey("");
    setError(null);
    onClose?.();
  };

  const handleKeyGenerated = async (key) => {
    setIsLoggedIn(true);
    setShowKeyGenerator(false);
  };

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Admin Panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[#1A050F] border-l-2 border-[#D4A5A5] shadow-2xl z-50 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#D4A5A5]">
          <h1 className="text-2xl font-hand text-[#D4A5A5]">✨ Admin Panel</h1>
          <button
            onClick={onClose}
            className="text-[#D4A5A5] hover:text-[#E6C5C5] text-3xl"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isLoggedIn ? (
            <div className="space-y-6">
              <p className="text-[#F4EFE6] text-sm">
                Enter your admin key to unlock content management.
              </p>

              {error && (
                <div className="bg-red-900 bg-opacity-30 border border-red-500 rounded p-3 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-[#D4A5A5] text-sm font-bold mb-2">
                    🔐 Admin Key
                  </label>
                  <input
                    type="password"
                    value={adminKey}
                    onChange={(e) => setAdminKey(e.target.value)}
                    placeholder="Enter your secure key..."
                    className="w-full bg-[#2A0F1F] border border-[#D4A5A5] text-[#F4EFE6] p-3 rounded placeholder-[#D4A5A5] placeholder-opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !adminKey}
                  className="w-full bg-[#D4A5A5] text-[#1A050F] font-bold py-3 rounded hover:bg-[#E6C5C5] transition-colors disabled:opacity-50"
                >
                  {loading ? "🔄 Verifying..." : "🔓 Unlock Admin"}
                </button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#D4A5A5]" />
                </div>
              </div>
            </div>
          ) : (
            <div>Logged in</div>
          )}
        </div>
      </div>
    </>
  );
}
