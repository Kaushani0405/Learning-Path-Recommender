import React from "react";

export default function About() {
  return (
    <div className="page">
      <h1 className="pageTitle">About the Project</h1>
      <p className="pageText">
        Learning Path Recommender is a personalized roadmap generator that
        adapts to a learner’s goal, current level, and time availability. The
        system is designed to break large goals into achievable steps and
        continuously refine recommendations as the user progresses.
      </p>

      <div className="card">
        <h3>Creative Feature</h3>
        <p>
          The platform introduces an adaptive learning route that reshapes
          itself based on how the learner interacts with the plan. If the user
          skips, struggles, or finishes faster than expected, the roadmap
          recalculates the next steps, adjusts difficulty, and reorders topics
          to keep progress realistic. This makes the experience feel less like a
          fixed syllabus and more like a smart guide that evolves with the
          learner’s pace.
        </p>
      </div>
    </div>
  );
}
