/**
 * Module 11: Backend TypeScript
 * Topic: Express.js with TypeScript
 * 
 * Type-safe backend development
 */

import express, { Request, Response, NextFunction } from 'express';

// Define request/response types
interface User {
  id: number;
  name: string;
  email: string;
}

interface CreateUserRequest {
  name: string;
  email: string;
}

// Custom request type with user data
interface AuthenticatedRequest extends Request {
  user?: User;
}

// Middleware type
type Middleware = (req: Request, res: Response, next: NextFunction) => void | Promise<void>;

// Example middleware
const loggerMiddleware: Middleware = (req, _res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
};

// Authentication middleware (example)
const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  // In real app, verify JWT token, etc.
  const token = req.headers.authorization;
  if (token) {
    req.user = { id: 1, name: 'Alice', email: 'alice@example.com' };
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(loggerMiddleware);

// In-memory data store (use database in real app)
const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

// Type-safe route handlers
app.get('/users', (_req: Request, res: Response): void => {
  res.json(users);
});

app.get('/users/:id', (req: Request, res: Response): void => {
  const idParam = req.params.id;
  if (!idParam) {
    res.status(400).json({ error: 'User ID is required' });
    return;
  }
  const id = parseInt(idParam, 10);
  const user = users.find((u) => u.id === id);
  
  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  
  res.json(user);
});

app.post('/users', (req: Request<{}, User, CreateUserRequest>, res: Response): void => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    res.status(400).json({ error: 'Name and email are required' });
    return;
  }
  
  const newUser: User = {
    id: users.length + 1,
    name,
    email,
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

// Protected route
app.get('/profile', authMiddleware, (req: AuthenticatedRequest, res: Response): void => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// Error handling middleware
const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
};

app.use(errorHandler);

// Start server (commented out - uncomment to run)
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

export { app, loggerMiddleware, authMiddleware, errorHandler, type User, type CreateUserRequest };


