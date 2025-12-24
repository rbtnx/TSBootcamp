/**
 * Module 4: TypeScript Classes & OOP
 * Topic: Inheritance
 * 
 * Similar to C++ inheritance, but with TypeScript's type system
 */

// Base class
class Animal {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound(): void {
    console.log('Some generic animal sound');
  }

  getInfo(): string {
    return `${this.name} is ${this.age} years old`;
  }
}

// Inheritance with extends
class Dog extends Animal {
  private breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age); // Call parent constructor
    this.breed = breed;
  }

  // Override method
  makeSound(): void {
    console.log('Woof! Woof!');
  }

  // New method
  fetch(): void {
    console.log(`${this.name} is fetching!`);
  }

  // Override with super call
  getInfo(): string {
    return `${super.getInfo()} and is a ${this.breed}`;
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow!');
  }

  scratch(): void {
    console.log(`${this.name} is scratching!`);
  }
}

// Abstract classes (like C++ abstract classes)
abstract class Shape {
  protected color: string;

  constructor(color: string) {
    this.color = color;
  }

  abstract getArea(): number; // Must be implemented by subclasses
  abstract getPerimeter(): number;

  getColor(): string {
    return this.color;
  }
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Implementing interfaces (like implementing interfaces in C#/Java)
interface Flyable {
  fly(): void;
  maxAltitude: number;
}

interface Swimmable {
  swim(): void;
  maxDepth: number;
}

class Duck extends Animal implements Flyable, Swimmable {
  maxAltitude = 1000;
  maxDepth = 5;

  makeSound(): void {
    console.log('Quack!');
  }

  fly(): void {
    console.log(`${this.name} is flying up to ${this.maxAltitude}m`);
  }

  swim(): void {
    console.log(`${this.name} is swimming down to ${this.maxDepth}m`);
  }
}

// Polymorphism
function makeAnimalSound(animal: Animal): void {
  animal.makeSound(); // Calls the appropriate override
}

const dog = new Dog('Buddy', 5, 'Golden Retriever');
const cat = new Cat('Whiskers', 3);
const duck = new Duck('Donald', 2);

makeAnimalSound(dog); // Woof! Woof!
makeAnimalSound(cat); // Meow!
makeAnimalSound(duck); // Quack!

export { Animal, Dog, Cat, Shape, Rectangle, Circle, Duck, makeAnimalSound };


