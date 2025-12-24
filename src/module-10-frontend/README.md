# Frontend Framework Examples

This directory contains examples for frontend frameworks with TypeScript.

## React + TypeScript

To set up a React + TypeScript project:

```bash
# Create new React app with TypeScript
npx create-react-app my-app --template typescript

# Or use Vite (faster)
npm create vite@latest my-app -- --template react-ts
```

### Key Concepts:

1. **Typed Components:**
```typescript
interface Props {
  name: string;
  age: number;
}

const Component: React.FC<Props> = ({ name, age }) => {
  return <div>{name} is {age}</div>;
};
```

2. **Typed Hooks:**
```typescript
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
```

3. **Typed Events:**
```typescript
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};
```

## Vue + TypeScript

To set up a Vue + TypeScript project:

```bash
npm create vue@latest my-app
# Select TypeScript when prompted
```

### Key Concepts:

1. **Composition API with Types:**
```typescript
import { ref, computed } from 'vue';

const count = ref<number>(0);
const doubled = computed(() => count.value * 2);
```

2. **Typed Props:**
```typescript
interface Props {
  title: string;
  count?: number;
}

const props = defineProps<Props>();
```

## Next Steps

1. Choose a framework (React or Vue)
2. Set up a new project using the commands above
3. Follow the framework's TypeScript documentation
4. Build a small project (todo app, weather app, etc.)

For detailed examples, refer to the official documentation:
- [React TypeScript](https://react-typescript-cheatsheet.netlify.app/)
- [Vue TypeScript](https://vuejs.org/guide/typescript/overview.html)


