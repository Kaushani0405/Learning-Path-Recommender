const express = require("express");
const router = express.Router();
const Roadmap = require("../models/Roadmap");

router.post("/", async (req, res) => {
  try {
    console.log("✅ API HIT");
    console.log("BODY:", req.body);

    const { goal, level, hoursPerWeek } = req.body;

    if (!goal || !level || !hoursPerWeek) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const generated = {
      weeks: [
        { week: 1, title: "Foundations", tasks: ["Basics", "Setup"] },
        { week: 2, title: "Core Skills", tasks: ["Core concepts"] },
        { week: 3, title: "Projects", tasks: ["Mini project"] },
        { week: 4, title: "Polish", tasks: ["GitHub", "Resume"] }
      ]
    };

    const saved = await Roadmap.create({
      goal,
      level,
      hoursPerWeek,
      roadmap: generated
    });

    console.log("✅ SAVED TO DB:", saved._id);

    res.json(saved);
  } catch (err) {
    console.error("❌ ERROR:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
