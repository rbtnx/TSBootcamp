# The `reduce()` Function in TypeScript

## What is `reduce()`?

`reduce()` is a powerful array method that **reduces** an array to a single value by applying a function to each element. It's like a loop that accumulates a result.

Think of it like:
- **Python**: `functools.reduce()` or `sum()`, `max()`, etc.
- **C**: A loop that accumulates a value

## Basic Syntax

```typescript
array.reduce((accumulator, currentValue, index, array) => {
  // Return the new accumulator value
}, initialValue)
```

### Parameters:
1. **Accumulator**: The accumulated result (starts with `initialValue`)
2. **Current Value**: The current element being processed
3. **Index** (optional): The index of the current element
4. **Array** (optional): The original array
5. **Initial Value** (optional): Starting value for accumulator

## Simple Example: Sum of Numbers

```typescript
const numbers = [1, 2, 3, 4, 5];

// Without reduce (traditional loop)
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // 15

// With reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```

### Step-by-step breakdown:
```
Initial: acc = 0
Step 1: acc = 0 + 1 = 1
Step 2: acc = 1 + 2 = 3
Step 3: acc = 3 + 3 = 6
Step 4: acc = 6 + 4 = 10
Step 5: acc = 10 + 5 = 15
Result: 15
```

## Common Use Cases

### 1. Sum of Numbers

```typescript
const numbers = [10, 20, 30];
const sum = numbers.reduce((acc, num) => acc + num, 0);
// Result: 60
```

### 2. Product of Numbers

```typescript
const numbers = [2, 3, 4];
const product = numbers.reduce((acc, num) => acc * num, 1);
// Result: 24 (2 * 3 * 4)
```

### 3. Find Maximum Value

```typescript
const numbers = [5, 12, 8, 130, 44];
const max = numbers.reduce((acc, num) => Math.max(acc, num), -Infinity);
// Result: 130

// Or simpler (but less safe):
const max = numbers.reduce((acc, num) => acc > num ? acc : num);
// Note: Without initial value, first element is used as initial
```

### 4. Find Minimum Value

```typescript
const numbers = [5, 12, 8, 130, 44];
const min = numbers.reduce((acc, num) => Math.min(acc, num), Infinity);
// Result: 5
```

### 5. Count Occurrences

```typescript
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

// Result: { apple: 3, banana: 2, orange: 1 }
```

### 6. Group by Property

```typescript
interface Person {
  name: string;
  age: number;
  city: string;
}

const people: Person[] = [
  { name: 'Alice', age: 25, city: 'Berlin' },
  { name: 'Bob', age: 30, city: 'Munich' },
  { name: 'Charlie', age: 25, city: 'Berlin' },
];

const groupedByCity = people.reduce((acc, person) => {
  if (!acc[person.city]) {
    acc[person.city] = [];
  }
  acc[person.city].push(person);
  return acc;
}, {} as Record<string, Person[]>);

// Result: {
//   Berlin: [{ name: 'Alice', ... }, { name: 'Charlie', ... }],
//   Munich: [{ name: 'Bob', ... }]
// }
```

### 7. Flatten an Array

```typescript
const nested = [[1, 2], [3, 4], [5, 6]];

const flattened = nested.reduce((acc, arr) => {
  return acc.concat(arr);
}, [] as number[]);

// Result: [1, 2, 3, 4, 5, 6]

// Or with spread operator:
const flattened = nested.reduce((acc, arr) => [...acc, ...arr], [] as number[]);
```

### 8. Transform Array to Object

```typescript
const keyValuePairs = [
  ['name', 'Alice'],
  ['age', 30],
  ['city', 'Berlin']
];

const obj = keyValuePairs.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {} as Record<string, string | number>);

// Result: { name: 'Alice', age: 30, city: 'Berlin' }
```

### 9. Remove Duplicates

```typescript
const numbers = [1, 2, 2, 3, 4, 4, 5];

const unique = numbers.reduce((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, [] as number[]);

// Result: [1, 2, 3, 4, 5]

// Or using Set (more efficient):
const unique = Array.from(new Set(numbers));
```

### 10. Calculate Average

```typescript
const numbers = [10, 20, 30, 40];

const average = numbers.reduce((acc, num, index, array) => {
  acc += num;
  if (index === array.length - 1) {
    return acc / array.length;
  }
  return acc;
}, 0);

// Result: 25

// Or simpler:
const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
```

## With TypeScript Types

### Typed Reduce Function

```typescript
// Explicit types
const numbers: number[] = [1, 2, 3, 4, 5];

const sum: number = numbers.reduce((acc: number, num: number): number => {
  return acc + num;
}, 0);

// TypeScript infers types automatically
const sum = numbers.reduce((acc, num) => acc + num, 0);
// TypeScript knows: acc is number, num is number, return is number
```

### Complex Type Example

