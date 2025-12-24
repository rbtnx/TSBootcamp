# TypeScript & Web Development Course Plan

## Course Overview
This course is designed for developers with intermediate Python/C experience transitioning to TypeScript and web development. It focuses on TypeScript-specific features and design patterns, assuming familiarity with basic programming concepts.

**Prerequisites:** Intermediate Python/C, basic programming concepts  
**Goal:** Build simple web apps and understand TypeScript/web codebases

---

## Module 1: JavaScript Fundamentals (Quick Review)
*Duration: 1-2 days*

Since you know little JavaScript, we'll cover the essentials that TypeScript builds upon:

### Topics:
- **Variables & Scope:** `var`, `let`, `const`, hoisting, block scope
- **Functions:** Function declarations, arrow functions, closures
- **Objects & Arrays:** Object literals, destructuring, spread operator
- **Asynchronous JavaScript:** Promises, async/await, callbacks
- **DOM Basics:** Selecting elements, event listeners (minimal, just enough context)

### Practice:
- Convert a simple Python script to JavaScript
- Write async functions using Promises

---

## Module 2: TypeScript Type System
*Duration: 3-4 days*

The core of TypeScript - static typing and type safety.

### Topics:
- **Basic Types:** `string`, `number`, `boolean`, `null`, `undefined`, `void`, `never`
- **Type Annotations:** Explicit vs. inferred types
- **Union & Intersection Types:** `string | number`, `A & B`
- **Type Aliases:** Creating custom type names
- **Literal Types:** `"red" | "green" | "blue"`, `42`
- **Arrays & Tuples:** `number[]`, `[string, number]`
- **Enums:** Numeric and string enums, when to use them
- **Type Assertions:** `as` keyword, `<>` syntax
- **Type Guards:** `typeof`, `instanceof`, custom type guards

### Practice:
- Annotate existing JavaScript code with types
- Create type definitions for data structures
- Build type-safe utility functions

---

## Module 3: Advanced TypeScript Types
*Duration: 3-4 days*

Powerful type system features that set TypeScript apart.

### Topics:
- **Interfaces:** Defining object shapes, optional properties, readonly
- **Type vs Interface:** When to use each
- **Generics:** `<T>`, generic functions, classes, constraints
- **Utility Types:** `Partial<T>`, `Pick<T>`, `Omit<T>`, `Record<K, V>`, `Required<T>`
- **Mapped Types:** Transforming types programmatically
- **Conditional Types:** `T extends U ? X : Y`
- **Template Literal Types:** `type EventName = "on${string}"`
- **Index Signatures:** `[key: string]: value`
- **Function Types:** Function signatures, overloads

### Practice:
- Build a generic data structure (Stack, Queue)
- Create utility types for API responses
- Design type-safe event system

---

## Module 4: TypeScript Classes & OOP
*Duration: 2-3 days*

Object-oriented programming in TypeScript (different from Python/C++).

### Topics:
- **Classes:** Properties, methods, constructors
- **Access Modifiers:** `public`, `private`, `protected`, `readonly`
- **Inheritance:** `extends`, `super`
- **Abstract Classes:** Abstract methods and properties
- **Interfaces for Classes:** `implements` keyword
- **Static Members:** Static methods and properties
- **Getters & Setters:** Property accessors
- **Decorators:** Introduction (used in frameworks like Angular)

### Practice:
- Build a class hierarchy (e.g., Vehicle → Car → ElectricCar)
- Implement interfaces in classes
- Create abstract base classes

---

## Module 5: Modules & Project Structure
*Duration: 2 days*

How TypeScript organizes code (similar to Python modules, but different syntax).

### Topics:
- **ES Modules:** `import`/`export`, default vs named exports
- **TypeScript Module Resolution:** How TS finds modules
- **Namespaces:** `namespace` keyword (legacy, but good to know)
- **Declaration Files:** `.d.ts` files, ambient declarations
- **Triple-Slash Directives:** `/// <reference types="..." />`
- **tsconfig.json:** Compiler options, module system, target
- **Path Mapping:** `@/` aliases, `baseUrl`, `paths`

### Practice:
- Set up a multi-file TypeScript project
- Create custom type definitions
- Configure `tsconfig.json` for a web project

---

