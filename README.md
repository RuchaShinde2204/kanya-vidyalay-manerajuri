# Kanya Vidyalay Manerajuri MERN Application

Complete production-ready MERN stack school website and admin dashboard.

## Tech Stack

- Frontend: React, React Router, Axios, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- Authentication: JWT admin authentication with role-based middleware
- Storage: Cloudinary
- Deployment: Vercel frontend, Render backend

## Features

Public website:

- Home page with hero, school overview, notices, upcoming events, and statistics
- About page with history, principal message, vision, mission, achievements
- Events page with upcoming and past events
- Facilities page
- Dynamic gallery from MongoDB
- Contact page with Google Maps and contact form
- Online admission form with optional document upload

Admin dashboard:

- Admin login
- Dashboard statistics
- Admissions management with search and delete
- Event create, edit, delete, and image upload
- Gallery upload, category, and delete
- Notice create, edit, and delete
- Contact message view and delete

## Local Setup

### 1. Backend

```bash
cd server
npm install
copy .env.example .env
npm run seed:admin
npm run dev
```

Fill `server/.env` before running:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/kanya_vidyalay
JWT_SECRET=replace_with_a_long_random_secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
ADMIN_NAME=School Admin
ADMIN_EMAIL=admin@kvm.edu
ADMIN_PASSWORD=change-this-password
```

### 2. Frontend

```bash
cd client
npm install
copy .env.example .env
npm run dev
```

Fill `client/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

Open:

```txt
http://localhost:5173
```

Admin login:

```txt
http://localhost:5173/admin/login
```

## API Endpoints

Auth:

- `POST /api/auth/login`
- `GET /api/auth/me`

Admissions:

- `POST /api/admissions`
- `GET /api/admissions`
- `DELETE /api/admissions/:id`

Events:

- `GET /api/events`
- `GET /api/events/upcoming`
- `GET /api/events/past`
- `POST /api/events`
- `PUT /api/events/:id`
- `DELETE /api/events/:id`

Gallery:

- `GET /api/gallery`
- `GET /api/gallery?category=Campus`
- `POST /api/gallery`
- `DELETE /api/gallery/:id`

Notices:

- `GET /api/notices`
- `POST /api/notices`
- `PUT /api/notices/:id`
- `DELETE /api/notices/:id`

Contacts:

- `POST /api/contacts`
- `GET /api/contacts`
- `DELETE /api/contacts/:id`

Dashboard:

- `GET /api/dashboard/stats`

## Deploy Backend on Render

1. Push this project to GitHub.
2. Create a new Render Web Service.
3. Select the GitHub repository.
4. Set root directory to `server`.
5. Build command: `npm install`
6. Start command: `npm start`
7. Add all variables from `server/.env.example`.
8. Set `NODE_ENV=production`.
9. Set `CLIENT_URL` to your Vercel frontend URL.
10. Deploy.

After deployment, your API will look like:

```txt
https://your-render-service.onrender.com/api
```

## Deploy Frontend on Vercel

1. Import the GitHub repository into Vercel.
2. Set root directory to `client`.
3. Add environment variable:

```env
VITE_API_URL=https://your-render-service.onrender.com/api
```

4. Deploy.

The included `client/vercel.json` supports direct refreshes on React Router pages.

## Production Checklist

- Use a strong `JWT_SECRET`.
- Change the seeded admin password immediately.
- Restrict MongoDB Atlas network access where practical.
- Configure Cloudinary upload limits and folders.
- Add the final real school address, phone, email, and map URL in `client/src/utils/constants.js`.
- Replace placeholder public images with real school images through the dashboard.
- Keep Render backend URL in Vercel `VITE_API_URL`.
- Keep Vercel frontend URL in Render `CLIENT_URL`.
