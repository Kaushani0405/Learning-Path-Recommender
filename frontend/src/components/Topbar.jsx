import React from "react";

export default function Topbar({ onMenu }) {
  return (
    <header className="topbar">
      <button className="iconBtn" onClick={onMenu} aria-label="Open menu">
        ☰
      </button>

      <div className="brand">
        <div className="brandTitle">Learning Path Recommender</div>
        <div className="brandSub">Personalized roadmap, fast and focused</div>
      </div>

      <div className="topbarRight">
        <div className="pill">ScaleDown Challenge</div>
      </div>
    </header>
  );
}
