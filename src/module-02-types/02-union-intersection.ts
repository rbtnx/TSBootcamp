/**
 * Module 2: TypeScript Type System
 * Topic: Union & Intersection Types
 * 
 * Union: A | B (either A or B) - like C unions, but type-safe
 * Intersection: A & B (both A and B) - combining types
 */

// Union types (one of several types)
type StringOrNumber = string | number;

function processValue(value: StringOrNumber): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else {
    return value.toString();
  }
}

// Union with null/undefined (common pattern)
type MaybeString = string | null | undefined;

function getLength(str: MaybeString): number {
  if (str === null || str === undefined) {
    return 0;
  }
  return str.length;
}

// Literal types (specific values)
type Status = 'pending' | 'approved' | 'rejected';
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function handleStatus(status: Status): void {
  switch (status) {
    case 'pending':
      console.log('Waiting...');
      break;
    case 'approved':
      console.log('Accepted!');
      break;
    case 'rejected':
      console.log('Denied');
      break;
  }
}

// Intersection types (combining multiple types)
interface HasName {
  name: string;
}

interface HasAge {
  age: number;
}

type Person = HasName & HasAge;

const person: Person = {
  name: 'Alice',
  age: 30,
};

// Complex intersection
interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

type Duck = HasName & Flyable & Swimmable;

const duck: Duck = {
  name: 'Donald',
  fly: () => console.log('Flying'),
  swim: () => console.log('Swimming'),
};

// Discriminated unions (pattern for type-safe state machines)
type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };

function handleResult<T>(result: Result<T>): void {
  if (result.success) {
    console.log('Data:', result.data);
  } else {
    console.error('Error:', result.error);
  }
}

export {
  processValue,
  getLength,
  handleStatus,
  person,
  duck,
  handleResult,
  type Result,
  type Status,
  type Person,
};


