# Backend Tutorial - FreeCodeCamp "Intro to Backend Web Development"

A complete, beginner-friendly Node.js, Express, and MongoDB backend following the freeCodeCamp "Intro to Backend Web Development" tutorial architecture using ES Modules (`"type": "module"`).

---

## 📁 Project Structure

```text
Backend-tutorial/
├── .gitignore
├── README.md
└── backend/
    ├── .env
    ├── .gitignore
    ├── package.json
    └── src/
        ├── index.js
        ├── app.js
        ├── config/
        │   ├── constants.js
        │   └── database.js
        ├── models/
        │   ├── user.model.js
        │   └── post.model.js
        ├── controllers/
        │   ├── user.controller.js
        │   └── post.controller.js
        └── routes/
            ├── user.route.js
            └── post.route.js
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Variables
Configured in `backend/.env`:
```env
PORT=4000
MONGODB_URI=mongodb+srv://Backendtutorial:alookhaoge25@cluster0.imr8yip.mongodb.net/intro-to-backend
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Run Production Server
```bash
npm start
```

---

## 📡 API Endpoints

### 👤 User Routes (`/api/v1/users`)
| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/users/register` | Register a new user (`username`, `email`, `password`) | `201 Created` |
| `POST` | `/api/v1/users/login` | Authenticate user and verify bcrypt password | `200 OK` |
| `POST` | `/api/v1/users/logout` | Logout user by email | `200 OK` |

### 📝 Post Routes (`/api/v1/posts`)
| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/posts/create` | Create a new post (`name`, `description`, `age`) | `201 Created` |
| `GET` | `/api/v1/posts/getPosts` | Fetch all posts | `200 OK` |
| `PATCH` | `/api/v1/posts/update/:id` | Update post by ID | `200 OK` |
| `DELETE` | `/api/v1/posts/delete/:id` | Delete post by ID | `200 OK` |
