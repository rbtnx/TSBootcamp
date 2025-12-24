/**
 * Module 1: JavaScript Fundamentals
 * Topic: Functions
 * 
 * Differences from Python/C:
 * - Arrow functions (lambda-like)
 * - Closures (like Python, but more common)
 * - First-class functions (can pass functions as arguments)
 */

// Function declaration (hoisted, can be called before definition)
function add(a: number, b: number): number {
  return a + b;
}

// Function expression (not hoisted)
const subtract = function (a: number, b: number): number {
  return a - b;
};

// Arrow function (similar to Python lambda, but more powerful)
const multiply = (a: number, b: number): number => a * b;

// Arrow function with body
const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
};

// Closures (function that captures outer scope)
function createCounter(): () => number {
  let count: number = 0;
  return () => {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (independent closure)

// Higher-order functions (functions that take/return functions)
function applyOperation(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}

const result = applyOperation(10, 5, multiply); // 50

// Default parameters (like Python)
function greet(name: string, greeting: string = 'Hello'): string {
  return `${greeting}, ${name}!`;
}

// Rest parameters (like Python *args)
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

export { add, subtract, multiply, divide, createCounter, applyOperation, greet, sum };


