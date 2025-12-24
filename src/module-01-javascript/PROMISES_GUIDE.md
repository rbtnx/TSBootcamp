# Promises in JavaScript and TypeScript

## What is a Promise?

A **Promise** represents a value that may not be available yet. It's like a placeholder for a future result. Think of it as a "contract" that something will happen (or fail) eventually.

### Real-World Analogy

- **Ordering food**: You place an order (create a Promise), wait (async), then either get your food (resolve) or find out it's unavailable (reject)

## Basic Concept

A Promise has **three states**:
1. **Pending**: Initial state, not fulfilled or rejected
2. **Fulfilled**: Operation completed successfully
3. **Rejected**: Operation failed

```
Promise
  ├─ Pending (waiting...)
  ├─ Fulfilled (success) → .then()
  └─ Rejected (error) → .catch()
```

## Creating a Promise

### Basic Syntax

```typescript
const promise = new Promise((resolve, reject) => {
  // Do something async
  if (success) {
    resolve(value);  // Success
  } else {
    reject(error);   // Failure
  }
});
```

### Simple Example

```typescript
const fetchData = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve('Data fetched successfully');
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
};
```

## Using Promises

### Method 1: `.then()` and `.catch()`

```typescript
fetchData()
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

### Method 2: `async/await` (Recommended)

```typescript
async function handleData() {
  try {
    const data = await fetchData();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## Promise States and Flow

```typescript
const promise = new Promise<string>((resolve, reject) => {
  // State: PENDING
  
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('Success!');  // State: FULFILLED
    } else {
      reject(new Error('Failed'));  // State: REJECTED
    }
  }, 1000);
});

promise
  .then((value) => {
    // Called when FULFILLED
    console.log(value);  // "Success!"
  })
  .catch((error) => {
    // Called when REJECTED
    console.error(error);  // Error: Failed
  });
```

## Common Promise Patterns

### 1. Chaining Promises

```typescript
fetchUser(1)
  .then((user) => {
    console.log('User:', user);
    return fetchPosts(user.id);  // Return another Promise
  })
  .then((posts) => {
    console.log('Posts:', posts);
    return fetchComments(posts[0].id);
  })
  .then((comments) => {
    console.log('Comments:', comments);
  })
  .catch((error) => {
    console.error('Error in chain:', error);
  });
```

### 2. Promise.all() - Wait for All

```typescript
// Run multiple promises in parallel, wait for all
const promises = [
  fetchUser(1),
  fetchUser(2),
  fetchUser(3)
];

Promise.all(promises)
  .then((users) => {
    console.log('All users:', users);  // Array of all results
  })
  .catch((error) => {
    // If ANY promise fails, this is called
    console.error('One failed:', error);
  });
```

**Important**: If one promise fails, the entire `Promise.all()` fails.

### 3. Promise.allSettled() - Wait for All (Never Fails)

```typescript
// Wait for all promises, regardless of success/failure
Promise.allSettled(promises)
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Promise ${index} succeeded:`, result.value);
      } else {
        console.log(`Promise ${index} failed:`, result.reason);
      }
    });
  });
```

### 4. Promise.race() - First to Complete

```typescript
// Returns the first promise that resolves or rejects
const timeout = new Promise((_, reject) => 
  setTimeout(() => reject(new Error('Timeout')), 5000)
);

const fetch = fetchData();

Promise.race([fetch, timeout])
  .then((data) => {
    console.log('Got data before timeout:', data);
  })
  .catch((error) => {
    console.error('Timeout or error:', error);
  });
```

### 5. Promise.any() - First to Succeed

```typescript
// Returns the first promise that fulfills (ignores rejections)
const promises = [
  fetchFromServer1(),
  fetchFromServer2(),
  fetchFromServer3()
];

Promise.any(promises)
  .then((data) => {
    console.log('Got data from first successful server:', data);
  })
  .catch((error) => {
    // Only called if ALL promises fail
    console.error('All servers failed:', error);
  });
