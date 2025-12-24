/**
 * Module 6: Design Patterns
 * Pattern: Singleton
 * 
 * Ensures a class has only one instance
 * Useful for: Database connections, configuration, logging
 */

class DatabaseConnection {
  private static instance: DatabaseConnection | null = null;
  private connectionString: string;

  // Private constructor prevents direct instantiation
  private constructor(connectionString: string) {
    this.connectionString = connectionString;
    console.log('Database connection established');
  }

  // Static method to get the single instance
  static getInstance(connectionString?: string): DatabaseConnection {
    if (DatabaseConnection.instance === null) {
      if (!connectionString) {
        throw new Error('Connection string required for first initialization');
      }
      DatabaseConnection.instance = new DatabaseConnection(connectionString);
    }
    return DatabaseConnection.instance;
  }

  query(sql: string): void {
    console.log(`Executing: ${sql}`);
  }

  close(): void {
    console.log('Closing database connection');
    DatabaseConnection.instance = null;
  }
}

// Usage
const db1 = DatabaseConnection.getInstance('postgresql://localhost:5432/mydb');
const db2 = DatabaseConnection.getInstance(); // Returns same instance
console.log(db1 === db2); // true

// Alternative: Eager initialization
class Logger {
  private static instance: Logger = new Logger();

  private constructor() {
    console.log('Logger initialized');
  }

  static getInstance(): Logger {
    return Logger.instance;
  }

  log(message: string): void {
    console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log('Test message');
console.log(logger1 === logger2); // true

export { DatabaseConnection, Logger };


