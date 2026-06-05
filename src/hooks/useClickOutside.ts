export function useClickOutside(
  elementId: string,
  callback: () => void
): () => void {
  const handler = (event: MouseEvent) => {
    const el = document.getElementById(elementId);
    if (el && !el.contains(event.target as Node)) {
      callback();
    }
  };

  document.addEventListener("mousedown", handler);

  return () => document.removeEventListener("mousedown", handler);
}
