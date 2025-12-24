/**
 * Module 11: Backend TypeScript
 * Topic: Runtime Validation
 * 
 * Validating data at runtime (TypeScript types are compile-time only)
 */

// Manual validation (basic approach)
interface UserInput {
  name: string;
  email: string;
  age: number;
}

function validateUserInput(input: unknown): input is UserInput {
  if (typeof input !== 'object' || input === null) {
    return false;
  }

  const obj = input as Record<string, unknown>;

  return (
    typeof obj.name === 'string' &&
    obj.name.length > 0 &&
    typeof obj.email === 'string' &&
    obj.email.includes('@') &&
    typeof obj.age === 'number' &&
    obj.age > 0 &&
    obj.age < 150
  );
}

// Using Zod for validation (popular library)
// Note: This is a conceptual example - install zod package to use
/*
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().int().positive().max(150),
});

type User = z.infer<typeof UserSchema>;

function validateWithZod(input: unknown): User {
  return UserSchema.parse(input); // Throws if invalid
}

function safeValidateWithZod(input: unknown): { success: true; data: User } | { success: false; error: string } {
  const result = UserSchema.safeParse(input);
  if (result.success) {
    return { success: true, data: result.data };
  } else {
    return { success: false, error: result.error.message };
  }
}
*/

// Custom validation class
class Validator<T> {
  private rules: Array<(value: unknown) => boolean> = [];
  private errorMessage: string = 'Validation failed';

  addRule(rule: (value: unknown) => boolean, message?: string): this {
    this.rules.push(rule);
    if (message) {
      this.errorMessage = message;
    }
    return this;
  }

  validate(value: unknown): value is T {
    return this.rules.every((rule) => rule(value));
  }

  getError(): string {
    return this.errorMessage;
  }
}

// Usage
const emailValidator = new Validator<string>()
  .addRule((v) => typeof v === 'string', 'Must be a string')
  .addRule((v) => (v as string).includes('@'), 'Must contain @')
  .addRule((v) => (v as string).length > 5, 'Must be longer than 5 characters');

function validateEmail(email: unknown): email is string {
  return emailValidator.validate(email);
}

// Express middleware for validation
import { Request, Response, NextFunction } from 'express';

function createValidationMiddleware<T>(
  validator: (value: unknown) => value is T
) {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (validator(req.body)) {
      next();
    } else {
      res.status(400).json({ error: 'Invalid request body' });
    }
  };
}

// Example usage
const userValidationMiddleware = createValidationMiddleware(validateUserInput);

export {
  validateUserInput,
  Validator,
  validateEmail,
  createValidationMiddleware,
  userValidationMiddleware,
  type UserInput,
};


