# Frontend - User Management React Application

A modern, responsive React application for managing user data with a clean user interface. Built with React 19, Vite, React Router, and TailwindCSS for an optimal development and user experience.

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Available Commands](#available-commands)
- [Component Architecture](#component-architecture)
- [Routing](#routing)
- [Styling](#styling)
- [Dependencies](#dependencies)
- [File Descriptions](#file-descriptions)

## Overview

This frontend application provides a user-friendly interface for managing users. It features:

- User-friendly form for adding new users
- Dynamic list view of all users
- Detailed view for individual users
- Responsive design that works on all devices
- Form validation with React Hook Form
- Modern styling with TailwindCSS
- Fast development experience with Vite

## Technology Stack

- **React 19.2.0** - UI library
- **Vite 7.3.1** - Build tool and development server
- **React Router 7.13.1** - Client-side routing
- **React Hook Form 7.71.2** - Form state management
- **TailwindCSS 4.2.1** - Utility-first CSS framework
- **@tailwindcss/vite 4.2.1** - TailwindCSS Vite integration
- **ESLint 9.39.1** - Code quality and linting
- **@vitejs/plugin-react 5.1.1** - React plugin for Vite

## Project Structure

```
FrontEnd/
│
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint configuration
├── vercel.json                   # Vercel deployment config
├── index.html                    # HTML entry point
│
├── public/                       # Static assets
│   └── _redirects                # URL rewrite rules for deployment
│
└── src/                          # Source code
    ├── main.jsx                  # React application entry point
    ├── App.jsx                   # Root component with routing
    ├── App.css                   # Global application styles
    ├── index.css                 # Global CSS reset and utilities
    │
    └── Components/               # Reusable React components
        ├── RootLayout.jsx        # Main layout wrapper component
        ├── Header.jsx            # Navigation header component
        ├── Footer.jsx            # Footer component
        ├── Home.jsx              # Home/landing page
        ├── AddUser.jsx           # User creation form component
        ├── UsersList.jsx         # Users list view component
        └── User.jsx              # Individual user detail component
```

## Setup Instructions

### Prerequisites

- Node.js v14 or higher
- npm or yarn package manager
- Backend server running (see [Backend README](../BackEnd/README.md))

### Installation Steps

1. **Navigate to FrontEnd directory:**

   ```bash
   cd FrontEnd
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

   The application will open at `http://localhost:5173`

4. **(Optional) Build for production:**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `dist/` folder.

## Available Commands

| Command           | Description                      | Usage             |
| ----------------- | -------------------------------- | ----------------- |
| `npm run dev`     | Start Vite dev server with HMR   | `npm run dev`     |
| `npm run build`   | Build for production             | `npm run build`   |
| `npm run preview` | Preview production build locally | `npm run preview` |
| `npm run lint`    | Run ESLint to check code quality | `npm run lint`    |

### Development Workflow:

```bash
# Start development server
npm run dev

# The application opens at http://localhost:5173
# Changes are reflected instantly with Hot Module Replacement (HMR)
```

### Production Build:

```bash
# Create optimized production build
npm run build

# Preview the production build
npm run preview
```

### Code Quality:

```bash
# Check code for linting errors
npm run lint
```

## Component Architecture

### Component Hierarchy

```
App (Root)
├── RootLayout (Main Layout)
│   ├── Header (Navigation)
│   ├── Main Content (Route-based)
│   │   ├── Home
│   │   ├── AddUser
│   │   ├── UsersList
│   │   └── User (Detail)
│   └── Footer
```

### Component Descriptions

#### **RootLayout.jsx**

- Main layout wrapper component
- Contains header, footer, and route outlet
- Provides consistent page structure
- Wraps all other pages with navigation

#### **Header.jsx**

- Navigation bar component
- Links to different sections (Home, Add User, Users List)
- Responsive navigation design
- Branding and logo area

#### **Footer.jsx**

- Page footer component
- Copyright and additional links
- Consistent across all pages

#### **Home.jsx**

- Landing page/home view
- Welcome message and introduction
- Quick links to main features
- Hero section

#### **AddUser.jsx**

- User creation form component
- React Hook Form for form management
- Input validation (client-side)
- Form submission handling
- Displays success/error messages

#### **UsersList.jsx**

- Displays all users in a list/grid view
- Fetches user data from backend API
- Click to view user details
- Responsive grid layout with TailwindCSS

#### **User.jsx**

- Individual user detail view
- Displays comprehensive user information
- Dynamic routing with user ID
- Option to go back to users list
- Edit/Delete functionality (can be added)

## Routing

React Router manages all navigation. Routes are defined in `App.jsx`:

| Route       | Component   | Purpose                    |
| ----------- | ----------- | -------------------------- |
| `/`         | `Home`      | Landing page               |
| `/add-user` | `AddUser`   | User creation form         |
| `/users`    | `UsersList` | View all users             |
| `/user/:id` | `User`      | View specific user details |

### Navigation Example:

```jsx
// Link to user list
<Link to="/users">View All Users</Link>;

// Programmatic navigation
navigate(`/user/${userId}`);
```

## Styling

### TailwindCSS Integration

The application uses **TailwindCSS 4** for styling with utility-first approach:

**Key TailwindCSS Features:**

- Responsive design classes (sm:, md:, lg:, xl:)
- Flexbox and Grid utilities
- Color palette and spacing system
- Dark mode support (optional)

### Global Styles

**App.css** - Application-specific styles

```css
Custom animations, component-specific styling, theme colors
```

**index.css** - Global CSS reset and utilities

```css
Tailwind directives, global variables, base styles
```

### Responsive Design:

```jsx
// Example of responsive TailwindCSS
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid */}
</div>
```

## Dependencies

### Production Dependencies

| Package               | Version | Purpose                              |
| --------------------- | ------- | ------------------------------------ |
| **react**             | ^19.2.0 | UI library for building components   |
| **react-dom**         | ^19.2.0 | React DOM rendering                  |
| **react-router**      | ^7.13.1 | Client-side routing and navigation   |
| **react-hook-form**   | ^7.71.2 | Form state management and validation |
| **tailwindcss**       | ^4.2.1  | Utility-first CSS framework          |
| **@tailwindcss/vite** | ^4.2.1  | TailwindCSS Vite plugin              |

### Development Dependencies

| Package                         | Version | Purpose                                |
| ------------------------------- | ------- | -------------------------------------- |
| **vite**                        | ^7.3.1  | Build tool and dev server              |
| **@vitejs/plugin-react**        | ^5.1.1  | React plugin for Vite (JSX support)    |
| **eslint**                      | ^9.39.1 | Code linting tool                      |
| **@eslint/js**                  | ^9.39.1 | ESLint JavaScript library              |
| **eslint-plugin-react-hooks**   | ^7.0.1  | ESLint rules for React Hooks           |
| **eslint-plugin-react-refresh** | ^0.4.24 | ESLint plugin for Vite's React refresh |
| **@types/react**                | ^19.2.7 | TypeScript definitions for React       |
| **@types/react-dom**            | ^19.2.3 | TypeScript definitions for React DOM   |
| **globals**                     | ^16.5.0 | Global definitions for ESLint          |

### Installation:

```bash
npm install
```

## File Descriptions

### `main.jsx`

**React Application Entry Point**

- Imports React and ReactDOM
- Mounts the app to the DOM
- Entry point for the entire application
- Usually minimal and clean

```javascript
// Typically:
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### `App.jsx`

**Root Component with Routing**

- Contains React Router configuration
- Defines all application routes
- Wraps components with layout
- Main application logic

### `vite.config.js`

**Vite Configuration**

- Configures build tool and dev server
- Sets up React plugin
- Defines build output directory
- Environment variable configuration

### `eslint.config.js`

**Code Quality Configuration**

- ESLint rules and settings
- React-specific linting rules
- Code style enforcement
- Helps maintain code quality

### `index.html`

**HTML Entry Point**

- Root HTML file served to browser
- Contains `<div id="root">` for React mounting
- Links to stylesheets and scripts
- Meta tags and document structure

### `vercel.json`

**Deployment Configuration**

- Vercel deployment settings
- Build configuration
- Environment variables
- Routing and rewrite rules

## API Integration

The frontend communicates with the backend API at:

```
http://localhost:5000/user-api
```

### Example API Call (in components):

```javascript
// Fetch users
const response = await fetch("http://localhost:5000/user-api/users");
const data = await response.json();

// Create user
const response = await fetch("http://localhost:5000/user-api/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(userData),
});
```

## Form Validation

Uses **React Hook Form** for efficient form management:

```javascript
import { useForm } from "react-hook-form";

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

<input {...register("username", { required: "Username is required" })} />;
{
  errors.username && <span>{errors.username.message}</span>;
}
```

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Vite configuration
4. Set environment variables if needed
5. Deploy

The `vercel.json` file contains deployment configuration.

## Development Tips

1. **Hot Module Replacement (HMR):**
   - Changes are reflected instantly without full reload
   - State is preserved during HMR

2. **Browser DevTools:**
   - React DevTools browser extension for debugging
   - Redux DevTools (if using Redux)

3. **ESLint:**
   - Run `npm run lint` before committing
   - Fix auto-fixable issues: `npm run lint -- --fix`

4. **Performance:**
   - Use React.memo for expensive components
   - Lazy load routes with React.lazy()
   - Optimize images and assets

## Additional Resources

- **React Documentation:** https://react.dev
- **Vite Documentation:** https://vitejs.dev
- **React Router Documentation:** https://reactrouter.com
- **React Hook Form Documentation:** https://react-hook-form.com
- **TailwindCSS Documentation:** https://tailwindcss.com
- **ESLint Documentation:** https://eslint.org

## Related Documentation

- [Main Project README](../README.md)
- [Backend README](../BackEnd/README.md)

## Troubleshooting

### Port 5173 Already in Use

```bash
# Vite will use next available port automatically
npm run dev
```

### Modules Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### CORS Errors

```bash
# Ensure backend is running on correct port
# Check CORS configuration in backend
```

### Build Fails

```bash
# Check for TypeScript errors
# Review ESLint warnings
npm run lint
```

## License

ISC License

---

**Last Updated:** May 2026

**Development Server:** http://localhost:5173
**Build Output:** `dist/` directory
**Package Manager:** npm
