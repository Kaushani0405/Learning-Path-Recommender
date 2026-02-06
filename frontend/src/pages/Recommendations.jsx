import React, { useEffect, useMemo, useState } from "react";

export default function Recommendations() {
  const goal = localStorage.getItem("lpr_goal") || "Your Goal";
  const level = localStorage.getItem("lpr_level") || "beginner";
  const hours = localStorage.getItem("lpr_hours") || "5";

  const [roadmap, setRoadmap] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("roadmapData");
      if (stored) setRoadmap(JSON.parse(stored));
    } catch (e) {
      console.error("Invalid roadmapData in localStorage", e);
      setRoadmap(null);
    }
  }, []);

  // ✅ Always return an ARRAY for weeks
  const weeks = useMemo(() => {
    if (!roadmap) return [];

    // if backend returns directly an array
    if (Array.isArray(roadmap)) return roadmap;

    // common wrappers
    if (Array.isArray(roadmap.roadmap)) return roadmap.roadmap;
    if (Array.isArray(roadmap.weeks)) return roadmap.weeks;
    if (Array.isArray(roadmap.data)) return roadmap.data;

    // sometimes backend returns: { roadmap: { weeks: [...] } }
    if (roadmap.roadmap && Array.isArray(roadmap.roadmap.weeks))
      return roadmap.roadmap.weeks;

    // if it returns an object like { week1: {...}, week2: {...} }
    // convert object values into array
    if (typeof roadmap === "object") {
      const vals = Object.values(roadmap);
      if (Array.isArray(vals) && vals.length > 0) return vals;
    }

    return [];
  }, [roadmap]);

  return (
    <div className="page">
      <h1 className="pageTitle">Your Learning Path</h1>

      <p className="pageText">
        Goal: <b>{goal}</b> | Level: <b>{level}</b> | Weekly time:{" "}
        <b>{hours} hrs</b>
      </p>

      {weeks.length === 0 ? (
        <p className="note">
          No roadmap steps found. Go back and click “Generate Learning Path”
          again.
        </p>
      ) : (
        <div className="timeline">
          {weeks.map((weekItem, idx) => {
            const title =
              weekItem?.title ||
              weekItem?.weekTitle ||
              weekItem?.week ||
              `Week ${idx + 1}`;

            const tasksRaw =
              weekItem?.tasks || weekItem?.steps || weekItem?.items || [];

            const tasks = Array.isArray(tasksRaw) ? tasksRaw : [];

            return (
              <div className="step" key={idx}>
                <div className="stepDot" />
                <div>
                  <h3>{title}</h3>

                  <p>{tasks.length} tasks planned for this week.</p>

                  {tasks.length > 0 ? (
                    <ul>
                      {tasks.map((t, i) => (
                        <li key={i}>
                          {typeof t === "string"
                            ? t
                            : t?.text || t?.task || t?.title || "Task"}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="note">
                      Backend didn’t send tasks for this week yet.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
