/**
 * Module 2: TypeScript Type System
 * Topic: Basic Types
 * 
 * TypeScript adds static typing to JavaScript
 * Similar to C's type system, but more flexible
 */

// Primitive types
const name: string = 'Alice';
const age: number = 30;
const isActive: boolean = true;
const nothing: null = null;
const notDefined: undefined = undefined;

// Type inference (TypeScript can infer types)
const inferredString = 'Hello'; // Type: string
const inferredNumber = 42; // Type: number

// void: No return value (like C's void)
function logMessage(msg: string): void {
  console.log(msg);
}

// never: Function never returns (throws or infinite loop)
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // Never exits
  }
}

// Arrays
const numbers: number[] = [1, 2, 3, 4, 5];
const names: Array<string> = ['Alice', 'Bob', 'Charlie']; // Alternative syntax

// Tuples (fixed-length arrays with specific types)
const person: [string, number] = ['Alice', 30];
const coordinates: [number, number, number] = [10, 20, 30];

// Accessing tuple elements
const personName = person[0]; // string
const personAge = person[1]; // number

// Enums (like C enums, but more powerful)
enum Color {
  Red,
  Green,
  Blue,
}

const favoriteColor: Color = Color.Green;

// String enums
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

// Type assertions (telling TypeScript you know the type)
const someValue: unknown = 'this is a string';
const strLength = (someValue as string).length;

// Alternative syntax
const strLength2 = (<string>someValue).length;

export {
  name,
  age,
  isActive,
  logMessage,
  throwError,
  numbers,
  names,
  person,
  coordinates,
  Color,
  Direction,
};


