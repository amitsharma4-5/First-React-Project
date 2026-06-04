/**
 * @typedef {{ label?: string, options: Array<{ value: string, text: string }>, placeholder?: string }} SelectProps
 */

/**
 * @param {SelectProps} props
 */
export function Select({ label, options, placeholder = "Choose..." }) {
  return (
    <div style="display:flex;flex-direction:column;gap:4px;width:100%;">
      {label && <label style="font-size:13px;font-weight:500;color:hsla(var(--foreground));">{label}</label>}
      <div
        x-data="{ open: false, selected: '', selectedText: '' }"
        x-on:click.outside="open = false"
        style="position:relative;"
      >
        <button
          x-on:click="open = !open"
          class="input input-primary"
          style="display:flex;justify-content:space-between;align-items:center;width:100%;cursor:pointer;"
        >
          <span x-text="selectedText || '{placeholder}'" style="color:hsla(var(--foreground));"></span>
          <span x-text="open ? '▲' : '▼'" style="font-size:12px;color:hsla(var(--muted-foreground));"></span>
        </button>
        
        <ul
          x-show="open"
          x-transition
          style="position:absolute;top:110%;left:0;right:0;background:hsla(var(--background));border:1px solid hsla(var(--muted-foreground),0.3);border-radius:8px;padding:4px 0;list-style:none;margin:0;z-index:100;box-shadow:0 4px 12px rgba(0,0,0,0.1);"
        >
          {options.map((option) => (
            <li>
              <button
                x-on:click={`selected = '${option.value}'; selectedText = '${option.text}'; open = false`}
                style="width:100%;text-align:left;background:none;border:none;padding:8px 16px;font-size:14px;color:hsla(var(--foreground));cursor:pointer;transition:background 0.15s;"
                x-on:mouseenter="$el.style.background='hsla(var(--primary-light-2))'"
                x-on:mouseleave="$el.style.background=''"
              >
                {option.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}