# User Management Application

A full-stack web application for managing users with a modern React frontend and Node.js/Express backend. This project demonstrates a complete MERN stack implementation with user creation, retrieval, and management functionality.

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Available Commands](#available-commands)
- [Project Features](#project-features)
- [API Documentation](#api-documentation)
- [Dependencies](#dependencies)

## Project Overview

This is a comprehensive user management system that allows users to:

- View all registered users
- Add new users with form validation
- View individual user details
- Navigate between different sections with a responsive UI

The application is built with modern web technologies and follows best practices for code organization, styling, and state management.

## Technology Stack

### Frontend

- **React 19** - UI library
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **React Hook Form** - Form handling and validation
- **TailwindCSS** - Utility-first CSS framework
- **ESLint** - Code quality and linting

### Backend

- **Node.js** - JavaScript runtime
- **Express 5** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM (Object Data Modeling)
- **Nodemon** - Development server auto-reload
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

## Project Structure

```
user_management-main/
│
├── BackEnd/                          # Backend server
│   ├── package.json                  # Backend dependencies
│   ├── server.js                     # Main server file
│   ├── test.http                     # API testing file
│   ├── APIs/
│   │   └── userApi.js                # User API routes
│   └── Models/
│       └── userModel.js              # User database schema
│
├── FrontEnd/                         # Frontend React application
│   ├── package.json                  # Frontend dependencies
│   ├── vite.config.js                # Vite configuration
│   ├── eslint.config.js              # ESLint configuration
│   ├── vercel.json                   # Vercel deployment config
│   ├── index.html                    # HTML entry point
│   ├── public/                       # Static assets
│   │   └── _redirects                # URL rewrite rules
│   └── src/
│       ├── main.jsx                  # React entry point
│       ├── App.jsx                   # Root component with routing
│       ├── App.css                   # Global styles
│       ├── index.css                 # Global CSS
│       └── Components/
│           ├── RootLayout.jsx        # Main layout wrapper
│           ├── Header.jsx            # Navigation header
│           ├── Footer.jsx            # Page footer
│           ├── Home.jsx              # Home page
│           ├── AddUser.jsx           # Add user form
│           ├── UsersList.jsx         # Users list view
│           └── User.jsx              # Individual user detail view
│
└── README.md                         # This file
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB (local or cloud instance)

### Backend Setup

1. Navigate to the BackEnd folder:

   ```bash
   cd BackEnd
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the BackEnd directory with the following variables:

   ```
   PORT=5000
   DB_URL=mongodb://localhost:27017/user_management
   FRONTEND_URL=http://localhost:5173
   ```

4. Start the server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the FrontEnd folder:

   ```bash
   cd FrontEnd
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will run on `http://localhost:5173`

## Available Commands

### Backend Commands

| Command       | Description                                  |
| ------------- | -------------------------------------------- |
| `npm start`   | Run the server in production mode            |
| `npm run dev` | Run the server with hot-reload using nodemon |
| `npm test`    | Run tests (currently not configured)         |

### Frontend Commands

| Command           | Description                                               |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Start Vite development server with hot module replacement |
| `npm run build`   | Build the application for production                      |
| `npm run preview` | Preview the production build locally                      |
| `npm run lint`    | Run ESLint to check code quality                          |

## Project Features

1. **User Management**
   - Create new users with form validation
   - View list of all users
   - View detailed information for individual users
   - Responsive UI that works on all devices

2. **Form Validation**
   - Client-side validation using React Hook Form
   - Real-time error feedback
   - User-friendly error messages

3. **API Integration**
   - RESTful API endpoints
   - Error handling
   - CORS support for cross-origin requests

4. **Styling**
   - Modern UI with TailwindCSS utility classes
   - Responsive design
   - Consistent branding

5. **Routing**
   - Multi-page navigation using React Router
   - Separate routes for different views
   - Dynamic routing for individual users

## API Documentation

### Base URL

```
http://localhost:5000/user-api
```

### Endpoints

The backend provides RESTful API endpoints for user management. Refer to `BackEnd/test.http` for detailed API testing examples.

**Routes handled in:**

- `BackEnd/APIs/userApi.js` - User-related endpoints

### Environment Variables

Backend uses the following environment variables (set in `.env`):

- `PORT` - Server port (default: 5000)
- `DB_URL` - MongoDB connection string
- `FRONTEND_URL` - Frontend URL for CORS configuration

## Dependencies

### Backend Dependencies

| Package  | Version | Purpose               |
| -------- | ------- | --------------------- |
| express  | ^5.2.1  | Web framework         |
| mongoose | ^9.2.3  | MongoDB ODM           |
| cors     | ^2.8.6  | CORS middleware       |
| dotenv   | ^17.3.1 | Environment variables |

**Dev Dependencies:**

- nodemon ^3.1.14 - Auto-reload server during development

### Frontend Dependencies

| Package           | Version | Purpose                 |
| ----------------- | ------- | ----------------------- |
| react             | ^19.2.0 | UI library              |
| react-dom         | ^19.2.0 | React DOM utilities     |
| react-router      | ^7.13.1 | Client-side routing     |
| react-hook-form   | ^7.71.2 | Form state management   |
| tailwindcss       | ^4.2.1  | CSS framework           |
| @tailwindcss/vite | ^4.2.1  | TailwindCSS Vite plugin |

**Dev Dependencies:**

- vite ^7.3.1 - Build tool
- eslint ^9.39.1 - Code linting
- @vitejs/plugin-react ^5.1.1 - React plugin for Vite
- And various ESLint plugins and TypeScript definitions

## Development Workflow

1. **Start Backend:**

   ```bash
   cd BackEnd
   npm run dev
   ```

2. **Start Frontend (in new terminal):**

   ```bash
   cd FrontEnd
   npm run dev
   ```

3. The frontend development server will open at `http://localhost:5173`

4. Make changes to the code - both frontend and backend support hot-reload during development

## Additional Resources

- **Vite Documentation:** https://vitejs.dev
- **React Documentation:** https://react.dev
- **Express Documentation:** https://expressjs.com
- **Mongoose Documentation:** https://mongoosejs.com
- **React Router Documentation:** https://reactrouter.com
- **TailwindCSS Documentation:** https://tailwindcss.com

## License

ISC License

---

**Last Updated:** May 2026
