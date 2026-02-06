# Learning Path Recommender – Project Documentation

## 1. Introduction
The Learning Path Recommender is an AI-driven system designed to help learners follow a structured and personalized learning roadmap.  
It adapts recommendations based on user goals, current skills, and learning progress.

---

## 2. Objective
- Identify skill gaps for a learner
- Recommend relevant courses in the correct order
- Generate a weekly learning plan
- Reduce AI processing cost using ScaleDown compression

---

## 3. System Architecture
### Components:
- Frontend (React): User input, roadmap display, progress tracking
- Backend (Node.js / Express): Recommendation logic and AI integration
- Dataset: Course catalog stored in JSON format
- AI Engine: Generates learning roadmap
- ScaleDown: Compresses course descriptions and learner history

---

## 4. Workflow
1. User enters goal, skill level, and available time
2. System analyzes missing skills
3. Relevant courses are selected
4. Course data is compressed using ScaleDown
5. AI generates a structured learning path
6. User progress updates modify future recommendations

---

## 5. Use of ScaleDown
ScaleDown is used to:
- Compress long course descriptions
- Compress learner progress history
- Maintain full context with fewer tokens
- Reduce latency and API cost

---

## 6. Features Implemented
- Skill gap analysis
- Personalized roadmap generation
- Weekly learning breakdown
- Progress tracking
- Adaptive learning recommendations
- Compression metrics comparison

---

## 7. Limitations
- Uses a static course dataset
- No real-time platform API integration yet

---

## 8. Future Enhancements
- Integration with Coursera / Udemy APIs
- Certificate tracking
- Mobile-friendly UI
- Multi-language learning paths

---

## 9. Conclusion
This project demonstrates how AI-driven personalization combined with ScaleDown compression can create efficient, scalable, and adaptive learning systems.
