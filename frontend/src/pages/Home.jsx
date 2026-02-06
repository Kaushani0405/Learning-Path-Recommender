import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1 className="pageTitle">Build your personal learning roadmap</h1>
      <p className="pageText">
        This app recommends a structured learning path based on your goal,
        current skills, and time available. It keeps the plan realistic and
        step-by-step, so you always know what to learn next.
      </p>

      <div className="cardRow">
        <div className="card">
          <h3>Goal-based roadmap</h3>
          <p>Pick your goal and get a clear week-wise path.</p>
        </div>
        <div className="card">
          <h3>Skill gap analysis</h3>
          <p>Find what you’re missing and learn only what matters.</p>
        </div>
        <div className="card">
          <h3>Progress tracking</h3>
          <p>Mark tasks done and stay consistent.</p>
        </div>
      </div>

      <div className="actions">
        <button className="primaryBtn" onClick={() => navigate("/skills")}>
          Start Now
        </button>
        <button className="ghostBtn" onClick={() => navigate("/about")}>
          View Project Info
        </button>
      </div>
    </div>
  );
}
