/**
 * Module 7: TypeScript in Web Development
 * Topic: DOM Manipulation
 * 
 * Type-safe DOM operations
 */

// Typing DOM elements
function getElementByIdTyped(id: string): HTMLElement | null {
  return document.getElementById(id);
}

// More specific types
function getButton(id: string): HTMLButtonElement | null {
  const element = document.getElementById(id);
  return element instanceof HTMLButtonElement ? element : null;
}

function getInput(id: string): HTMLInputElement | null {
  const element = document.getElementById(id);
  return element instanceof HTMLInputElement ? element : null;
}

// Event handling with types
function setupClickHandler(buttonId: string, handler: (event: MouseEvent) => void): void {
  const button = document.getElementById(buttonId);
  if (button instanceof HTMLButtonElement) {
    button.addEventListener('click', handler);
  }
}

// Form handling
interface FormData {
  name: string;
  email: string;
  age: number;
}

function handleFormSubmit(formId: string, onSubmit: (data: FormData) => void): void {
  const form = document.getElementById(formId);
  if (form instanceof HTMLFormElement) {
    form.addEventListener('submit', (event: SubmitEvent) => {
      event.preventDefault();

      const formData = new FormData(form);
      const data: FormData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        age: parseInt(formData.get('age') as string, 10),
      };

      onSubmit(data);
    });
  }
}

// Creating elements with types
function createTypedElement<T extends keyof HTMLElementTagNameMap>(
  tag: T
): HTMLElementTagNameMap[T] {
  return document.createElement(tag);
}

const button = createTypedElement('button');
button.textContent = 'Click me';
button.type = 'button';

const input = createTypedElement('input');
input.type = 'text';
input.placeholder = 'Enter text';

// Query selector with types
function querySelectorTyped<T extends Element>(
  selector: string,
  expectedType: new () => T
): T | null {
  const element = document.querySelector(selector);
  return element instanceof expectedType ? element : null;
}

const typedButton = querySelectorTyped('.my-button', HTMLButtonElement);

export {
  getElementByIdTyped,
  getButton,
  getInput,
  setupClickHandler,
  handleFormSubmit,
  createTypedElement,
  querySelectorTyped,
  type FormData,
};


