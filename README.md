# 🌍 Travel Journal

**Travel Journal** is a full-stack web application built with **Next.js 15**, **React.js**, and **Tailwind CSS**. It allows users to securely manage and track their trips with full CRUD functionality. The app features JWT-based authentication, a responsive UI, and a clean, user-friendly interface.

---

## 🔗 Live Demo
[Add your live deployment link here, e.g., Vercel]

---

## 🛠 Technology Stack

- **Frontend & Backend:** Next.js 15 (React.js)
- **Styling:** Tailwind CSS
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Password Security:** bcryptjs
- **Hosting:** Vercel / Your preferred hosting platform

---

## ✅ Features

- **User Authentication**
  - Sign up with email and password
  - Login and logout with JWT-based secure tokens
  - Passwords are hashed with bcryptjs

- **Trips Management (CRUD)**
  - Add new trips (Title, Description, Date)
  - Edit existing trips
  - Delete trips
  - View all trips in a clean list format

- **Responsive Design**
  - Mobile-friendly layout
  - Consistent theme across all pages

- **Enhanced UI**
  - Modern, clean interface with Tailwind CSS
  - Header and footer with user-specific options
  - Conditional navigation based on login state

---

## 📂 Folder Structure

travel-journal/
│── src/
│ ├── app/
│ │ ├── api/
│ │ │ ├── auth/
│ │ │ │ ├── login/
│ │ │ │ │ └── route.ts
│ │ │ │ ├── signup/
│ │ │ │ │ └── route.ts
│ │ │ ├── trips/
│ │ │ ├── [id]/
│ │ │ │ └── route.ts
│ │ │ └── route.ts
│ │ ├── components/
│ │ │ ├── LogoutButton.tsx
│ │ │ └── Header.tsx
│ │ ├── trips/
│ │ │ └── page.tsx
│ │ ├── login/
│ │ │ └── page.tsx
│ │ ├── signup/
│ │ │ └── page.tsx
│ │ └── page.tsx
│── models/
│ └── User.ts
│── lib/
│ └── mongodb.ts
│── package.json


---

## ⚙️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/travel-journal.git
cd travel-journal

2. Install dependencies

npm install

3. Environment Variables

Create a .env file in the root folder with:

MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key

4. Run the development server

npm run dev


Open http://localhost:3000
 to see the app in action.


 📝 Usage

Sign Up
Enter name, email, and password to create an account.

Login
Use your email and password to log in.

Manage Trips
Add a new trip with title, description, and date.
Edit or delete existing trips as needed.

Logout when finished.

💻 Key Features / Considerations
Secure Authentication & Authorization
JWT-based login system
Protected routes for trips
Real-World Readiness
Data validation and sanitization
Error handling and user feedback
Scalable backend architecture
Optional AI Integration
Can be extended to include AI-powered recommendations or analytics for trips

📚 Future Enhancements
Add AI-based suggestions for trip planning
Deploy notifications for upcoming trips
Integrate social sharing features
Add image uploads for trips