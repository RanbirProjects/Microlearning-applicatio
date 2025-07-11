# Microlearning App (MERN Stack)

A Microlearning App to distribute short, focused lessons that users can complete in a few minutes. Features a beautiful animated UI, tabbed navigation, demo content, and local progress tracking. No login required.

---

## Features
- Animated welcome page
- Tabbed UI: Lessons, Documents, Classes, About
- Demo lessons, documents, and classes
- Progress tracking (local storage)
- No authentication required

---

## Getting Started

### 1. Clone the Repository
```sh
git clone <repo-url>
cd <project-folder>
```

### 2. Backend Setup
#### Install dependencies:
```sh
cd backend
npm install
```

#### Database Options:
- **Local MongoDB:**
  - Make sure MongoDB is running locally (`mongod`)
- **MongoDB Atlas (Cloud):**
  - Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
  - In `backend`, create a `.env` file:
    ```
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/microlearning?retryWrites=true&w=majority
    ```

#### Seed Demo Data:
```sh
npm run seed
```

#### Start Backend Server:
```sh
npm start
```
Server runs at [http://localhost:5000](http://localhost:5000)

---

### 3. Frontend Setup
#### Install dependencies:
```sh
cd frontend
npm install
```

#### Start Frontend:
```sh
npm start
```
App runs at [http://localhost:3000](http://localhost:3000)

---

## Project Structure
```
backend/
  models/        # Mongoose models
  routes/        # Express routes
  seed/          # Demo data seeding script
  server.js      # Express server
frontend/
  src/components # React components
  src/pages      # React pages
  App.js         # Main app
README.md
```

---

## Customization
- Add more lessons, documents, or classes in `backend/seed/demoData.js`.
- UI built with Material-UI and Framer Motion for easy customization.

---

## License
MIT # Microlearning-applicatio