## Module 6: Design Patterns in TypeScript
*Duration: 4-5 days*

Common patterns adapted for TypeScript's type system.

### Patterns to Cover:
1. **Singleton Pattern:** Ensuring single instance with types
2. **Factory Pattern:** Type-safe object creation
3. **Observer Pattern:** Event-driven architecture
4. **Strategy Pattern:** Algorithm selection with types
5. **Builder Pattern:** Fluent interfaces with type safety
6. **Adapter Pattern:** Interface adaptation
7. **Dependency Injection:** Constructor injection, interfaces
8. **Repository Pattern:** Data access abstraction

### Practice:
- Implement each pattern with full type safety
- Build a small application using multiple patterns
- Refactor code to use appropriate patterns

---

## Module 7: TypeScript in Web Development
*Duration: 3-4 days*

Practical TypeScript for web applications.

### Topics:
- **DOM Manipulation:** Typing DOM elements, events
- **Event Handling:** Type-safe event listeners
- **API Integration:** Typing fetch responses, error handling
- **Form Handling:** Type-safe form validation
- **Local Storage:** Typed storage utilities
- **Web APIs:** Typing browser APIs (Geolocation, etc.)

### Practice:
- Build a type-safe todo app (local storage)
- Create a weather app with API integration
- Build a form with validation

---

## Module 8: Modern JavaScript/TypeScript Features
*Duration: 2-3 days*

ES6+ features that TypeScript uses extensively.

### Topics:
- **Destructuring:** Objects and arrays
- **Spread/Rest Operators:** `...` operator
- **Template Literals:** String interpolation
- **Optional Chaining:** `?.` operator
- **Nullish Coalescing:** `??` operator
- **Arrow Functions:** Lexical `this` binding
- **Array Methods:** `map`, `filter`, `reduce`, `forEach`
- **Iterators & Generators:** `for...of`, generators

### Practice:
- Refactor code to use modern features
- Build data transformation pipelines

---

## Module 9: Build Tools & Development Workflow
*Duration: 2 days*

Essential tooling for TypeScript development.

### Topics:
- **TypeScript Compiler:** `tsc`, compilation options
- **npm/yarn:** Package management
- **Bundlers:** Introduction to Webpack/Vite (concepts)
- **Development Server:** Hot reload, dev tools
- **Linting:** ESLint with TypeScript
- **Formatting:** Prettier
- **Debugging:** Source maps, browser debugging

### Practice:
- Set up a TypeScript project from scratch
- Configure build pipeline
- Debug TypeScript in browser

---

## Module 10: Frontend Framework Basics (React/Vue)
*Duration: 4-5 days*

Choose one framework to learn TypeScript integration.

### React + TypeScript:
- **Components:** Functional components with types
- **Props:** Typing component props
- **Hooks:** `useState`, `useEffect` with types
- **Context:** Typed context API
- **Event Handlers:** Typing events
- **Custom Hooks:** Type-safe hooks

### Vue + TypeScript:
- **Composition API:** `setup()` with types
- **Props & Emits:** Typing component interface
- **Reactivity:** `ref`, `reactive` with types
- **Composables:** Type-safe composables

### Practice:
- Build a component library with TypeScript
- Create a small SPA (Single Page Application)
- Integrate with APIs

---

## Module 11: Backend TypeScript (Node.js)
*Duration: 3-4 days*

Server-side TypeScript (leverages your backend knowledge).

### Topics:
- **Node.js Basics:** CommonJS vs ES modules
- **Express.js:** Typing routes, middleware, requests/responses
- **TypeORM/Prisma:** Database ORMs with TypeScript
- **Error Handling:** Typed error classes
- **API Design:** RESTful APIs with types
- **Validation:** Zod, Joi for runtime validation
- **Environment Variables:** Typed config

### Practice:
- Build a REST API with Express + TypeScript
- Create database models with type safety
- Implement authentication with types

---

## Module 12: Testing TypeScript
*Duration: 2 days*

Testing strategies for TypeScript code.

### Topics:
- **Jest/Vitest:** Unit testing with TypeScript
- **Type Testing:** Testing types themselves
- **Mocking:** Typed mocks
- **Test Utilities:** Type-safe test helpers

