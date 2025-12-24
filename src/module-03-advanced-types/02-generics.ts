/**
 * Module 3: Advanced TypeScript Types
 * Topic: Generics
 * 
 * Generics allow code to work with multiple types
 * Similar to C++ templates or Python type hints with TypeVar
 */

// Generic function (like C++ template function)
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const str = identity<string>('hello');
const inferred = identity(42); // TypeScript infers T = number

// Generic interface
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: 'hello' };

// Generic class
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
const top = numberStack.pop(); // Type: number | undefined

// Generic constraints (like C++ concepts)
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength('hello'); // OK: string has length
logLength([1, 2, 3]); // OK: array has length
// logLength(42); // Error: number doesn't have length

// Multiple constraints
function combine<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// Using type parameters in generic constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: 'Alice', age: 30 };
const name = getProperty(person, 'name'); // Type: string
const age = getProperty(person, 'age'); // Type: number
// const invalid = getProperty(person, 'invalid'); // Error

// Generic utility types
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Example usage
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserUpdate = Partial<User>; // All fields optional
type UserPublic = Omit<User, 'password'>; // User without password
type UserName = Pick<User, 'name' | 'email'>; // Only name and email

export {
  identity,
  numberBox,
  stringBox,
  Stack,
  logLength,
  combine,
  getProperty,
  type Box,
  type User,
  type UserUpdate,
  type UserPublic,
};


