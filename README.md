# Genoa Golf Club Portal — Full-Stack Demo

Repository: https://github.com/aashwani2308-debug/genoa-golf-club-portal

This project is a portfolio/demo implementation based on the Genoa Golf Club redesign scope and the QA tickets GGC_QA_001 through GGC_QA_010.

## Stack

- Frontend: React + Vite + React Router
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- API Testing: Postman collection
- UI Automation: Selenium + Python
- QA Documentation: test plan, test cases, defect log, regression and UAT checklists

## Features Included

- Responsive home page and mobile navigation
- Tee-time booking CTA placeholder for ForeUP integration
- Venue booking request form
- Events list and event popup support
- Social links section
- Contact page
- REST APIs for venue enquiries and events
- MongoDB schemas and seed script
- Health API
- Postman collection
- Selenium smoke tests
- QA artifacts mapped to GGC_QA_001–010

## Local Setup

### 1. Start MongoDB
Use a local MongoDB instance or MongoDB Atlas.

### 2. Backend
```bash
cd backend
cp .env.example .env
npm install
npm run seed
npm run dev
```

Backend default: http://localhost:5000

### 3. Frontend
Open a second terminal:
```bash
cd frontend
npm install
npm run dev
```

Frontend default: http://localhost:5173

### 4. Selenium tests
```bash
cd qa/selenium
pip install -r requirements.txt
pytest -v
```

## Important Notes

This is a demo implementation. Replace placeholder business email addresses, social links, analytics IDs, images and the ForeUP booking URL with approved production values before any real deployment.

Do not commit real credentials or production customer data.
