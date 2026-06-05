/**
 * @typedef {{ label: string, color?: "primary"|"success"|"danger"|"warning"|"info"|"secondary", onClose?: string, removable?: boolean }} ChipProps
 */

/**
 * @param {ChipProps} props
 */
export function Chip({ label, color = "primary", removable = false, onClose }) {
  const colorMap = new Map([
    ["primary",   { bg: "hsla(var(--primary-light-1))",  text: "hsla(var(--primary-dark-1))"  }],
    ["success",   { bg: "hsla(var(--success-light))",    text: "hsla(var(--success-dark))"    }],
    ["danger",    { bg: "hsla(var(--danger-light))",     text: "hsla(var(--danger-dark))"     }],
    ["warning",   { bg: "hsla(var(--warning-light))",    text: "hsla(var(--warning-dark))"    }],
    ["info",      { bg: "hsla(var(--info-light))",       text: "hsla(var(--info-dark))"       }],
    ["secondary", { bg: "hsla(var(--secondary-light))",  text: "hsla(var(--secondary-dark))"  }],
  ]);

  const c = colorMap.get(color);

  return (
    <span
      x-data="{ visible: true }"
      x-show="visible"
      style={`display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;font-size:12px;font-weight:500;background:${c.bg};color:${c.text};`}
    >
      {label}
      {removable && (
        <button
          x-on:click={`visible = false; ${onClose ?? ''}`}
          style="background:none;border:none;cursor:pointer;font-size:14px;color:inherit;line-height:1;padding:0;"
        >
          ✕
        </button>
      )}
    </span>
  );
}
