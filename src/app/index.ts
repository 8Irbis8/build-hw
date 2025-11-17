import { formatMessage, unusedFunction } from './utils.ts';

// code splitting
const loadMathModule = async (): Promise<void> => {
  const math = await import('../lib/math.ts');
  console.log('Math result:', math.add(5, 3));
};

// Используем только formatMessage из utils
const message = formatMessage('Hello', 'World');
console.log(message);

loadMathModule();

// unusedFunction не используется - должна быть отброшена tree shaking