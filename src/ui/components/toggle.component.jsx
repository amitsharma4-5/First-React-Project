/**
 * @typedef {{ label?: string, defaultChecked?: boolean, onChange?: string }} ToggleProps
 */

/**
 * @param {ToggleProps} props
 */
export function Toggle({ label, defaultChecked = false, onChange }) {
  return (
    <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:14px;">
      <div
        x-data={`{ checked: ${defaultChecked} }`}
        x-on:click={`checked = !checked; ${onChange ? `(${onChange})(checked)` : ''}`}
        x-bind:style="checked ? 'background:hsla(var(--primary));' : 'background:hsla(var(--muted-foreground),0.3);'"
        style="position:relative;width:44px;height:24px;border-radius:12px;transition:background 0.2s;cursor:pointer;"
      >
        <div
          x-bind:style="checked ? 'transform:translateX(20px);' : 'transform:translateX(2px);'"
          style="position:absolute;top:2px;width:20px;height:20px;background:#fff;border-radius:50%;transition:transform 0.2s;"
        ></div>
      </div>
      {label && <span style="color:hsla(var(--foreground));font-weight:500;">{label}</span>}
    </label>
  );
}