```

## Real-World Examples

### Example 1: Fetching Data from API

```typescript
function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve, reject) => {
    // Simulate API call
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: `User ${id}` });
      } else {
        reject(new Error('Invalid user ID'));
      }
    }, 1000);
  });
}

// Using it
fetchUser(1)
  .then((user) => console.log('User:', user))
  .catch((error) => console.error('Error:', error));
```

### Example 2: File Reading (Node.js)

```typescript
import { readFile } from 'fs/promises';

// readFile returns a Promise
readFile('data.txt', 'utf-8')
  .then((content) => {
    console.log('File content:', content);
  })
  .catch((error) => {
    console.error('Error reading file:', error);
  });
```

### Example 3: Multiple API Calls

```typescript
async function loadUserDashboard(userId: number) {
  try {
    // Run in parallel
    const [user, posts, notifications] = await Promise.all([
      fetchUser(userId),
      fetchPosts(userId),
      fetchNotifications(userId)
    ]);
    
    return {
      user,
      posts,
      notifications
    };
  } catch (error) {
    console.error('Failed to load dashboard:', error);
    throw error;
  }
}
```

## Error Handling

### Method 1: `.catch()`

```typescript
fetchData()
  .then((data) => {
    // Handle success
    return processData(data);
  })
  .catch((error) => {
    // Handle ANY error in the chain
    console.error('Error:', error);
    return defaultValue;  // Return fallback value
  });
```

### Method 2: `try/catch` with `async/await`

```typescript
async function handleData() {
  try {
    const data = await fetchData();
    const processed = await processData(data);
    return processed;
  } catch (error) {
    console.error('Error:', error);
    return defaultValue;
  }
}
```

### Method 3: Error in Chain

```typescript
fetchData()
  .then((data) => {
    if (!data) {
      throw new Error('No data received');  // Rejects the promise
    }
    return processData(data);
  })
  .catch((error) => {
    // Catches the thrown error
    console.error('Error:', error);
  });
```

## Promise Utilities

### Creating Resolved Promise

```typescript
// Immediately resolved
const resolved = Promise.resolve('Success');
resolved.then(value => console.log(value));  // "Success"
```

### Creating Rejected Promise

```typescript
// Immediately rejected
const rejected = Promise.reject(new Error('Failed'));
rejected.catch(error => console.error(error));  // Error: Failed
```

### Converting Callback to Promise

```typescript
// Old callback style
function oldStyle(callback: (error: Error | null, data: string) => void) {
  setTimeout(() => {
    callback(null, 'Data');
  }, 1000);
}

// Convert to Promise
function newStyle(): Promise<string> {
  return new Promise((resolve, reject) => {
    oldStyle((error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}
```

## TypeScript and Promises

### Typing Promises

```typescript
// Promise that resolves to string
const promise: Promise<string> = fetchData();

// Promise that resolves to number
function getCount(): Promise<number> {
  return new Promise((resolve) => {
    resolve(42);
  });
}

// Promise that resolves to object
interface User {
  id: number;
  name: string;
}

function getUser(id: number): Promise<User> {
  return new Promise((resolve) => {
    resolve({ id, name: 'Alice' });
  });
}
```

### Generic Promise Type

```typescript
// Generic function returning Promise
function fetch<T>(url: string): Promise<T> {
  return new Promise((resolve, reject) => {
    // Fetch and parse as T
  });
}

// Usage
const user = await fetch<User>('/api/user');
const posts = await fetch<Post[]>('/api/posts');
```

## Common Patterns

### Pattern 1: Retry Logic

```typescript
async function fetchWithRetry(
  url: string,
  maxRetries: number = 3
): Promise<Response> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fetch(url);
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
  throw new Error('Max retries exceeded');
}
```

### Pattern 2: Timeout

```typescript
function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number
): Promise<T> {
  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error('Timeout')), timeoutMs);
  });
  
  return Promise.race([promise, timeout]);
}

