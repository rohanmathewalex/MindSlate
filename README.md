
# MindSlate - AI-Powered Flashcard SaaS Application

## Overview

MindSlate is an AI-powered flashcard application designed to help students study more efficiently by automatically generating flashcards from uploaded documents, providing personalized feedback, and tracking progress.

## Folder Structure

```
/project-root
│
├── /config               # Configuration files
│   ├── config.js         # Application configuration
│   └── db.js             # Database connection setup
│
├── /controllers          # Controllers handle requests and responses
│   ├── authController.js     # Authentication related operations
│   ├── userController.js     # User management operations
│   ├── flashcardController.js # Flashcard management
│   └── errorController.js    # Global error handling
│
├── /middlewares          # Middleware functions that run during request processing
│   ├── authMiddleware.js     # Protects routes with authentication
│   ├── rateLimiter.js        # Rate limiting to prevent abuse
│   ├── errorHandler.js       # Handles application errors
│   ├── asyncHandler.js       # Simplifies async/await error handling
│   └── validationMiddleware.js # Validates incoming requests
│
├── /models               # Database schemas and models
│   ├── User.js               # User data schema
│   ├── Flashcard.js          # Flashcard schema
│   ├── Document.js           # Document schema
│   ├── Payment.js            # Payment schema
│   └── Admin.js              # Admin data schema
│
├── /routes               # Application routes
│   ├── authRoutes.js         # Routes for authentication
│   ├── userRoutes.js         # Routes for user management
│   ├── flashcardRoutes.js    # Routes for flashcard management
│   ├── adminRoutes.js        # Admin specific routes
│   └── paymentRoutes.js      # Routes for payment processing
│
├── /services             # Business logic and interaction with external APIs
│   ├── authService.js        # Handles authentication logic
│   ├── userService.js        # Handles user-related operations
│   ├── flashcardService.js   # Handles flashcard-related operations
│   ├── paymentService.js     # Handles payment processing
│   ├── aiService.js          # Integrates with AI services for flashcard generation
│   └── emailService.js       # Sends emails (welcome, password reset)
│
├── /utils                # Utility functions and helpers
│   ├── logger.js            # Configures and exports Winston logger
│   ├── errorResponse.js     # Custom error response handler
│   ├── generateToken.js     # Generates JWT tokens
│   ├── sendEmail.js         # Utility for sending emails
│   └── validateInput.js     # Input validation functions
│
├── /views                # Static views and email templates
│   └── emailTemplates       # HTML templates for transactional emails
│       ├── welcomeEmail.html # Welcome email template
│       └── passwordReset.html # Password reset email template
│
├── /logs                 # Log files
│   └── application.log     # Main application log file
│
├── /tests                # Unit and integration tests
│   ├── auth.test.js         # Tests for authentication routes/services
│   ├── user.test.js         # Tests for user routes/services
│   └── flashcard.test.js    # Tests for flashcard routes/services
│
├── /client               # Frontend application (React + TypeScript)
│   ├── /public            # Publicly accessible files
│   │   ├── index.html     # Main HTML file
│   │   ├── favicon.ico    # Favicon
│   │   └── manifest.json  # PWA manifest file
│   │
│   ├── /src               # Main source code
│   │   ├── /assets        # Static assets (images, fonts, etc.)
│   │   ├── /components    # Reusable React components
│   │   ├── /hooks         # Custom React hooks
│   │   ├── /pages         # Page components for each route
│   │   ├── /context       # Context providers for global state management
│   │   ├── /services      # API service functions
│   │   ├── /styles        # Global and component-specific styles
│   │   ├── /types         # TypeScript type definitions
│   │   ├── /utils         # Utility functions and helpers
│   │   ├── App.tsx        # Main application component
│   │   ├── index.tsx      # Entry point for the React app
│   │   └── react-app-env.d.ts # TypeScript environment definitions
│   │
│   ├── tsconfig.json      # TypeScript configuration file
│   └── package.json       # Frontend dependencies and scripts
│
├── .env                  # Environment variables file
├── .gitignore            # Files and directories ignored by git
├── package.json          # Project metadata and dependencies
├── server.js             # Application entry point
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your system.
- **MongoDB** for database management.
- **GitHub** repository set up to push your code.

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/mindslate.git
   cd mindslate
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the project root and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
   
4. **Run the server:**
   ```bash
   npm start
   ```
   The application will start on `http://localhost:5000`.

## Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd client
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Run the frontend application:**
   ```bash
   npm start
   ```
   The frontend will start on `http://localhost:3000`.

## Future Versions

### **v1.0 (Demo Version)**
- **Features**:
  - Document upload and flashcard generation.
  - Interactive flashcard answering with immediate feedback.
  - Basic adaptive learning.

### **v2.0 (Upcoming)**
- **Features**:
  - Multiple language support.
  - Scoring system and topic improvement suggestions.
  - Gamification and personalized study plans.
  - Collaborative study groups.
  - Advanced AI-driven insights and analytics.

## Contribution Guidelines

- **Fork the repository** on GitHub.
- **Create a new branch** (`feature/your-feature-name`).
- **Commit your changes** with clear and concise messages.
- **Push to the branch** and submit a Pull Request.

## License

This project is licensed under the MIT License.
