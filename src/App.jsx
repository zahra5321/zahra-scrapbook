import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import AdminPanel from "./components/AdminPanel";
import Home from "./pages/Home";
import DoodleCorner from "./pages/DoodleCorner";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";

export default function App() {
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <Router>
      <div className="relative min-h-screen bg-[#1A050F] text-[#F4EFE6]" data-testid="app">
        <Nav onAdminClick={() => setAdminOpen(true)} />
        <AdminPanel open={adminOpen} onClose={() => setAdminOpen(false)} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doodles" element={<DoodleCorner />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}
