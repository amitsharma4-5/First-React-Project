/**
 * @typedef {{ label: string, items: Array<{ text: string, href?: string, onclick?: string }> }} DropdownProps
 */

/**
 * @param {DropdownProps} props
 */
export function Dropdown({ label, items }) {
  return (
    <div
      x-data="{ open: false }"
      x-on:click.outside="open = false"
      style="position:relative;display:inline-block;"
    >
      <button
        x-on:click="open = !open"
        class="btn btn-primary-inversed rounded px-4 py-2 text-sm"
        style="display:flex;align-items:center;gap:8px;"
      >
        {label}
        <span x-text="open ? '▲' : '▼'" style="font-size:10px;"></span>
      </button>

      <ul
        x-show="open"
        x-transition
        style="position:absolute;top:110%;left:0;min-width:160px;background:hsla(var(--background));border:1px solid hsla(var(--muted-foreground),0.3);border-radius:8px;padding:4px 0;list-style:none;margin:0;z-index:100;box-shadow:0 4px 12px rgba(0,0,0,0.1);"
      >
        {items.map((item) => (
          <li>
            <a
              href={item.href ?? "#"}
              onclick={item.onclick}
              style="display:block;padding:8px 16px;font-size:14px;color:hsla(var(--foreground));text-decoration:none;transition:background 0.15s;"
              x-on:mouseenter="$el.style.background='hsla(var(--primary-light-2))'"
              x-on:mouseleave="$el.style.background=''"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
