/**
 * @typedef {{ label: string, variant?: import("../common/types").VariantColorType, color?: "primary" | "success" | "danger" | "warning" | "info" | "secondary" }} BadgeProps
 */

/**
 * @param {BadgeProps} props
 */
export function Badge({ label, color = "primary" }) {
  const colorMap = new Map([
    ["primary", "hsla(var(--primary))"],
    ["success", "hsla(var(--success))"],
    ["danger", "hsla(var(--danger))"],
    ["warning", "hsla(var(--warning))"],
    ["info", "hsla(var(--info))"],
    ["secondary", "hsla(var(--secondary))"],
  ]);

  return (
    <span
      style={`display:inline-block;padding:2px 10px;border-radius:999px;font-size:12px;font-weight:600;color:#fff;background:${colorMap.get(color)}`}
    >
      {label}
    </span>
  );
}
