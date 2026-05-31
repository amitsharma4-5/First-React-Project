export function ThemeToggle() {
  return (
    <button
      x-data="{ dark: false }"
      x-on:click="dark = !dark; document.documentElement.classList.toggle('dark', dark)"
      x-text="dark ? '☀️ Light' : '🌙 Dark'"
      class="btn btn-secondary-inversed rounded px-4 py-2 text-sm"
      style="position: fixed; top: 16px; right: 16px;"
    />
  );
}
