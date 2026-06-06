export function useWindowSize(): { width: number; height: number } {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function onWindowResize(callback: (size: { width: number; height: number }) => void): () => void {
  const handler = () => callback({ width: window.innerWidth, height: window.innerHeight });
  window.addEventListener("resize", handler);
  return () => window.removeEventListener("resize", handler);
}
