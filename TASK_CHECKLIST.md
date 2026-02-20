# Petal - Project Checklist (Session 1)

## 📌 Status Legend
- [x] **DONE** - Feature is fully implemented and verified.
- [/] **IN-PROGRESS** - Feature is being worked on.
- [ ] **TODO** - Feature is planned but not yet started.

---

## 🚀 Session 1 Requirements

### 1️⃣ Backend – Spring Boot
- [x] **POST /api/auth/register** - `AuthController.java`
- [x] **POST /api/auth/login** - `AuthController.java`
- [x] **GET /api/user/me (protected)** - `UserController.java`
- [x] **Database connection (MySQL)** - configured in `application.properties`
- [x] **Password encryption (BCrypt)** - implemented in `SecurityConfig.java`

### 2️⃣ Web Application – ReactJS
- [x] **Register page** - `src/pages/Register.jsx` (Redesigned to Flower House style)
- [x] **Login page** - `src/pages/Login.jsx` (Redesigned to Flower House style)
- [x] **Dashboard/Profile page (protected)** - `src/pages/Dashboard.jsx` & `src/pages/Profile.jsx`
- [x] **Logout functionality** - `AuthContext.jsx` & UI buttons

### 3️⃣ Mobile Application (Android)
- [x] **Register screen** - `RegisterActivity.kt` / `activity_register.xml` (Petal Ivory Aesthetic)
- [x] **Login screen** - `LoginActivity.kt` / `activity_login.xml` (Petal Ivory Aesthetic)
- [x] **Dashboard screen (protected)** - `DashboardActivity.kt` / `activity_dashboard.xml` (Explore layout)
- [x] **Logout functionality** - `DashboardActivity.kt` & TokenManager clearing

### 4️⃣ Documentation Update (FRS – Partial)
- [x] **ERD Diagram** - Included in `/docs/FRS_PARTIAL.md`
- [x] **UML Component Diagram** - Included in `/docs/FRS_PARTIAL.md`
- [-] **Screenshots of Web UI** - *Pending manual capture by user for PDF*
  - [ ] Register
  - [ ] Login
  - [ ] Dashboard/Profile
  - [ ] Logout

### 5️⃣ Repository Structure
- [x] **/web** - React Frontend
- [x] **/backend** - Spring Boot API
- [x] **/mobile** - Android Project (Kotlin, Auth, Dashboard, UI Redesign completed)
- [x] **/docs** - FRS and Diagram Documentation
- [x] **README.md** - Project Overview
- [x] **TASK_CHECKLIST.md** - This file

---

## 🔮 Future Phases (TODO)

### Session 2: Core Logic
- [ ] **Mood-Based Product Catalog**
- [ ] **"Forget-Me-Not" Scheduler**

### Session 3: Integration
- [ ] **End-to-End Order Flow**
- [ ] **Florist Dashboard Order Management**
