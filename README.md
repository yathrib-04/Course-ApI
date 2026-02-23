# 📚 Course API (NestJS)

A simple and clean RESTful API built with **NestJS** and **TypeScript** to manage courses.
This project demonstrates clean architecture, DTO validation, and proper HTTP status handling.

---

## 🚀 Features

* ✅ Get all courses
* ✅ Get a course by ID
* ✅ Create a new course
* ✅ DTO validation using `class-validator`
* ✅ Proper HTTP status codes (200, 201, 400, 404)
* ✅ Clean modular architecture (Module / Controller / Service)
* ✅ In-memory data storage (no database required)

---

## 🛠 Tech Stack

* **Node.js**
* **NestJS**
* **TypeScript**
* **class-validator**
* **class-transformer**

---

## 📂 Project Structure

```
src/
 ├── app.module.ts
 └── courses/
      ├── dto/
      │   └── create-course.dto.ts
      ├── courses.controller.ts
      ├── courses.service.ts
      └── courses.module.ts
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <https://github.com/yathrib-04/Course-ApI>
cd course-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the server

```bash
npm run start
```

Server will run at:

```
http://localhost:3000
```

---

## 📌 API Endpoints

### 🔹 GET /courses

Returns a list of all courses.

**Response — 200 OK**

```json
[
  {
    "id": 1,
    "title": "Data Structure and algorithm",
    "level": "Intermidiate",
    "duration": "4 weeks"
  }
]
```

---

### 🔹 GET /courses/:id

Returns a single course by ID.

**Response — 200 OK**

```json
{
  "id": 1,
  "title": "Data Structure and algorithm",
  "level": "Intermidiate",
  "duration": "4 weeks"
}
```

**Response — 404 Not Found**

```json
{
  "statusCode": 404,
  "message": "Course not found"
}
```

---

### 🔹 POST /courses

Creates a new course.

**Request Body**

```json
{
  "title": "Data Structure and algorithm",
  "level": "Intermidiate",
  "duration": "4 weeks"
}
```

**Response — 201 Created**

```json
{
  "id": 1,
  "title": "Data Structure and algorithm",
  "level": "Intermidiate",
  "duration": "4 weeks"
}
```
### 🔹 PUT /courses/:id

Update an existing course (partial or full)
**Request Body**

```json
{
  "title": " Advanced Data Structure and algorithm",
  
}
```

**Response — 201 Created**

```json
{
  "id": 1,
  "title": " Advanced Data Structure and algorithm",
  "level": "Intermidiate",
  "duration": "4 weeks"
}

**Response — 404 Not Found**

```json
{
  "statusCode": 404,
  "message": "Course not found"
}

---

### 🔹DELETE /courses/:id

Delete a course.

**Response — 200 OK**

```json
{
  "message": "Course deleted successfully"
}"
}
```

**Response — 404 Not Found**

```json
{
  "statusCode": 404,
  "message": "Course not found"
}
```


---

## 🧪 Validation Rules

The following fields are required:

* `title` — string, not empty
* `level` — string, not empty
* `duration` — string, not empty

Validation is handled using `class-validator`.

---

## 📌 Notes

* Data is stored in memory and resets when the server restarts.
* The project is designed with scalability and clean structure in mind.
* No database is required.

---

## 👩‍💻 Author

**Teyiba A**
Software Engineer | Backend Developer


---
