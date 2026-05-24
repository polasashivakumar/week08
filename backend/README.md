# Backend - User Management API

A robust Node.js/Express backend server that provides RESTful API endpoints for user management. This server handles user creation, retrieval, and database operations using MongoDB with Mongoose ODM.

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Environment Configuration](#environment-configuration)
- [Available Commands](#available-commands)
- [API Endpoints](#api-endpoints)
- [Dependencies](#dependencies)
- [File Descriptions](#file-descriptions)

## Overview

This backend server is built with Express.js and provides a complete API for managing user data. It includes:

- RESTful API endpoints for CRUD operations
- MongoDB database integration via Mongoose
- CORS support for frontend communication
- Environment-based configuration
- Error handling and validation

## Technology Stack

- **Node.js** - JavaScript runtime environment
- **Express.js 5.2.1** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 9.2.3** - MongoDB object modeling
- **CORS 2.8.6** - Cross-Origin Resource Sharing middleware
- **dotenv 17.3.1** - Environment variable loader
- **Nodemon 3.1.14** - Development server auto-reload (dev only)

## Project Structure

```
BackEnd/
│
├── package.json              # Project metadata and dependencies
├── server.js                 # Main server configuration and startup
├── test.http                 # API testing file (VS Code REST Client)
│
├── APIs/                     # API route handlers
│   └── userApi.js            # User-related API endpoints
│
└── Models/                   # Database schemas and models
    └── userModel.js          # User data model and schema definition
```

## Setup Instructions

### Prerequisites

- Node.js v14 or higher
- npm or yarn package manager
- MongoDB instance (local or MongoDB Atlas cloud)

### Installation Steps

1. **Navigate to BackEnd directory:**

   ```bash
   cd BackEnd
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create environment file:**
   Create a `.env` file in the BackEnd directory:

   ```bash
   touch .env
   ```

4. **Configure environment variables:**
   Add the following to your `.env` file:

   ```env
   PORT=5000
   DB_URL=mongodb://localhost:27017/user_management
   FRONTEND_URL=http://localhost:5173
   ```

5. **Start the server:**
   ```bash
   npm run dev
   ```

## Environment Configuration

Create a `.env` file with the following variables:

| Variable       | Description                         | Example                                     |
| -------------- | ----------------------------------- | ------------------------------------------- |
| `PORT`         | Server port number                  | `5000`                                      |
| `DB_URL`       | MongoDB connection string           | `mongodb://localhost:27017/user_management` |
| `FRONTEND_URL` | Frontend application URL (for CORS) | `http://localhost:5173`                     |

### Example .env file:

```env
PORT=5000
DB_URL=mongodb://localhost:27017/user_management
FRONTEND_URL=http://localhost:5173
```

### Using MongoDB Atlas (Cloud):

```env
PORT=5000
DB_URL=mongodb+srv://username:password@cluster.mongodb.net/user_management
FRONTEND_URL=http://localhost:5173
```

## Available Commands

| Command       | Description                              | Usage         |
| ------------- | ---------------------------------------- | ------------- |
| `npm start`   | Run server in production mode            | `npm start`   |
| `npm run dev` | Run server with hot-reload (development) | `npm run dev` |
| `npm test`    | Run test suite (not configured)          | `npm test`    |

### Development Workflow:

```bash
# Start development server with auto-reload
npm run dev

# Server will listen on http://localhost:5000
# Any code changes will automatically restart the server
```

## API Endpoints

### Base URL

```
http://localhost:5000/user-api
```

### Available Endpoints

The user API endpoints are defined in `APIs/userApi.js`. For detailed API testing, refer to `test.http` file.

**Common operations:**

- **GET** - Retrieve user(s)
- **POST** - Create new user
- **PUT** - Update user information
- **DELETE** - Remove user record

### CORS Configuration

The server is configured to accept requests from:

- Frontend development URL: `http://localhost:5173`
- Production frontend URL: (from `FRONTEND_URL` environment variable)

This prevents unauthorized API access and allows secure communication between frontend and backend.

## Dependencies

### Production Dependencies

| Package      | Version | Purpose                                       |
| ------------ | ------- | --------------------------------------------- |
| **express**  | ^5.2.1  | Web framework and routing                     |
| **mongoose** | ^9.2.3  | MongoDB object modeling and schema validation |
| **cors**     | ^2.8.6  | Enable Cross-Origin Resource Sharing          |
| **dotenv**   | ^17.3.1 | Load environment variables from .env file     |

### Development Dependencies

| Package     | Version | Purpose                             |
| ----------- | ------- | ----------------------------------- |
| **nodemon** | ^3.1.14 | Auto-restart server on file changes |

### Installation

```bash
npm install
```

## File Descriptions

### `server.js`

**Main server configuration file**

Responsibilities:

- Load environment variables using dotenv
- Create Express application instance
- Configure CORS middleware for frontend communication
- Setup JSON parser middleware
- Connect to MongoDB database
- Mount API routes
- Start the server on specified port

Key features:

- CORS whitelist for secure cross-origin requests
- Environment-based configuration
- Error handling for database connection
- Graceful server startup logging

```javascript
// Example CORS configuration
const allowedOrigins = process.env.FRONTEND_URL
  ? [process.env.FRONTEND_URL, "http://localhost:5173"]
  : ["http://localhost:5173"];

App.use(cors({ origin: allowedOrigins }));
```

### `APIs/userApi.js`

**User API route handlers**

Responsibilities:

- Define all user-related endpoints
- Handle request validation
- Process user data
- Return appropriate responses
- Error handling for API operations

Structure:

- Import Express and User model
- Create Express router
- Define route handlers for user operations
- Export configured router

### `Models/userModel.js`

**User database schema and model**

Responsibilities:

- Define user data structure using Mongoose schema
- Set up field validations
- Define data types and constraints
- Create User model for database operations

Structure:

- Import Mongoose
- Define user schema with fields
- Apply validations and constraints
- Export User model

## Request/Response Flow

```
Client Request
     ↓
Express Routing (APIs/userApi.js)
     ↓
User Model (Models/userModel.js)
     ↓
MongoDB Database
     ↓
Response sent back to Client
```

## Security Considerations

1. **CORS Configuration** - Only allows requests from specified frontend URL
2. **Environment Variables** - Sensitive data stored in .env file (not committed to version control)
3. **Input Validation** - Mongoose schema enforces data types and structure
4. **Database Connection** - Protected connection string in environment variable

## Common Issues and Solutions

### Port Already in Use

```bash
# If port 5000 is already in use, change in .env
PORT=3000
```

### MongoDB Connection Failed

```bash
# Check if MongoDB is running
# For local MongoDB:
mongod

# Verify connection string in .env
DB_URL=mongodb://localhost:27017/user_management
```

### CORS Errors

```bash
# Ensure FRONTEND_URL environment variable matches your frontend URL
FRONTEND_URL=http://localhost:5173
```

### Nodemon Not Reloading

```bash
# Reinstall nodemon
npm install --save-dev nodemon
```

## Additional Resources

- **Express Documentation:** https://expressjs.com
- **Mongoose Documentation:** https://mongoosejs.com
- **MongoDB Documentation:** https://docs.mongodb.com
- **Node.js Documentation:** https://nodejs.org/docs
- **CORS Guide:** https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

## Related Documentation

- [Main Project README](../README.md)
- [Frontend README](../FrontEnd/README.md)
- [API Testing Guide](./test.http)

## License

ISC License

---

**Last Updated:** May 2026

**Backend Server Port:** 5000
**Database:** MongoDB
