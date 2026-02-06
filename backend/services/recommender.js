const courses = require("../data/courses.json");

function estimateTokens(text) {
  return Math.ceil(text.length / 4);
}

function compressMock(text) {
  // placeholder for ScaleDown compression
  return text.split(".").slice(0, 2).join(".") + ".";
}

function generateRoadmap({ goal, level, hoursPerWeek }) {
  const track =
    goal && goal.toLowerCase().includes("front") ? "frontend" : "general";

  const pool = courses.filter((c) => c.track.includes(track));

  let weeks = [];
  let index = 0;

  for (let week = 1; week <= 4; week++) {
    let remainingHours = hoursPerWeek || 5;
    let tasks = [];

    while (remainingHours > 0 && index < pool.length) {
      const c = pool[index];
      const hrs = Math.min(remainingHours, c.hours);
      tasks.push({
        title: c.title,
        type: c.type,
        hours: hrs,
      });
      remainingHours -= hrs;
      index++;
    }

    weeks.push({
      week,
      title:
        week === 1
          ? "Foundations"
          : week === 2
          ? "Core Skills"
          : week === 3
          ? "Practice"
          : "Mini Project",
      tasks,
    });
  }

  const rawText = pool.map((c) => c.description).join(" ");
  const compressedText = pool.map((c) => compressMock(c.description)).join(" ");

  return {
    roadmap: {
      goal,
      level,
      weeks,
    },
    metrics: {
      coursesConsidered: pool.length,
      tokensRaw: estimateTokens(rawText),
      tokensCompressed: estimateTokens(compressedText),
    },
  };
}

module.exports = generateRoadmap;
