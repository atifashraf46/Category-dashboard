Category Dashboard — Full-Stack CRUD App
A full-stack category management dashboard with authentication, protected APIs, image support, and live deployments.
________________________________________
🌐 Live Demo
Frontend (Vercel)
https://category-dashboard-iota.vercel.app/
Backend API (Render)
https://category-backend.onrender.com/api
(Backend requires a valid JWT — returns 401 for unauthorized requests, which is expected.)
________________________________________
🚀 Tech Stack
Frontend
•	React (Vite)
•	Context API (Auth state)
•	Axios
•	Modern, card-based UI
Backend
•	Node.js + Express
•	SQLite (via Knex)
•	JWT Authentication
•	Secure protected routes
Deployment
•	Backend — Render
•	Frontend — Vercel
________________________________________
✨ Features
•	User Signup & Login (JWT)
•	Protected dashboard routes
•	Add / Edit categories
•	Upload category image (URL)
•	Track item count per category
•	Styled modal dialogs
•	Responsive layout
•	Persistent cloud database
________________________________________
▶️ Running Locally (Developer Setup)
1️⃣ Clone
git clone https://github.com/atifashraf46/Category-dashboard.git
cd Category-dashboard
2️⃣ Backend
cd backend
npm install
npm run dev
Server runs:
http://localhost:5000
Environment variables (if needed):
JWT_SECRET=secret123
PORT=5000
________________________________________
3️⃣ Frontend
cd ../frontend
npm install
npm run dev
Open:
http://localhost:5173
________________________________________
 API Endpoints (Protected)
Method	Endpoint	Description
POST	/api/auth/signup	Register user
POST	/api/auth/login	Login user
GET	/api/categories	List categories
POST	/api/categories	Create category
PUT	/api/categories/:id	Update category

Authorization header required:
Authorization: Bearer <token>

Category-dashboard
│
├── backend
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
│
└── frontend
    ├── src
    │   ├── components
    │   ├── context
    │   ├── pages
    │   └── services
    └── vite.config.js
🤝 Notes
•	Deployed backend uses a fresh SQLite file (separate from local DB)
•	Unauthorized access returns 401 — this is correct
•	All state and tokens are securely stored client-side

👤 Author
Built by Atif Ashraf as a full-stack learning & deployment project.


