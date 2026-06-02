/**
 * @typedef {{ tabs: Array<{ label: string, content: any }> }} TabsProps
 */

/**
 * @param {TabsProps} props
 */
export function Tabs({ tabs }) {
  return (
    <div
      x-data="{ active: 0 }"
      style="width:100%;"
    >
      <div style="display:flex;border-bottom:2px solid hsla(var(--muted-foreground),0.2);margin-bottom:16px;">
        {tabs.map((tab, i) => (
          <button
            x-on:click={`active = ${i}`}
            x-bind:style={`active === ${i} ? 'border-bottom:2px solid hsla(var(--primary));color:hsla(var(--primary));margin-bottom:-2px;' : ''`}
            style="background:none;border:none;padding:8px 16px;cursor:pointer;font-size:14px;font-weight:500;color:hsla(var(--muted-foreground));transition:color 0.2s;"
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, i) => (
        <div x-show={`active === ${i}`}>
          {tab.content}
        </div>
      ))}
    </div>
  );
}