// Usage
const data = await withTimeout(fetchData(), 5000);
```

### Pattern 3: Sequential Processing

```typescript
// Process items one by one (not parallel)
async function processSequentially<T>(
  items: T[],
  processor: (item: T) => Promise<void>
): Promise<void> {
  for (const item of items) {
    await processor(item);  // Wait for each
  }
}
```

### Pattern 4: Parallel with Limit

```typescript
// Process items in parallel, but limit concurrency
async function processWithLimit<T, R>(
  items: T[],
  processor: (item: T) => Promise<R>,
  limit: number
): Promise<R[]> {
  const results: R[] = [];
  
  for (let i = 0; i < items.length; i += limit) {
    const batch = items.slice(i, i + limit);
    const batchResults = await Promise.all(
      batch.map(item => processor(item))
    );
    results.push(...batchResults);
  }
  
  return results;
}
```

## Comparison with Python

### Python `asyncio`

```python
import asyncio

async def fetch_data():
    await asyncio.sleep(1)
    return "Data"

# Run
data = await fetch_data()
```

### TypeScript Promise

```typescript
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data'), 1000);
  });
}

// Run
const data = await fetchData();
```

**Similarities**:
- Both use `await` for async operations
- Both handle errors with `try/catch`
- Both can run operations in parallel

**Differences**:
- Python: `async def` functions return coroutines
- TypeScript: Functions return `Promise<T>`
- Python: `asyncio.gather()` = TypeScript: `Promise.all()`

## Common Mistakes

### Mistake 1: Forgetting `await`

```typescript
// ❌ Wrong - returns Promise, not value
function getData() {
  const data = fetchData();  // Promise, not the value!
  return data;
}

// ✅ Correct
async function getData() {
  const data = await fetchData();  // Actual value
  return data;
}
```

### Mistake 2: Not Handling Errors

```typescript
// ❌ Wrong - unhandled rejection
fetchData().then(data => console.log(data));

// ✅ Correct
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Mistake 3: Promise Hell (Nested `.then()`)

```typescript
// ❌ Hard to read
fetchUser(1).then(user => {
  fetchPosts(user.id).then(posts => {
    fetchComments(posts[0].id).then(comments => {
      console.log(comments);
    });
  });
});

// ✅ Better - use async/await
async function loadComments() {
  const user = await fetchUser(1);
  const posts = await fetchPosts(user.id);
  const comments = await fetchComments(posts[0].id);
  console.log(comments);
}
```

### Mistake 4: Not Returning in `.then()`

```typescript
// ❌ Wrong - doesn't return value
fetchData()
  .then(data => {
    processData(data);  // Missing return!
  })
  .then(result => {
    console.log(result);  // undefined!
  });

// ✅ Correct
fetchData()
  .then(data => {
    return processData(data);  // Return the value
  })
  .then(result => {
    console.log(result);  // Processed data
  });
```

## Best Practices

1. **Use `async/await`** for readability (instead of `.then()` chains)
2. **Always handle errors** with `try/catch` or `.catch()`
3. **Use `Promise.all()`** for parallel operations
4. **Type your Promises** in TypeScript: `Promise<string>`
5. **Avoid Promise hell** - use `async/await` for sequential operations
6. **Use `Promise.allSettled()`** when you need all results, even if some fail

## Summary

- **Promise**: Represents a future value
- **States**: Pending → Fulfilled or Rejected
- **Methods**: `.then()`, `.catch()`, `.finally()`
- **Utilities**: `Promise.all()`, `Promise.race()`, `Promise.allSettled()`
- **Modern syntax**: `async/await` (recommended)
- **TypeScript**: Type as `Promise<T>`

Promises are the foundation of async programming in JavaScript/TypeScript. Master them, and async code becomes much easier! 🚀

