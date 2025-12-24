/**
 * Module 1: JavaScript Fundamentals
 * Topic: Asynchronous JavaScript
 * 
 * Key concepts:
 * - Promises (similar to Python's asyncio Future)
 * - async/await (similar to Python's async/await)
 * - Event loop (single-threaded, like Python's asyncio)
 */

// Promise basics
function fetchData(): Promise<string> {
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
}

// Using Promises with .then()/.catch()
fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// async/await (preferred, similar to Python)
async function fetchDataAsync(): Promise<string> {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    throw error;
  }
}

// Parallel execution (like asyncio.gather)
async function fetchMultiple(): Promise<string[]> {
  const promises = [fetchData(), fetchData(), fetchData()];
  return Promise.all(promises);
}

// Sequential execution
async function fetchSequential(): Promise<string[]> {
  const results: string[] = [];
  for (let i = 0; i < 3; i++) {
    const data = await fetchData();
    results.push(data);
  }
  return results;
}

// Promise utilities
async function demonstratePromiseUtils(): Promise<void> {
  // Promise.all - wait for all, fail if any fails
  const allResults = await Promise.all([fetchData(), fetchData()]);
  
  // Promise.allSettled - wait for all, never fails
  const settled = await Promise.allSettled([fetchData(), fetchData()]);
  
  // Promise.race - return first to complete
  const first = await Promise.race([fetchData(), fetchData()]);
}

// Real-world example: Fetching from API
async function fetchUserData(userId: number): Promise<{ id: number; name: string }> {
  // Simulating API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: `User ${userId}` });
    }, 500);
  });
}

export {
  fetchData,
  fetchDataAsync,
  fetchMultiple,
  fetchSequential,
  demonstratePromiseUtils,
  fetchUserData,
};


