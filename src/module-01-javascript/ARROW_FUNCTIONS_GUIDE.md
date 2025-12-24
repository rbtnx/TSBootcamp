# Arrow Functions (Fat Arrow) in TypeScript

## What Are Arrow Functions?

Arrow functions (`=>`) are a concise way to write functions in TypeScript/JavaScript. They're called "fat arrow" because `=>` looks like a fat arrow.

## Basic Syntax

### Simple Arrow Function (Single Expression)
```typescript
// Regular function
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function (equivalent)
const add = (a: number, b: number): number => a + b;
```

### Arrow Function with Body
```typescript
// When you need multiple statements
const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
};
```

## Key Differences from Regular Functions

### 1. **`this` Binding** (Most Important!)

Arrow functions **don't have their own `this`**. They inherit `this` from the surrounding scope (lexical binding).

```typescript
class Counter {
  count = 0;

  // Regular function - has its own 'this'
  incrementRegular() {
    setTimeout(function() {
      this.count++; // ERROR: 'this' is undefined or wrong context
    }, 1000);
  }

  // Arrow function - uses outer 'this'
  incrementArrow() {
    setTimeout(() => {
      this.count++; // WORKS: 'this' refers to Counter instance
    }, 1000);
  }
}
```

### 2. **No `arguments` Object**

Arrow functions don't have the `arguments` object. Use rest parameters instead:

```typescript
// Regular function
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// Arrow function (use rest parameters)
const sum = (...numbers: number[]): number => {
  return numbers.reduce((acc, n) => acc + n, 0);
};
```

### 3. **Cannot Be Used as Constructors**

Arrow functions cannot be called with `new`:

```typescript
// Regular function - can be constructor
function Person(name: string) {
  this.name = name;
}
const person = new Person('Alice'); // OK

// Arrow function - cannot be constructor
const Person = (name: string) => {
  this.name = name; // ERROR: 'this' is not available
};
const person = new Person('Alice'); // ERROR: Cannot use 'new' with arrow function
```

### 4. **No Hoisting**

Arrow functions are not hoisted (like function expressions):

```typescript
// Regular function - can be called before declaration
console.log(add(1, 2)); // Works
function add(a: number, b: number) {
  return a + b;
}

// Arrow function - must be declared first
console.log(add(1, 2)); // ERROR: Cannot access before initialization
const add = (a: number, b: number) => a + b;
```

## Common Use Cases

### 1. **Array Methods**

```typescript
const numbers = [1, 2, 3, 4, 5];

// Map
const doubled = numbers.map(n => n * 2);
// Same as: numbers.map((n) => { return n * 2; })

// Filter
const evens = numbers.filter(n => n % 2 === 0);

// Reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

### 2. **Callbacks**

```typescript
// Event handlers
button.addEventListener('click', (event) => {
  console.log('Clicked!', event);
});

// Promise chains
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### 3. **Type Annotations**

```typescript
// Arrow function type
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

// Function that takes arrow function
function calculate(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}
```

### 4. **Implicit Return**

When the body is a single expression, you can omit `return`:

```typescript
// These are equivalent:
const square = (x: number): number => x * x;
const square = (x: number): number => {
  return x * x;
};
```

## When to Use Arrow Functions

### ✅ Use Arrow Functions For:
- Callbacks and event handlers
- Array methods (map, filter, reduce, etc.)
- Short, simple functions
- When you need to preserve `this` context
- Functional programming style

### ❌ Don't Use Arrow Functions For:
- Object methods (usually - depends on `this` needs)
- Constructors
- When you need `arguments` object
- When you need function hoisting

## Examples from Your Codebase

### From `02-functions.ts`:

```typescript
// Simple arrow function
const multiply = (a: number, b: number): number => a * b;

// Arrow function with body
const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
};

// Arrow function as return type
function createCounter(): () => number {
  let count: number = 0;
  return () => {  // Arrow function returned
    count++;
    return count;
  };
}

// Arrow function as parameter type
function applyOperation(
  a: number,
  b: number,
  operation: (x: number, y: number) => number  // Type annotation
): number {
  return operation(a, b);
}
```

## Comparison with Python Lambda

If you know Python, arrow functions are similar to lambdas:

```python
# Python lambda
add = lambda a, b: a + b
numbers = [1, 2, 3]
doubled = list(map(lambda x: x * 2, numbers))
```

```typescript
// TypeScript arrow function
const add = (a: number, b: number): number => a + b;
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);
```

**Key difference**: TypeScript arrow functions are more powerful - they can have multiple statements, preserve `this`, and work in more contexts.

## Where to Learn More

### Official Documentation:
1. **TypeScript Handbook - Functions**
   - https://www.typescriptlang.org/docs/handbook/2/functions.html
   - Covers function types, arrow functions, and more

2. **MDN Web Docs - Arrow Functions**
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
   - Comprehensive JavaScript/TypeScript reference

3. **TypeScript Deep Dive**
   - https://basarat.gitbook.io/typescript/future-javascript/arrow-functions
   - Great explanations with examples

### Practice:
- Try modifying examples in `src/module-01-javascript/02-functions.ts`
- Experiment with `this` binding in classes
- Practice with array methods (map, filter, reduce)

## Quick Reference

```typescript
// Syntax variations:

// No parameters
const fn1 = () => console.log('Hello');

// Single parameter (parentheses optional)
const fn2 = x => x * 2;
const fn3 = (x) => x * 2;

// Multiple parameters
const fn4 = (a, b) => a + b;

// With types
const fn5 = (a: number, b: number): number => a + b;

// With body
const fn6 = (a: number, b: number): number => {
  const result = a + b;
  return result;
};

// Returning object (need parentheses)
const fn7 = () => ({ name: 'Alice', age: 30 });
// Without parentheses, {} is interpreted as function body
```

## Summary

- **Arrow functions** (`=>`) are concise function syntax
- **Lexical `this`**: They inherit `this` from outer scope
- **No `arguments`**: Use rest parameters instead
- **Great for**: Callbacks, array methods, short functions
- **Not for**: Constructors, methods needing their own `this`

Happy coding! 🚀