### Practice:
- Write tests for previous projects
- Test type definitions

---

## Module 13: Advanced Topics & Best Practices
*Duration: 3-4 days*

Production-ready TypeScript.

### Topics:
- **Error Handling:** Result types, Either pattern
- **Branded Types:** Creating distinct types
- **Type Narrowing:** Advanced narrowing techniques
- **Performance:** Type-only imports, const assertions
- **Code Organization:** Barrel exports, feature-based structure
- **Documentation:** JSDoc with TypeScript
- **Common Pitfalls:** `any`, `unknown`, `never` usage
- **TypeScript Compiler API:** Advanced usage (optional)

### Practice:
- Refactor codebase following best practices
- Build a small library with full type safety
- Document code with JSDoc

---

## Module 14: Capstone Project
*Duration: 5-7 days*

Build a complete web application.

### Project Ideas:
1. **Task Management App:** Full-stack with authentication
2. **Blog Platform:** CRUD operations, markdown support
3. **E-commerce Frontend:** Product catalog, cart, checkout
4. **Dashboard:** Data visualization, API integration
5. **Chat Application:** Real-time messaging

### Requirements:
- Use TypeScript throughout
- Apply multiple design patterns
- Frontend + Backend (or frontend-only with mock API)
- Proper error handling
- Type safety everywhere
- Clean code structure

---

## Learning Resources

### Official Documentation:
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

### Practice Platforms:
- [TypeScript Exercises](https://typescript-exercises.github.io/)
- [Type Challenges](https://github.com/type-challenges/type-challenges)

### Books:
- "Programming TypeScript" by Boris Cherny
- "Effective TypeScript" by Dan Vanderkam

### Video Courses:
- TypeScript official tutorials
- Frontend Masters TypeScript courses

---

## Study Schedule Recommendations

### Intensive (Full-time):
- **Duration:** 6-8 weeks
- **Daily:** 4-6 hours
- **Focus:** Complete all modules

### Part-time:
- **Duration:** 12-16 weeks
- **Daily:** 2-3 hours
- **Focus:** Complete core modules (1-7, 10, 11, 14)

### Self-paced:
- **Duration:** Flexible
- **Focus:** Modules 2-6 (TypeScript core) + Module 10 or 11 (framework/backend)

---

## Key Differences from Python/C

### Type System:
- **Python:** Dynamic typing, duck typing
- **C:** Static but weak typing, manual memory management
- **TypeScript:** Static typing with inference, structural typing

### Memory Management:
- **C:** Manual (malloc/free)
- **Python:** Garbage collected
- **TypeScript/JavaScript:** Garbage collected (like Python)

### Concurrency:
- **C:** Threads, mutexes
- **Python:** GIL, async/await
- **TypeScript:** Event loop, async/await (similar to Python)

### Module System:
- **Python:** `import`/`from`
- **C:** `#include`
- **TypeScript:** ES modules (`import`/`export`)

---

## Practice Projects by Module

### Module 2-3:
- Type-safe calculator
- Type definitions for a library API

### Module 4:
- Class-based game (e.g., Tic-tac-toe)
- Inheritance hierarchy

### Module 6:
- Design pattern showcase project
- Refactor existing code with patterns

### Module 7:
- Interactive web page with DOM manipulation
- API client with full typing

### Module 10:
- Component library
- Small SPA

### Module 11:
- REST API server
- Database-backed application

---

## Tips for Success

1. **Type Everything:** Don't use `any` - it defeats the purpose
2. **Read Error Messages:** TypeScript errors are usually helpful
3. **Use Your Editor:** VS Code with TypeScript is excellent
4. **Practice Regularly:** Build small projects after each module
5. **Read Type Definitions:** Look at `node_modules/@types/` to learn
6. **Start Simple:** Don't over-engineer early projects
7. **Leverage Your Background:** Your C/Python knowledge helps with algorithms and logic

---

## Next Steps After This Course

- **Advanced Frontend:** State management (Redux, Zustand), advanced React patterns
- **Full-Stack:** Next.js, NestJS, tRPC
- **Mobile:** React Native with TypeScript
- **Desktop:** Electron with TypeScript
- **DevOps:** CI/CD for TypeScript projects

---

**Good luck with your TypeScript journey! 🚀**


