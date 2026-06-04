/**
 * @typedef {{ items: Array<{ title: string, content: any }> }} AccordionProps
 */

/**
 * @param {AccordionProps} props
 */
export function Accordion({ items }) {
  return (
    <div
      x-data="{ open: null }"
      style="width:100%;max-width:500px;"
    >
      {items.map((item, i) => (
        <div style="border-bottom:1px solid hsla(var(--muted-foreground),0.2);">
          <button
            x-on:click={`open = open === ${i} ? null : ${i}`}
            style="width:100%;text-align:left;background:none;border:none;padding:12px 0;cursor:pointer;color:hsla(var(--foreground));font-weight:500;font-size:15px;display:flex;justify-content:space-between;align-items:center;"
          >
            <span>{item.title}</span>
            <span x-text={`open === ${i} ? '▲' : '▼'`} style="font-size:12px;color:hsla(var(--muted-foreground));"></span>
          </button>
          <div
            x-show={`open === ${i}`}
            x-transition
            style="padding-bottom:12px;color:hsla(var(--muted-foreground));font-size:14px;line-height:1.5;"
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}