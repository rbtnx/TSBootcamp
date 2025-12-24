/**
 * Module 6: Design Patterns
 * Pattern: Observer
 * 
 * One-to-many dependency: when one object changes, all dependents are notified
 * Useful for: Event systems, model-view updates, reactive programming
 */

// Observer interface
interface Observer<T> {
  update(data: T): void;
}

// Subject (Observable) interface
interface Subject<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  notify(data: T): void;
}

// Concrete Subject
class NewsAgency implements Subject<string> {
  private observers: Observer<string>[] = [];
  private news: string = '';

  subscribe(observer: Observer<string>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer<string>): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(data: string): void {
    this.observers.forEach((observer) => observer.update(data));
  }

  setNews(news: string): void {
    this.news = news;
    this.notify(news);
  }

  getNews(): string {
    return this.news;
  }
}

// Concrete Observers
class NewsChannel implements Observer<string> {
  private name: string;
  private latestNews: string = '';

  constructor(name: string) {
    this.name = name;
  }

  update(data: string): void {
    this.latestNews = data;
    console.log(`${this.name} received: ${data}`);
  }

  getLatestNews(): string {
    return this.latestNews;
  }
}

// Usage
const agency = new NewsAgency();
const channel1 = new NewsChannel('CNN');
const channel2 = new NewsChannel('BBC');

agency.subscribe(channel1);
agency.subscribe(channel2);

agency.setNews('Breaking: TypeScript 5.0 released!');
// CNN received: Breaking: TypeScript 5.0 released!
// BBC received: Breaking: TypeScript 5.0 released!

agency.unsubscribe(channel1);
agency.setNews('Update: New features added');
// BBC received: Update: New features added

// Generic Event Emitter (more practical example)
type EventMap = {
  click: { x: number; y: number };
  keypress: { key: string };
  custom: { data: unknown };
};

class EventEmitter<T extends Record<string, unknown>> {
  private listeners: Map<keyof T, Array<(data: T[keyof T]) => void>> = new Map();

  on<K extends keyof T>(event: K, callback: (data: T[K]) => void): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(callback as (data: T[keyof T]) => void);
  }

  off<K extends keyof T>(event: K, callback: (data: T[K]) => void): void {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback as (data: T[keyof T]) => void);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  emit<K extends keyof T>(event: K, data: T[K]): void {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => callback(data));
    }
  }
}

// Usage
const emitter = new EventEmitter<EventMap>();

emitter.on('click', (data) => {
  console.log(`Clicked at (${data.x}, ${data.y})`);
});

emitter.on('keypress', (data) => {
  console.log(`Key pressed: ${data.key}`);
});

emitter.emit('click', { x: 100, y: 200 });
emitter.emit('keypress', { key: 'Enter' });

export { NewsAgency, NewsChannel, EventEmitter };


