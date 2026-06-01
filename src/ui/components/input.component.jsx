import clsx from "clsx";

/**
 * @typedef {{ label?: string, color?: "primary"|"secondary"|"success"|"danger"|"warning"|"info", class?: string } & JSX.HtmlInputTag} InputProps
 */

/**
 * @param {InputProps} props
 */
export function Input({ label, color = "primary", class: className, ...restProps }) {
  return (
    <div style="display:flex;flex-direction:column;gap:4px;width:100%;">
      {label && <label style="font-size:13px;font-weight:500;color:hsla(var(--foreground))">{label}</label>}
      <div class={clsx("input", `input-${color}`, className)}>
        <input {...restProps} />
      </div>
    </div>
  );
}
