/**
 * @typedef {{ message: string, type?: "success" | "danger" | "warning" | "info", onClose?: () => void }} AlertProps
 */

/**
 * @param {AlertProps} props
 */
export function Alert({ message, type = "info", onClose }) {
  const colorMap = new Map([
    ["success", { bg: "hsla(var(--success-light))", text: "hsla(var(--success-dark))", border: "hsla(var(--success))" }],
    ["danger",  { bg: "hsla(var(--danger-light))",  text: "hsla(var(--danger-dark))",  border: "hsla(var(--danger))"  }],
    ["warning", { bg: "hsla(var(--warning-light))", text: "hsla(var(--warning-dark))", border: "hsla(var(--warning))" }],
    ["info",    { bg: "hsla(var(--info-light))",    text: "hsla(var(--info-dark))",    border: "hsla(var(--info))"    }],
  ]);

  const c = colorMap.get(type);

  return (
    <div style={`display:flex;justify-content:space-between;align-items:center;padding:10px 16px;border-radius:8px;border:1px solid ${c.border};background:${c.bg};color:${c.text};font-size:14px;`}>
      <span>{message}</span>
      {onClose && (
        <button onclick={onClose} style="background:none;border:none;cursor:pointer;font-size:16px;color:inherit;margin-left:12px;">✕</button>
      )}
    </div>
  );
}
