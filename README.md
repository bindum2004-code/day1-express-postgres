# day1-express-postgres
Node.js + Express CRUD API connected to PostgreSQL, with full REST endpoints for managing items. Tested using Postman.
Absolutely! Here’s one complete message you can copy and paste directly as your README.md:

# Day 1 – Express + PostgreSQL CRUD API

## 📌 Project Overview
A simple Node.js + Express server connected to PostgreSQL, implementing CRUD APIs for `items`. Tested with Postman.

---

## ⚡ Tech Stack
- Node.js
- Express
- PostgreSQL
- pg (node-postgres)
- dotenv
- cors
- nodemon (dev)

---

## 🚀 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/gautamvmahle/day1-express-postgres.git
cd day1-express-postgres
2. Install dependencies
npm install
3. Configure environment variables
Create a .env file in the project root:

PORT=3000
DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=day1db
Use .env.example as a reference for your environment variables.

4. Run the server
npm run dev
Server runs at → http://localhost:3000

🔑 API Endpoints
Root
GET / → API is running 🚀
Items
POST /api/items → create new item
GET /api/items → get all items
GET /api/items/:id → get item by ID
PUT /api/items/:id → update item by ID
DELETE /api/items/:id → delete item by ID
🧪 Testing with Postman
Open Postman
Create a Collection → Day1 API
Add requests:
GET /
POST /api/items (Body → raw → JSON: { "name": "Pen", "description": "Blue ink" })
GET /api/items
GET /api/items/:id
PUT /api/items/:id (Body → raw → JSON: { "name": "Updated Pen", "description": "Black ink" })
DELETE /api/items/:id
✅ Deliverables
CRUD API working locally
.env.example included
Public GitHub repo
Postman screenshots
<img width="1919" height="1094" alt="screenshot" src="https://github.com/user-attachments/assets/dfffa8f4-3a70-489f-b63a-95303fc4f7ae" />
GET → http://localhost:3000/

<img width="1920" height="1200" alt="Screenshot 2025-09-20 174902" src="https://github.com/user-attachments/assets/030ea5c7-8cea-42c4-a7a7-2b7d0589d70b" />


POST → http://localhost:3000/api/items (Body → raw → JSON)

<img width="1920" height="1200" alt="Screenshot 2025-09-20 174121" src="https://github.com/user-attachments/assets/209d369b-3c76-45f4-a5c9-fda3b63c11a6" />

GET → http://localhost:3000/api/items
<img width="1920" height="1200" alt="Screenshot 2025-09-20 175132" src="https://github.com/user-attachments/assets/f3c4deb5-8cbf-45ac-b1e5-1612c643bd33" />

GET → http://localhost:3000/api/items/1
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/1c975da2-79ba-4654-bba7-7f0b88041839" />

PUT → http://localhost:3000/api/items/1
<img width="1271" height="976" alt="Screenshot 2025-09-20 125503 - Copy 1" src="https://github.com/user-attachments/assets/d1e421cf-3c7f-41d2-bdd1-6832220cea5c" />


DELETE → http://localhost:3000/api/items/1


<img width="1919" height="1094" alt="screenshot" src="https://github.com/user-attachments/assets/01a47a93-724d-4089-b824-924149015433" />







