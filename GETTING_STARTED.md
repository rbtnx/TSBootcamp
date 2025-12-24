# Getting Started with TypeScript Bootcamp

## Step 1: Install Dependencies

```bash
npm install
```

This will install:
- TypeScript compiler
- Type definitions for Node.js
- ESLint and Prettier for code quality
- Express for backend examples

## Step 2: Verify Installation

```bash
# Check TypeScript version
npx tsc --version

# Try compiling
npm run build
```

## Step 3: Explore the Course

1. **Read the Course Plan**: Open `COURSE_PLAN.md` to see the full learning path
2. **Start with Module 1**: If you're new to JavaScript, begin with `src/module-01-javascript/`
3. **Follow the Modules**: Work through modules sequentially
4. **Try the Examples**: Each module has working code examples
5. **Do the Exercises**: Check `src/exercises/README.md` for practice problems

## Step 4: Run Examples

### Run TypeScript directly (no compilation needed):
```bash
npm run dev
```

### Compile and run:
```bash
npm run build
node dist/index.js
```

### Watch mode (auto-compile on changes):
```bash
npm run watch
```

## Step 5: Experiment

1. Open any example file in `src/`
2. Modify the code
3. See TypeScript errors in real-time (if using VS Code)
4. Run with `npm run dev` to test

## Recommended Learning Order

### Week 1: Foundations
- Module 1: JavaScript Fundamentals (1-2 days)
- Module 2: TypeScript Type System (3-4 days)
- Module 3: Advanced Types (3-4 days)

### Week 2: OOP & Patterns
- Module 4: Classes & OOP (2-3 days)
- Module 6: Design Patterns (4-5 days)

### Week 3: Web Development
- Module 7: Web Development (3-4 days)
- Module 8: Modern Features (2-3 days)
- Module 10: Frontend Framework (4-5 days)

### Week 4: Backend & Advanced
- Module 11: Backend TypeScript (3-4 days)
- Module 13: Advanced Topics (3-4 days)
- Module 14: Capstone Project (5-7 days)

## Tips for Success

1. **Use VS Code**: Best TypeScript editor with excellent IntelliSense
2. **Read Error Messages**: TypeScript errors are usually helpful
3. **Don't Use `any`**: Defeats the purpose of TypeScript
4. **Experiment**: Modify examples to see what happens
5. **Build Projects**: Apply what you learn in small projects

## Common Commands

```bash
# Development
npm run dev          # Run TypeScript with ts-node
npm run watch        # Watch mode for compilation
npm run build        # Compile to JavaScript

# Code Quality
npm run lint         # Check for errors
npm run format       # Format code with Prettier

# Testing (when configured)
npm test             # Run tests
```

## Next Steps

1. ✅ Install dependencies
2. ✅ Read `COURSE_PLAN.md`
3. ✅ Start with Module 1
4. ✅ Work through examples
5. ✅ Complete exercises
6. ✅ Build your first project!

Happy coding! 🚀


