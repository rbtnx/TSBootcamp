/**
 * Module 1: JavaScript Fundamentals
 * Topic: Variables & Scope
 * 
 * Key differences from C/Python:
 * - `let` and `const` have block scope (like C's block scope)
 * - `var` has function scope and hoisting (unusual behavior)
 * - No explicit types (unlike C)
 */

// let: Block-scoped, can be reassigned
let mutable: string = 'I can change';
mutable = 'Changed!';

// const: Block-scoped, cannot be reassigned (like C's const)
const immutable: string = 'I cannot change';
// immutable = 'Error!'; // This would cause a compile error

// Block scope example
function demonstrateBlockScope(): void {
  if (true) {
    let blockScoped: number = 42;
    const alsoBlockScoped: number = 24;
    console.log(blockScoped); // 42
  }
  // console.log(blockScoped); // Error: blockScoped is not defined
}

// Hoisting example (var behavior - avoid using var!)
function demonstrateHoisting(): void {
  // This works (but is confusing):
  console.log(x); // undefined (not an error!)
  var x: number = 5;
  
  // This doesn't work (better behavior):
  // console.log(y); // Error: Cannot access 'y' before initialization
  let y: number = 5;
}

// Destructuring (similar to Python tuple unpacking)
const [first, second, third] = [1, 2, 3];
const { name, age } = { name: 'Alice', age: 30 };

export { demonstrateBlockScope, demonstrateHoisting };


