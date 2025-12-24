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
void mutable; // Use variable to avoid unused warning

// const: Block-scoped, cannot be reassigned (like C's const)
const immutable: string = 'I cannot change';
// immutable = 'Error!'; // This would cause a compile error
void immutable; // Use variable to avoid unused warning

// Block scope example
function demonstrateBlockScope(): void {
  if (true) {
    let blockScoped: number = 42;
    const alsoBlockScoped: number = 24;
    console.log(blockScoped); // 42
    void alsoBlockScoped; // Use variable to avoid unused warning
  }
  // console.log(blockScoped); // Error: blockScoped is not defined
}

// Hoisting example (var behavior - avoid using var!)
function demonstrateHoisting(): void {
  // This works (but is confusing):
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var x: number; // Declared but not initialized
  // Note: In strict mode, using x before assignment would cause an error
  x = 5;
  
  // This doesn't work (better behavior):
  // console.log(y); // Error: Cannot access 'y' before initialization
  const y: number = 5;
  void y; // Use y to avoid unused variable warning
}

// Destructuring (similar to Python tuple unpacking)
const [first, second, third] = [1, 2, 3];
void [first, second, third]; // Use variables to avoid unused warnings
const { name, age } = { name: 'Alice', age: 30 };
void { name, age }; // Use variables to avoid unused warnings

export { demonstrateBlockScope, demonstrateHoisting };


