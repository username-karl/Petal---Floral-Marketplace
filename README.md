# 🌸 Petal — Floral Marketplace

A specialized e-commerce platform designed to modernize the floral gifting industry. Petal connects users with local artisan florists through a unique "Mood-Based" search engine and a "Forget-Me-Not" automation system.

## 📁 Project Structure

```
Petal/
├── /backend          # Spring Boot REST API (Java 17, Maven)
├── /web              # React Web Dashboard (Vite + React 18)
├── /mobile           # Android App (Kotlin) — Phase 2
├── /docs             # Documentation (ERD, UML, Screenshots)
├── README.md
└── TASK_CHECKLIST.md
```

## 🛠️ Technology Stack

| Layer    | Technology                         |
|----------|------------------------------------|
| Backend  | Java 17, Spring Boot 3.2, Spring Security, JPA |
| Database | MySQL 8+                          |
| Web App  | React 18, Vite, Axios, React Router |
| Auth     | JWT (jjwt), BCrypt                 |
| Mobile   | Kotlin, Jetpack Compose (Phase 2)  |

## 🚀 Getting Started

### Prerequisites
- Java 17+
- Maven 3.8+
- Node.js 18+
- MySQL 8+

### Backend Setup

```bash
# 1. Create MySQL database
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS petal_db;"

# 2. Navigate to backend
cd backend

# 3. Run the Spring Boot API
mvn spring-boot:run
```
The API will start on `http://localhost:8080`

### Web App Setup

```bash
# 1. Navigate to web
cd web

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```
The web app will start on `http://localhost:5173`

## 🔐 API Endpoints (Session 1)

| Method | Endpoint             | Auth     | Description          |
|--------|----------------------|----------|----------------------|
| POST   | `/api/auth/register` | Public   | Register a new user  |
| POST   | `/api/auth/login`    | Public   | Login & get JWT      |
| GET    | `/api/user/me`       | Bearer   | Get current user     |

## 👤 Author
- **Karl Miguel C. Penida**
- IT342 – System Integration and Architecture
