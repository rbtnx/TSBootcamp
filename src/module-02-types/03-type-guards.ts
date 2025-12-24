/**
 * Module 2: TypeScript Type System
 * Topic: Type Guards
 * 
 * Type guards narrow types within conditional blocks
 * Similar to runtime type checking, but with compile-time safety
 */

// typeof type guard
function processValue(value: string | number): string {
  if (typeof value === 'string') {
    // TypeScript knows value is string here
    return value.toUpperCase();
  } else {
    // TypeScript knows value is number here
    return value.toString();
  }
}

// instanceof type guard (for classes)
class Dog {
  bark(): void {
    console.log('Woof!');
  }
}

class Cat {
  meow(): void {
    console.log('Meow!');
  }
}

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// Custom type guard (type predicate)
interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird): void {
  if (isFish(animal)) {
    animal.swim(); // TypeScript knows it's a Fish
  } else {
    animal.fly(); // TypeScript knows it's a Bird
  }
}

// in operator type guard
interface Car {
  drive(): void;
}

interface Boat {
  sail(): void;
}

function operate(vehicle: Car | Boat): void {
  if ('drive' in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}

// Equality narrowing
function example(x: string | number, y: string | boolean): void {
  if (x === y) {
    // x and y must both be string here
    console.log(x.toUpperCase());
    console.log(y.toUpperCase());
  }
}

// Truthiness narrowing
function printAll(strs: string | string[] | null): void {
  if (strs && typeof strs === 'object') {
    // strs is string[] here
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    // strs is string here
    console.log(strs);
  }
}

export { processValue, makeSound, move, operate, example, printAll };


