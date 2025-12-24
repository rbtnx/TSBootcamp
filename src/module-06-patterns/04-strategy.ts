/**
 * Module 6: Design Patterns
 * Pattern: Strategy
 * 
 * Defines a family of algorithms, encapsulates each, and makes them interchangeable
 * Useful for: Different ways to perform the same task, configuration-based behavior
 */

// Strategy interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete strategies
class CreditCardPayment implements PaymentStrategy {
  private cardNumber: string;
  private name: string;

  constructor(cardNumber: string, name: string) {
    this.cardNumber = cardNumber;
    this.name = name;
  }

  pay(amount: number): void {
    console.log(`Paid $${amount} using Credit Card ending in ${this.cardNumber.slice(-4)}`);
  }
}

class PayPalPayment implements PaymentStrategy {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  pay(amount: number): void {
    console.log(`Paid $${amount} using PayPal account ${this.email}`);
  }
}

class BitcoinPayment implements PaymentStrategy {
  private walletAddress: string;

  constructor(walletAddress: string) {
    this.walletAddress = walletAddress;
  }

  pay(amount: number): void {
    console.log(`Paid $${amount} using Bitcoin wallet ${this.walletAddress.slice(0, 8)}...`);
  }
}

// Context that uses the strategy
class ShoppingCart {
  private items: Array<{ name: string; price: number }> = [];
  private paymentStrategy: PaymentStrategy | null = null;

  addItem(name: string, price: number): void {
    this.items.push({ name, price });
  }

  setPaymentStrategy(strategy: PaymentStrategy): void {
    this.paymentStrategy = strategy;
  }

  checkout(): void {
    if (this.paymentStrategy === null) {
      throw new Error('Payment strategy not set');
    }

    const total = this.items.reduce((sum, item) => sum + item.price, 0);
    this.paymentStrategy.pay(total);
    this.items = [];
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem('Laptop', 999);
cart.addItem('Mouse', 29);

cart.setPaymentStrategy(new CreditCardPayment('1234567890123456', 'John Doe'));
cart.checkout(); // Paid $1028 using Credit Card ending in 3456

cart.addItem('Keyboard', 79);
cart.setPaymentStrategy(new PayPalPayment('user@example.com'));
cart.checkout(); // Paid $79 using PayPal account user@example.com

// Another example: Sorting strategies
interface SortStrategy<T> {
  sort(items: T[]): T[];
}

class QuickSort<T> implements SortStrategy<T> {
  sort(items: T[]): T[] {
    console.log('Using QuickSort');
    return [...items].sort();
  }
}

class MergeSort<T> implements SortStrategy<T> {
  sort(items: T[]): T[] {
    console.log('Using MergeSort');
    return [...items].sort();
  }
}

class Sorter<T> {
  private strategy: SortStrategy<T>;

  constructor(strategy: SortStrategy<T>) {
    this.strategy = strategy;
  }

  setStrategy(strategy: SortStrategy<T>): void {
    this.strategy = strategy;
  }

  sort(items: T[]): T[] {
    return this.strategy.sort(items);
  }
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
const sorter = new Sorter(new QuickSort());
console.log(sorter.sort(numbers));

sorter.setStrategy(new MergeSort());
console.log(sorter.sort(numbers));

export {
  PaymentStrategy,
  CreditCardPayment,
  PayPalPayment,
  BitcoinPayment,
  ShoppingCart,
  SortStrategy,
  QuickSort,
  MergeSort,
  Sorter,
};


