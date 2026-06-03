/**
 * @typedef {{ items: Array<{ label: string, href?: string }> }} BreadcrumbProps
 */

/**
 * @param {BreadcrumbProps} props
 */
export function Breadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb">
      <ol style="display:flex;align-items:center;gap:6px;list-style:none;margin:0;padding:0;font-size:14px;">
        {items.map((item, i) => (
          <li style="display:flex;align-items:center;gap:6px;">
            {i < items.length - 1 ? (
              <>
                <a
                  href={item.href ?? "#"}
                  style="color:hsla(var(--primary));text-decoration:none;"
                  class="link link-primary"
                >
                  {item.label}
                </a>
                <span style="color:hsla(var(--muted-foreground));">/</span>
              </>
            ) : (
              <span style="color:hsla(var(--muted-foreground));font-weight:500;">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
