/**
 * Module 3: Advanced TypeScript Types
 * Topic: Interfaces
 * 
 * Interfaces define contracts for objects
 * Similar to abstract classes in C++, but for shapes/structure
 */

// Basic interface
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
};

// Optional properties
interface Config {
  host: string;
  port: number;
  timeout?: number; // Optional
  retries?: number; // Optional
}

const config1: Config = {
  host: 'localhost',
  port: 8080,
};

const config2: Config = {
  host: 'localhost',
  port: 8080,
  timeout: 5000,
  retries: 3,
};

// Readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 30; // Error: Cannot assign to 'x' because it is a read-only property

// Function types in interfaces
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const calc: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

// Index signatures (like dictionaries in Python)
interface StringDictionary {
  [key: string]: string;
}

const dict: StringDictionary = {
  name: 'Alice',
  city: 'Berlin',
};

// Extending interfaces (inheritance)
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

const myDog: Dog = {
  name: 'Buddy',
  age: 5,
  breed: 'Golden Retriever',
  bark: () => console.log('Woof!'),
};

// Multiple inheritance
interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

interface Duck extends Animal, Flyable, Swimmable {
  quack(): void;
}

// Interface vs Type Alias
// Interfaces can be extended and merged
// Types can represent unions, intersections, primitives, etc.

type Status = 'active' | 'inactive'; // Can't do this with interface

interface StatusInterface {
  // Can't represent union of literals
}

export { user, config1, config2, point, calc, dict, myDog, type User, type Config };