```typescript
interface Item {
  name: string;
  price: number;
}

const items: Item[] = [
  { name: 'Apple', price: 1.5 },
  { name: 'Banana', price: 2.0 },
  { name: 'Orange', price: 1.8 }
];

// Calculate total price
const total = items.reduce((acc: number, item: Item): number => {
  return acc + item.price;
}, 0);

// Group by price range
type PriceRange = 'cheap' | 'medium' | 'expensive';

const grouped = items.reduce((acc, item) => {
  let range: PriceRange;
  if (item.price < 1.5) range = 'cheap';
  else if (item.price < 2.0) range = 'medium';
  else range = 'expensive';
  
  if (!acc[range]) acc[range] = [];
  acc[range].push(item);
  return acc;
}, {} as Record<PriceRange, Item[]>);
```

## Initial Value: When to Use It

### With Initial Value (Recommended)

```typescript
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, num) => acc + num, 0);
// Always starts with 0, safe for empty arrays
```

### Without Initial Value

```typescript
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, num) => acc + num);
// Uses first element (1) as initial value
// WARNING: Fails on empty arrays!
```

**Best Practice**: Always provide an initial value for safety.

## Comparison with Other Array Methods

### `reduce()` vs `map()`

```typescript
// map(): Transform each element → returns array
const doubled = [1, 2, 3].map(n => n * 2);
// Result: [2, 4, 6]

// reduce(): Accumulate to single value
const sum = [1, 2, 3].reduce((acc, n) => acc + n, 0);
// Result: 6
```

### `reduce()` vs `filter()`

```typescript
// filter(): Select elements → returns array
const evens = [1, 2, 3, 4].filter(n => n % 2 === 0);
// Result: [2, 4]

// reduce(): Can do same thing (but more verbose)
const evens = [1, 2, 3, 4].reduce((acc, n) => {
  if (n % 2 === 0) acc.push(n);
  return acc;
}, [] as number[]);
// Result: [2, 4]
```

### `reduce()` vs `forEach()`

```typescript
// forEach(): Side effects only
let sum = 0;
[1, 2, 3].forEach(n => { sum += n; });
// sum = 6

// reduce(): Returns value directly
const sum = [1, 2, 3].reduce((acc, n) => acc + n, 0);
// sum = 6
```

## Advanced Examples

### 1. Compose Functions

```typescript
const add = (x: number) => x + 1;
const multiply = (x: number) => x * 2;
const subtract = (x: number) => x - 3;

const functions = [add, multiply, subtract];

// Compose: apply functions in sequence
const result = functions.reduce((value, fn) => fn(value), 5);
// Step 1: add(5) = 6
// Step 2: multiply(6) = 12
// Step 3: subtract(12) = 9
// Result: 9
```

### 2. Pipeline Operations

```typescript
interface Data {
  value: number;
  processed: boolean;
}

const data: Data[] = [
  { value: 1, processed: false },
  { value: 2, processed: false },
  { value: 3, processed: false }
];

// Process all and mark as processed
const processed = data.reduce((acc, item) => {
  acc.push({
    value: item.value * 2, // Transform
    processed: true
  });
  return acc;
}, [] as Data[]);
```

### 3. Chaining with Other Methods

```typescript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers, double them, then sum
const result = numbers
  .filter(n => n % 2 === 0)  // [2, 4, 6, 8, 10]
  .map(n => n * 2)            // [4, 8, 12, 16, 20]
  .reduce((acc, n) => acc + n, 0); // 60
```

## Common Mistakes

### 1. Forgetting to Return

```typescript
// ❌ Wrong - doesn't return accumulator
const sum = numbers.reduce((acc, num) => {
  acc + num; // Missing return!
}, 0);

// ✅ Correct
const sum = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);
```

### 2. Mutating Accumulator Instead of Returning

```typescript
// ⚠️ Works but not recommended
const sum = numbers.reduce((acc, num) => {
  acc += num; // Mutates acc
  return acc; // Still need to return
}, 0);

// ✅ Better - more functional
const sum = numbers.reduce((acc, num) => acc + num, 0);
```

### 3. Not Providing Initial Value for Empty Arrays

```typescript
// ❌ Crashes on empty array
const sum = [].reduce((acc, num) => acc + num);

// ✅ Safe with initial value
const sum = [].reduce((acc, num) => acc + num, 0); // Returns 0
```

## Performance Considerations

- `reduce()` is generally efficient
- For simple operations (sum, max), a `for` loop might be slightly faster
- `reduce()` is more readable and functional
- Use `reduce()` when you need to accumulate a value
- Consider `map()` + `filter()` for transformations and filtering

## Summary

- **Purpose**: Reduce array to single value
- **Returns**: Single value (any type)
- **Always provide initial value** for safety
- **Remember to return** the accumulator
- **Great for**: Sums, counts, grouping, transformations
- **TypeScript**: Types are inferred automatically

## Practice Exercise

Try implementing these with `reduce()`:

1. Count words in a string array
2. Find the longest string in an array
3. Calculate the product of all numbers
4. Create a frequency map of characters in a string
5. Reverse an array (using reduce)

Happy coding! 🚀

