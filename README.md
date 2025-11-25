# 🔐AUTH-MERN — Full Stack Authentication System

A production-ready MERN authentication system built with React (Vite), Node.js, Express, MongoDB, and JWT. This project implements secure user registration, login, protected routes, and persistent authentication state.

Live App: https://auth-mern-woad.vercel.app

API: https://auth-mern-backend-2rh6.onrender.com

## ⚙️ Tech Stack
### --- Frontend
○ React (Vite)
○ Tailwind CSS
○ Axios
○ React Router DOM

### --- Backend
○ Node.js
○ Express
○ MongoDB (Mongoose)
○ JWT (JSON Web Tokens)
○ bcryptjs
○ CORS
○ dotenv

### --- Deployment
Frontend: Vercel
Backend: Render
Database: MongoDB Atlas

### ✅ Features
○ Secure user registration and login
○ Password hashing with bcrypt
○ JWT-based authentication
○ Protected routes
○ Persistent sessions using localStorage
○ CORS-configured production API access
○ Deployed backend + frontend
○ SPA routing configured with Vercel rewrites
○ Modular MVC folder structure

## 📁 Project Structure

<img width="606" height="560" alt="image" src="https://github.com/user-attachments/assets/6d8ca5eb-def8-4acd-b0aa-4d6b449bb400" />

## 🚀 Local Setup
1. Clone the repository
git clone https://github.com/anshul051/auth-MERN.git
cd auth-MERN

2. Install Backend Dependencies
cd backend
npm install

-> Create a .env file inside /backend: MONGO_URI=your_mongodb_connection_string
                                       JWT_SECRET=your_secret_key
                                       PORT=5000


-> Start backend: npm run dev

-> Server will run on: http://localhost:5000

3. Install Frontend Dependencies
cd ../frontend
npm install
npm run dev

-> Frontend will run on: http://localhost:5173

## 🔒 Authentication Flow
● User registers → stored in MongoDB
● Password is hashed using bcrypt
● On login → JWT is generated
● Token stored in localStorage
● Protected routes require valid JWT
● Unauthorized users are blocked

### 🔧 Environment Variables
Backend              Key	Description
MONGO_URI	    ->     MongoDB connection string
JWT_SECRET	  ->     Secret key for JWT
PORT	        ->     Server port

 -> Frontend
Uses Render API URL directly via Axios: https://auth-mern-backend-2rh6.onrender.com/api/users/*

 -> 🔐 CORS Configuration

The backend allows: http://localhost:5173
                    https://auth-mern-woad.vercel.app
CORS is configured in server.js for safe cross-origin requests.

## 🌐 Deployment Guide
-> Frontend (Vercel)
● Root directory: frontend
● Build command: npm run build
● Output directory: dist
● Includes vercel.json to avoid SPA 404 errors

-> Backend (Render)
● Root directory: backend
● Build command: npm install
● Start command: node server.js

## Screenshots
<---- HOME PAGE ----> 
<img width="1916" height="908" alt="image" src="https://github.com/user-attachments/assets/1ff8a867-73be-4959-bff9-9beb4a9647da" />

<---- LOGIN PAGE ----> 
<img width="1919" height="906" alt="image" src="https://github.com/user-attachments/assets/354407ef-5d0f-42f4-915e-30cedb134784" />

<---- REGISTRATION PAGE ----> 
<img width="1919" height="911" alt="image" src="https://github.com/user-attachments/assets/84526137-6fb6-43b8-ab13-27ee5b6aef36" />


## 🎯 Key Learning Outcomes
● Full-stack application architecture
● Secure authentication implementation
● Real-world deployment workflow
● Production-ready CORS setup
● Environment-based configuration
● API security and token protection

### 👨‍💻 Author
## Anshul Kumar Arya
GitHub: https://github.com/anshul051

### 📜 License
This project is licensed for educational and portfolio use.
