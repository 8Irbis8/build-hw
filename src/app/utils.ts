export const formatMessage = (greeting: string, name: string): string => {
  return `${greeting}, ${name}!`;
};

export const unusedFunction = (): void => {
  console.log('This function should be tree-shaken');
};

export const anotherUnusedFunction = (): number => {
  return 42;
};