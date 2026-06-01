/**
 * @typedef {{ text: string, children: any, position?: "top"|"bottom"|"left"|"right" }} TooltipProps
 */

/**
 * @param {TooltipProps} props
 */
export function Tooltip({ text, children, position = "top" }) {
  const posMap = new Map([
    ["top",    "bottom:110%;left:50%;transform:translateX(-50%)"],
    ["bottom", "top:110%;left:50%;transform:translateX(-50%)"],
    ["left",   "right:110%;top:50%;transform:translateY(-50%)"],
    ["right",  "left:110%;top:50%;transform:translateY(-50%)"],
  ]);

  return (
    <span
      x-data="{ show: false }"
      x-on:mouseenter="show = true"
      x-on:mouseleave="show = false"
      style="position:relative;display:inline-block;"
    >
      {children}
      <span
        x-show="show"
        style={`position:absolute;${posMap.get(position)};background:hsla(var(--primary));color:hsla(var(--primary-foreground));padding:4px 10px;border-radius:6px;font-size:12px;white-space:nowrap;pointer-events:none;z-index:10;`}
      >
        {text}
      </span>
    </span>
  );
}
