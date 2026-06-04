export function useTimer(callback: () => void, delay: number = 1000): {
  start: () => number;
  stop: (id: number) => void;
  reset: (id: number) => number;
} {
  const start = (): number => {
    return setInterval(callback, delay);
  };

  const stop = (id: number): void => {
    clearInterval(id);
  };

  const reset = (id: number): number => {
    clearInterval(id);
    return setInterval(callback, delay);
  };

  return { start, stop, reset };
}