/**
 * Module 6: Design Patterns
 * Pattern: Repository
 * 
 * Abstracts data access logic, provides a collection-like interface
 * Useful for: Decoupling business logic from data access, testing, switching data sources
 */

// Entity
interface User {
  id: number;
  name: string;
  email: string;
}

// Repository interface (abstraction)
interface UserRepository {
  findById(id: number): Promise<User | null>;
  findAll(): Promise<User[]>;
  create(user: Omit<User, 'id'>): Promise<User>;
  update(id: number, user: Partial<User>): Promise<User>;
  delete(id: number): Promise<boolean>;
}

// In-memory implementation (for testing/development)
class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];
  private nextId = 1;

  async findById(id: number): Promise<User | null> {
    return this.users.find((u) => u.id === id) || null;
  }

  async findAll(): Promise<User[]> {
    return [...this.users];
  }

  async create(user: Omit<User, 'id'>): Promise<User> {
    const newUser: User = {
      id: this.nextId++,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  async update(id: number, updates: Partial<User>): Promise<User> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new Error(`User with id ${id} not found`);
    }
    this.users[index] = { ...this.users[index], ...updates };
    return this.users[index];
  }

  async delete(id: number): Promise<boolean> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      return false;
    }
    this.users.splice(index, 1);
    return true;
  }
}

// Database implementation (would use actual DB in real app)
class DatabaseUserRepository implements UserRepository {
  // In real app, this would use a database connection
  private users: Map<number, User> = new Map();
  private nextId = 1;

  async findById(id: number): Promise<User | null> {
    // Simulate database query
    await this.simulateDelay();
    return this.users.get(id) || null;
  }

  async findAll(): Promise<User[]> {
    await this.simulateDelay();
    return Array.from(this.users.values());
  }

  async create(user: Omit<User, 'id'>): Promise<User> {
    await this.simulateDelay();
    const newUser: User = {
      id: this.nextId++,
      ...user,
    };
    this.users.set(newUser.id, newUser);
    return newUser;
  }

  async update(id: number, updates: Partial<User>): Promise<User> {
    await this.simulateDelay();
    const user = this.users.get(id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    const updated = { ...user, ...updates };
    this.users.set(id, updated);
    return updated;
  }

  async delete(id: number): Promise<boolean> {
    await this.simulateDelay();
    return this.users.delete(id);
  }

  private async simulateDelay(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 10));
  }
}

// Service layer (business logic, independent of data source)
class UserService {
  constructor(private repository: UserRepository) {}

  async getUser(id: number): Promise<User | null> {
    return this.repository.findById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.repository.findAll();
  }

  async createUser(name: string, email: string): Promise<User> {
    // Business logic validation
    if (!email.includes('@')) {
      throw new Error('Invalid email address');
    }
    return this.repository.create({ name, email });
  }

  async updateUserEmail(id: number, email: string): Promise<User> {
    if (!email.includes('@')) {
      throw new Error('Invalid email address');
    }
    return this.repository.update(id, { email });
  }

  async deleteUser(id: number): Promise<boolean> {
    return this.repository.delete(id);
  }
}

// Usage - can switch implementations easily
async function demonstrateRepository(): Promise<void> {
  // Use in-memory for testing
  const testRepo = new InMemoryUserRepository();
  const testService = new UserService(testRepo);

  const user1 = await testService.createUser('Alice', 'alice@example.com');
  console.log('Created user:', user1);

  // Use database for production
  const dbRepo = new DatabaseUserRepository();
  const prodService = new UserService(dbRepo);

  const user2 = await prodService.createUser('Bob', 'bob@example.com');
  console.log('Created user:', user2);
}

export {
  UserRepository,
  InMemoryUserRepository,
  DatabaseUserRepository,
  UserService,
  demonstrateRepository,
  type User,
};


