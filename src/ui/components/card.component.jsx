/**
 * @typedef {{ title?: string, description?: string, footer?: any, children?: any }} CardProps
 */

/**
 * @param {CardProps} props
 */
export function Card({ title, description, footer, children }) {
  return (
    <div
      style="background:hsla(var(--background));border:1px solid hsla(var(--muted-foreground),0.3);border-radius:12px;padding:20px;box-shadow:0 4px 12px rgba(0,0,0,0.06);max-width:320px;text-align:left;"
    >
      {title && <h3 style="margin:0 0 8px;font-size:16px;">{title}</h3>}
      {description && <p style="margin:0 0 12px;font-size:14px;color:hsla(var(--muted-foreground))">{description}</p>}
      {children}
      {footer && (
        <div style="border-top:1px solid hsla(var(--muted-foreground),0.2);padding-top:10px;margin-top:12px;font-size:13px;">
          {footer}
        </div>
      )}
    </div>
  );
}
