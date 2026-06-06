/**
 * @typedef {{ title?: string, children: any, position?: "left"|"right", trigger?: string }} DrawerProps
 */

/**
 * @param {DrawerProps} props
 */
export function Drawer({ title, children, position = "right", trigger = "Open" }) {
  const isRight = position === "right";

  return (
    <div x-data="{ open: false }">
      <button x-on:click="open = true" class="btn btn-primary-inversed rounded px-4 py-2 text-sm">
        {trigger}
      </button>

      <div
        x-show="open"
        x-transition:enter="transition ease-out duration-200"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-on:click="open = false"
        style="position:fixed;inset:0;background:rgba(0,0,0,0.4);z-index:200;"
      />

      <div
        x-show="open"
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start={isRight ? "translate-x-full" : "-translate-x-full"}
        x-transition:enter-end="translate-x-0"
        style={`position:fixed;top:0;${isRight ? 'right:0;' : 'left:0;'}height:100vh;width:320px;background:hsla(var(--background));border-${isRight ? 'left' : 'right'}:1px solid hsla(var(--muted-foreground),0.2);z-index:201;padding:24px;box-sizing:border-box;display:flex;flex-direction:column;gap:16px;`}
      >
        <div style="display:flex;justify-content:space-between;align-items:center;">
          {title && <h2 style="margin:0;font-size:18px;">{title}</h2>}
          <button
            x-on:click="open = false"
            style="background:none;border:none;font-size:20px;cursor:pointer;color:hsla(var(--muted-foreground));margin-left:auto;"
          >
            ✕
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
