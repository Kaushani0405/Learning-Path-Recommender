import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebarHead">
        <div className="sidebarTitle">Menu</div>
        <button className="iconBtn" onClick={onClose} aria-label="Close menu">
          ✕
        </button>
      </div>

      <nav className="nav">
        <NavLink to="/" className="navItem" onClick={onClose}>
          Home
        </NavLink>
        <NavLink to="/skills" className="navItem" onClick={onClose}>
          Skills Input
        </NavLink>
        <NavLink to="/recommendations" className="navItem" onClick={onClose}>
          Learning Path
        </NavLink>
        <NavLink to="/about" className="navItem" onClick={onClose}>
          About
        </NavLink>
      </nav>

      <div className="sidebarFooter">
        <div className="hint">
          Tip: Press ESC to close the sidebar.
        </div>
      </div>
    </aside>
  );
}
