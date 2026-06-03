export function useDebounce<T>(value: T, delay: number = 500): Promise<T> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(value), delay);
    return () => clearTimeout(timer);
  });
}
