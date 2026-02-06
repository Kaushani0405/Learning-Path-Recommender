import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Skills() {
  const navigate = useNavigate();

  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("beginner");
  const [hours, setHours] = useState(5);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        goal,
        level,
        hoursPerWeek: hours,
      };

      const res = await axios.post(
        "http://localhost:5000/api/recommend",
        payload
      );

      localStorage.setItem("lpr_goal", goal);
      localStorage.setItem("lpr_level", level);
      localStorage.setItem("lpr_hours", String(hours));

      localStorage.setItem("roadmapData", JSON.stringify(res.data));

      navigate("/recommendations");
    } catch (err) {
      console.error("ERROR:", err?.response?.data || err.message);
      alert("Failed to generate learning path");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1 className="pageTitle">Tell us your learning goal</h1>

      <p className="pageText">
        Fill in your goal, current level, and weekly availability.  
        We’ll generate a personalized learning roadmap for you.
      </p>

      <form className="formCard" onSubmit={handleSubmit}>
        <label className="label">Your Goal</label>
        <input
          className="input"
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Example: Frontend Developer, Data Analyst, AI Engineer"
          required
          disabled={loading}
        />

        <label className="label">Current Level</label>
        <select
          className="input"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          disabled={loading}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <label className="label">Hours per week</label>
        <input
          className="input"
          type="number"
          min="1"
          max="40"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          disabled={loading}
        />

        <button className="primaryBtn" type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate Learning Path"}
        </button>
      </form>
    </div>
  );
}
