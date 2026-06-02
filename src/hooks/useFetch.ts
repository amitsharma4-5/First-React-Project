export async function useFetch<T>(url: string): Promise<{ data: T | null; error: string | null }> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    const data: T = await res.json();
    return { data, error: null };
  } catch (e) {
    return { data: null, error: (e as Error).message };
  }
}
