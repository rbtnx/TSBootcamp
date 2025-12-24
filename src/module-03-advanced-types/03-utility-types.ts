/**
 * Module 3: Advanced TypeScript Types
 * Topic: Utility Types
 * 
 * Built-in types that transform other types
 * Similar to type traits or type functions
 */

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  active: boolean;
}

// Partial<T> - Make all properties optional
type PartialUser = Partial<User>;
// Equivalent to: { id?: number; name?: string; ... }

// Required<T> - Make all properties required
type RequiredUser = Required<PartialUser>;

// Readonly<T> - Make all properties readonly
type ReadonlyUser = Readonly<User>;
// Equivalent to: { readonly id: number; readonly name: string; ... }

// Pick<T, K> - Select specific properties
type UserName = Pick<User, 'name' | 'email'>;
// Equivalent to: { name: string; email: string }

// Omit<T, K> - Remove specific properties
type UserWithoutId = Omit<User, 'id'>;
// Equivalent to: { name: string; email: string; age: number; active: boolean }

// Record<K, V> - Create object type with specific keys and values
type UserMap = Record<string, User>;
// Equivalent to: { [key: string]: User }

type Status = 'pending' | 'approved' | 'rejected';
type StatusMap = Record<Status, number>;
// Equivalent to: { pending: number; approved: number; rejected: number }

// Exclude<T, U> - Remove types from union
type AllowedStatus = Exclude<Status, 'rejected'>;
// Equivalent to: 'pending' | 'approved'

// Extract<T, U> - Keep only types that match
type StringTypes = Extract<string | number | boolean, string>;
// Equivalent to: string

// NonNullable<T> - Remove null and undefined
type NonNullString = NonNullable<string | null | undefined>;
// Equivalent to: string

// Parameters<T> - Extract function parameters as tuple
function example(a: string, b: number, c: boolean): void {}
type ExampleParams = Parameters<typeof example>;
// Equivalent to: [string, number, boolean]

// ReturnType<T> - Extract function return type
type ExampleReturn = ReturnType<typeof example>;
// Equivalent to: void

// InstanceType<T> - Extract instance type from constructor
class MyClass {
  constructor(public value: number) {}
}
type MyInstance = InstanceType<typeof MyClass>;
// Equivalent to: MyClass

// Practical examples
function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

function createUserMap(users: User[]): Record<number, User> {
  return users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {} as Record<number, User>);
}

function getUserName(user: User): Pick<User, 'name'> {
  return { name: user.name };
}

export {
  type PartialUser,
  type RequiredUser,
  type ReadonlyUser,
  type UserName,
  type UserWithoutId,
  type UserMap,
  type StatusMap,
  updateUser,
  createUserMap,
  getUserName,
};


