<div align="center">
  <h1>🛒 E-Commerce REST API</h1>
  <p><i>A robust, in-memory Express.js API for managing e-commerce product inventory.</i></p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
    <img src="https://img.shields.io/badge/REST_API-005571?style=for-the-badge&logo=json&logoColor=white" alt="REST API" />
  </p>
</div>

---

## 🎯 Objective

This project implements a fully functional REST API using **Express.js** to manage an e-commerce product catalog. It serves as a practical demonstration of designing RESTful architectures, handling dynamic routing, performing standard CRUD (Create, Read, Update) operations, and modifying specific fields (like price and stock) via specialized endpoints. All data is efficiently managed via an in-memory JSON structure.

---

## ✨ Features

- **Blazing Fast**: Uses an in-memory JSON array for zero-latency data operations.
- **RESTful Design**: Strict adherence to architectural principles using clean, resource-based URL structures.
- **Comprehensive CRUD**: Endpoints for getting, creating, and fully updating products.
- **Granular Updates**: Specialized HTTP `PUT` handlers for updating just the stock or price of a product without altering the rest of its data.
- **Dynamic Routing**: Implementation of route parameters (`:id`, `:categoryName`) for granular data fetching.
- **Robust Error Handling**: Standardized HTTP status codes (`200 OK`, `201 Created`, `404 Not Found`) with clear JSON error messages.
- **Cross-Origin Ready**: CORS middleware enabled for seamless frontend integration.

---

## � Live Demo & Documentation

- **📚 Postman Documentation**: [https://documenter.getpostman.com/view/50840748/2sBXcGEzfz](https://documenter.getpostman.com/view/50840748/2sBXcGEzfz)

---

## �🛤️ Implemented Routes (API Reference)

| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| `GET` | `/products` | Retrieves the complete list of all products in the catalog. | `200 OK` |
| `GET` | `/products/:id` | **(Dynamic)** Fetches a specific product by its unique ID. | `200 OK` / `404` |
| `GET` | `/products/category/:categoryName` | **(Dynamic)** Retrieves all products belonging to a specific category (e.g., Electronics, Fashion). | `200 OK` |
| `POST` | `/products` | Creates a new product and adds it to the catalog. <br/>*(Body: name, category, price, stock, rating)* | `201 Created` |
| `PUT` | `/products/:id` | **(Dynamic)** Completely updates an existing product by its unique ID. <br/>*(Body: name, category, price, stock, rating)* | `200 OK` / `404` |
| `PUT` | `/products/:id/stock` | **(Dynamic)** Updates only the stock quantity of a specific product. <br/>*(Body: stock)* | `200 OK` / `404` |
| `PUT` | `/products/:id/price` | **(Dynamic)** Updates only the price of a specific product. <br/>*(Body: price)* | `200 OK` / `404` |

---

## 💡 Sample API URLs

Test these endpoints locally by appending them to your base URL:

- **Fetch All Products**: `http://localhost:3000/products`
- **Find Product by ID (e.g., ID 1)**: `http://localhost:3000/products/1`
- **Filter by Category (e.g., Electronics)**: `http://localhost:3000/products/category/electronics`
- **Create New Product (POST)**: `http://localhost:3000/products` 
- **Update Product Completely (PUT)**: `http://localhost:3000/products/1` 
- **Update Product Stock (PUT)**: `http://localhost:3000/products/1/stock` 
- **Update Product Price (PUT)**: `http://localhost:3000/products/1/price` 

---

## 📦 Sample Data Overview

The API is pre-seeded with the following array of products for testing:

| ID | Product Name | Category | Price | Stock | Rating |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `1` | Wireless Mouse | Electronics | ₹799 | 25 | ⭐ 4.3 |
| `2` | Running Shoes | Footwear | ₹2499 | 40 | ⭐ 4.5 |
| `3` | Laptop Stand | Accessories | ₹999 | 30 | ⭐ 4.2 |
| `4` | Smart Watch | Electronics | ₹4999 | 12 | ⭐ 4.4 |
| `5-20` | Backpack | Fashion | ₹1599 | 50 | ⭐ 4.1 |

---

## 🛠️ Local Setup Instructions

Follow these steps to get the project running on your local machine:

### 1. Clone the Repository
```bash
git clone <your-repository-url>
```

### 2. Navigate to the Directory
```bash
cd EC_API
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Server
```bash
npm start
```
*OR, run with `nodemon` for automatic server restarts during development:*
```bash
nodemon server.js
```
*The server will start running on port `3000` (or the port defined in your environment variables).*

---

## 📂 Project Structure

```text
📦 EC_API
 ┣ 📜 server.js          # Main application entry 
 ┣ 📜 package.json       # Project metadata and dependencies
 ┣ 📜 package-lock.json  # Dependency tree lockfile
 ┗ 📜 README.md          # Project documentation
```

---

<div align="center">
  <p>Built with ❤️ using Node.js and Express.</p>
</div>
