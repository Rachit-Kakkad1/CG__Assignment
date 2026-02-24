<div align="center">
  <h1>🎓 Student CGPA REST API</h1>
  <p><i>A robust, in-memory Express.js API for managing student academic records.</i></p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
    <img src="https://img.shields.io/badge/REST_API-005571?style=for-the-badge&logo=json&logoColor=white" alt="REST API" />
  </p>
</div>

---

## 🎯 Objective

This project implements a fully functional REST API using **Express.js** to manage student CGPA records. It serves as a practical demonstration of designing RESTful architectures, handling dynamic routing, and performing server-side data aggregation and filtering without relying on an external database. All data is efficiently managed via an in-memory JSON structure.

---

## ✨ Features

- **Blazing Fast**: Uses an in-memory JSON array for zero-latency data operations.
- **RESTful Design**: Strict adherence to architectural principles using clean, resource-based URL structures.
- **Dynamic Routing**: Implementation of route parameters (`:id`, `:branchName`) for granular data fetching.
- **Data Aggregation**: Built-in logic to compute mathematical operations like averages and maximums (Topper) on the fly.
- **Robust Error Handling**: Standardized HTTP status codes (200, 404) with clear JSON error messages.
- **Cross-Origin Ready**: CORS middleware enabled for seamless frontend integration.

---

## 🚀 Live Demo & Documentation

- **🚀 Render Deployment**: [Insert Render Deployment URL Here]
- **📚 Postman Documentation**: [Insert Postman Workspace URL Here]

*(Note: Replace the links above with your actual deployment and documentation URLs)*

---

## 🛤️ Implemented Routes (API Reference)

| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| `GET` | `/students` | Retrieves the complete list of all students. | `200 OK` |
| `GET` | `/students/topper` | Calculates and returns the student with the highest CGPA. | `200 OK` / `404` |
| `GET` | `/students/average` | Returns the calculated average CGPA across all students. | `200 OK` |
| `GET` | `/students/count` | Returns the total count of students currently in the system. | `200 OK` |
| `GET` | `/students/:id` | **(Dynamic)** Fetches a specific student by their unique ID. | `200 OK` / `404` |
| `GET` | `/students/branch/:branchName` | **(Dynamic)** Retrieves all students belonging to a specific branch (e.g., CSE). | `200 OK` |

---

## 💡 Sample API URLs

Test these endpoints locally by appending them to your base URL:

- **Fetch All**: `http://localhost:3000/students`
- **Find Topper**: `http://localhost:3000/students/topper`
- **Calculate Average**: `http://localhost:3000/students/average`
- **Get Total Count**: `http://localhost:3000/students/count`
- **Find by ID (e.g., ID 3)**: `http://localhost:3000/students/3`
- **Filter by Branch (e.g., CSE)**: `http://localhost:3000/students/branch/CSE`

---

## 🛠️ Local Setup Instructions

Follow these steps to get the project running on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/student-cgpa-api.git
```

### 2. Navigate to the Directory
```bash
cd student-cgpa-api
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Development Server
```bash
npm start
```
*The server will start running on port `3000` (or the port defined in your environment variables).*

---

## 📂 Project Structure

```text
📦 student-cgpa-api
 ┣ 📜 index.js         # Main application entry point & routing logic
 ┣ 📜 package.json     # Project metadata and dependencies
 ┣ 📜 package-lock.json# Dependency tree lockfile
 ┣ 📜 .gitignore       # Git exclusion rules
 ┗ 📜 README.md        # Project documentation
```

---

<div align="center">
  <p>Built with ❤️ using Node.js and Express.</p>
</div>
