/**
 * Module 4: TypeScript Classes & OOP
 * Topic: Classes Basics
 * 
 * Similar to C++/Python classes, but with TypeScript's type system
 */

// Basic class
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distance(other: Point): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Point(0, 0);
const p2 = new Point(3, 4);
console.log(p1.distance(p2)); // 5

// Access modifiers
class BankAccount {
  private balance: number; // Only accessible within class
  protected accountNumber: string; // Accessible in class and subclasses
  public owner: string; // Accessible everywhere (default)

  constructor(owner: string, accountNumber: string, initialBalance: number = 0) {
    this.owner = owner;
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  getBalance(): number {
    return this.balance;
  }
}

// Readonly properties
class Circle {
  readonly radius: number;
  readonly area: number;

  constructor(radius: number) {
    this.radius = radius;
    this.area = Math.PI * radius * radius;
  }
}

const circle = new Circle(5);
// circle.radius = 10; // Error: Cannot assign to 'radius' because it is read-only

// Static members (like C++ static members)
class MathUtils {
  static PI = 3.14159;

  static add(a: number, b: number): number {
    return a + b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }
}

console.log(MathUtils.PI);
console.log(MathUtils.add(2, 3));

// Getters and setters
class Temperature {
  private _celsius: number = 0;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error('Temperature below absolute zero');
    }
    this._celsius = value;
  }

  get fahrenheit(): number {
    return this._celsius * (9 / 5) + 32;
  }

  set fahrenheit(value: number) {
    this._celsius = (value - 32) * (5 / 9);
  }
}

const temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit); // 77

export { Point, BankAccount, Circle, MathUtils, Temperature };


