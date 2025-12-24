/**
 * Module 7: TypeScript in Web Development
 * Topic: API Integration
 * 
 * Type-safe API calls and responses
 */

// Define API response types
interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

// API response wrapper
interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Error response
interface ApiError {
  message: string;
  code: string;
  status: number;
}

// Generic API client
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      
      if (!response.ok) {
        const error: ApiError = {
          message: `HTTP error! status: ${response.status}`,
          code: 'HTTP_ERROR',
          status: response.status,
        };
        throw error;
      }

      const data = await response.json();
      return {
        data: data as T,
        status: response.status,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw {
          message: error.message,
          code: 'NETWORK_ERROR',
          status: 0,
        } as ApiError;
      }
      throw error;
    }
  }

  async post<T>(endpoint: string, body: unknown): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const error: ApiError = {
          message: `HTTP error! status: ${response.status}`,
          code: 'HTTP_ERROR',
          status: response.status,
        };
        throw error;
      }

      const data = await response.json();
      return {
        data: data as T,
        status: response.status,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw {
          message: error.message,
          code: 'NETWORK_ERROR',
          status: 0,
        } as ApiError;
      }
      throw error;
    }
  }
}

// User API service
class UserService {
  constructor(private api: ApiClient) {}

  async getUser(id: number): Promise<User> {
    const response = await this.api.get<User>(`/users/${id}`);
    return response.data;
  }

  async getAllUsers(): Promise<User[]> {
    const response = await this.api.get<User[]>(`/users`);
    return response.data;
  }

  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const response = await this.api.post<User>('/users', user);
    return response.data;
  }
}

// Usage example
async function demonstrateApiClient(): Promise<void> {
  const api = new ApiClient('https://jsonplaceholder.typicode.com');
  const userService = new UserService(api);

  try {
    const users = await userService.getAllUsers();
    console.log('Users:', users);

    const user = await userService.getUser(1);
    console.log('User:', user);
  } catch (error) {
    const apiError = error as ApiError;
    console.error('API Error:', apiError.message, apiError.code);
  }
}

// Type-safe fetch wrapper
async function typedFetch<T>(
  url: string,
  options?: RequestInit
): Promise<{ data: T; status: number }> {
  const response = await fetch(url, options);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return {
    data: data as T,
    status: response.status,
  };
}

// Usage
async function fetchUsers(): Promise<User[]> {
  const result = await typedFetch<User[]>('https://jsonplaceholder.typicode.com/users');
  return result.data;
}

export {
  ApiClient,
  UserService,
  demonstrateApiClient,
  typedFetch,
  fetchUsers,
  type User,
  type Post,
  type ApiResponse,
  type ApiError,
};


