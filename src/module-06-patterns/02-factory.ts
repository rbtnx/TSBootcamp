/**
 * Module 6: Design Patterns
 * Pattern: Factory
 * 
 * Creates objects without specifying exact class
 * Useful for: Creating objects based on configuration, decoupling creation logic
 */

// Simple Factory
interface Animal {
  makeSound(): void;
}

class Dog implements Animal {
  makeSound(): void {
    console.log('Woof!');
  }
}

class Cat implements Animal {
  makeSound(): void {
    console.log('Meow!');
  }
}

class Bird implements Animal {
  makeSound(): void {
    console.log('Tweet!');
  }
}

type AnimalType = 'dog' | 'cat' | 'bird';

class AnimalFactory {
  static createAnimal(type: AnimalType): Animal {
    switch (type) {
      case 'dog':
        return new Dog();
      case 'cat':
        return new Cat();
      case 'bird':
        return new Bird();
      default:
        throw new Error(`Unknown animal type: ${type}`);
    }
  }
}

// Usage
const dog = AnimalFactory.createAnimal('dog');
dog.makeSound(); // Woof!

// Factory Method Pattern
abstract class Vehicle {
  abstract drive(): void;
}

class Car extends Vehicle {
  drive(): void {
    console.log('Driving a car');
  }
}

class Motorcycle extends Vehicle {
  drive(): void {
    console.log('Riding a motorcycle');
  }
}

abstract class VehicleFactory {
  abstract createVehicle(): Vehicle;

  deliver(): void {
    const vehicle = this.createVehicle();
    vehicle.drive();
    console.log('Vehicle delivered');
  }
}

class CarFactory extends VehicleFactory {
  createVehicle(): Vehicle {
    return new Car();
  }
}

class MotorcycleFactory extends VehicleFactory {
  createVehicle(): Vehicle {
    return new Motorcycle();
  }
}

// Usage
const carFactory = new CarFactory();
carFactory.deliver(); // Driving a car, Vehicle delivered

// Abstract Factory Pattern (creates families of related objects)
interface Button {
  render(): void;
}

interface Checkbox {
  render(): void;
}

class WindowsButton implements Button {
  render(): void {
    console.log('Rendering Windows button');
  }
}

class MacButton implements Button {
  render(): void {
    console.log('Rendering Mac button');
  }
}

class WindowsCheckbox implements Checkbox {
  render(): void {
    console.log('Rendering Windows checkbox');
  }
}

class MacCheckbox implements Checkbox {
  render(): void {
    console.log('Rendering Mac checkbox');
  }
}

interface UIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WindowsUIFactory implements UIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

class MacUIFactory implements UIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

function createUI(factory: UIFactory): void {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  button.render();
  checkbox.render();
}

// Usage
const windowsUI = new WindowsUIFactory();
createUI(windowsUI);

export {
  AnimalFactory,
  VehicleFactory,
  CarFactory,
  MotorcycleFactory,
  UIFactory,
  WindowsUIFactory,
  MacUIFactory,
  createUI,
};


