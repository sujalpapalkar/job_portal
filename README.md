# 🧑‍💼 MERN Job Portal

A full-stack **Job Portal Web Application** built using the **MERN Stack (MongoDB, Express, React, Node.js)**.

This platform allows:

- 👨‍💼 Job Seekers to explore and apply for jobs  
- 🏢 Recruiters to post, manage, and track job applications  
- 🔐 Secure authentication using JWT  

---

## 🚀 Tech Stack

### 🔹 Frontend
- React 19 (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- Framer Motion
- React Hot Toast
- Lucide React Icons
- Moment.js

### 🔹 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs (Password Hashing)
- Multer (Resume Upload Handling)
- CORS
- dotenv

---

## ✨ Features

### 🔐 Authentication
- User Registration
- Login with JWT Authentication
- Password hashing using bcrypt
- Protected Routes

### 👨‍💻 Job Seeker
- Browse Available Jobs
- View Job Details
- Apply for Jobs
- Upload Resume (PDF/File)
- Responsive User Interface

### 🏢 Recruiter
- Post New Job
- Edit Job Listing
- Delete Job
- View Applicants

---

## 📂 Project Folder Structure

```bash
job_portal/
│
├── client/                         # Frontend (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   ├── pages/                  # Application pages
│   │   ├── utils/                  # Utility functions
│   │   ├── assets/                 # Static assets
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/                         # Backend (Node + Express)
│   ├── controllers/                # Business logic
│   ├── middleware/                 # Authentication middleware
│   ├── models/                     # Mongoose schemas
│   ├── routes/                     # API routes
│   ├── uploads/                    # Resume upload storage
│   ├── server.js                   # Backend entry point
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sujalpapalkar/job_portal.git
cd job_portal
```

---

## 🔧 Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

Backend runs on:
```
http://localhost:5000
```

---

## 🎨 Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## 🔐 Environment Variables

| Variable     | Description |
|-------------|------------|
| PORT        | Backend server port |
| MONGO_URI   | MongoDB connection string |
| JWT_SECRET  | Secret key for JWT authentication |

---

## 🛡 Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Protected backend routes
- CORS enabled
- Environment variable configuration

---

## 📈 Future Improvements

- Pagination & Advanced Filters
- Admin Dashboard
- Email Verification
- Cloud Storage for Resume Upload
- Deployment (Vercel + Render)
- Unit Testing

---

## 👨‍💻 Author

**Sujal Papalkar**  
MERN Stack Developer | AI & ML Enthusiast  

GitHub: https://github.com/sujalpapalkar  

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!