# Learning Path Recommender

## Overview
Learning Path Recommender is an AI-powered system that generates personalized learning roadmaps based on a learner’s goals, existing skills, and available study time.  
The project uses **ScaleDown compression** to efficiently handle large course catalogs and learner histories while reducing token usage and latency.


## Problem Statement
Learners often struggle to decide:
- What to learn next
- In what order
- How to manage time efficiently

Most platforms provide static recommendations without adapting to learner progress.


## Solution
This project:
- Analyzes skill gaps
- Recommends a structured learning path
- Adapts the roadmap based on learner progress
- Uses ScaleDown to compress course descriptions and learner context


## Key Features
- Skill gap analysis
- Personalized learning roadmap
- Weekly learning plan generation
- Progress tracking
- Adaptive recommendations
- ScaleDown-based context compression


## Tech Stack
- Frontend: React
- Backend: Node.js / Express
- AI: LLM-based recommendation logic
- Compression: ScaleDown
- Data: JSON-based course catalog


## How ScaleDown is Used
- Compresses long course descriptions
- Compresses learner history and progress
- Reduces token usage and improves response time
- Maintains recommendation quality with lower cost


## Project Structure
Learning-Path-Recommender/
│── frontend/
│── backend/
│── data/
│ └── courses.json
│── README.md


## Future Improvements
- Real-time course platform integration
- Certificate tracking
- Mobile app version
- Multi-language support


## Author
**Kaushani**
