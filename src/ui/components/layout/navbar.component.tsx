/**
 * @typedef {{ brand?: string, links?: Array<{ label: string, href: string }> }} NavbarProps
 */

/**
 * @param {NavbarProps} props
 */
export function Navbar({ brand = "App", links = [] }) {
  return (
    <nav
      x-data="{ open: false }"
      style="background:hsla(var(--background));border-bottom:1px solid hsla(var(--muted-foreground),0.2);padding:0 24px;position:sticky;top:0;z-index:50;"
    >
      <div style="display:flex;align-items:center;justify-content:space-between;height:56px;max-width:1100px;margin:0 auto;">
        <span style="font-size:18px;font-weight:700;color:hsla(var(--primary));">{brand}</span>

        <ul style="display:flex;align-items:center;gap:4px;list-style:none;margin:0;padding:0;">
          {links.map((link) => (
            <li>
              <a
                href={link.href}
                style="padding:6px 14px;border-radius:6px;font-size:14px;font-weight:500;color:hsla(var(--foreground));text-decoration:none;transition:background 0.15s;"
                x-on:mouseenter="$el.style.background='hsla(var(--primary-light-2))'"
                x-on:mouseleave="$el.style.background=''"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
