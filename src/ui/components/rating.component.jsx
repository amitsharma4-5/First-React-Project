/**
 * @typedef {{ max?: number, defaultValue?: number, readonly?: boolean }} RatingProps
 */

/**
 * @param {RatingProps} props
 */
export function Rating({ max = 5, defaultValue = 0, readonly = false }) {
  return (
    <div
      x-data={`{ rating: ${defaultValue}, hovered: 0 }`}
      style="display:inline-flex;gap:4px;"
    >
      {Array.from({ length: max }, (_, i) => i + 1).map((star) => (
        <button
          x-on:click={readonly ? '' : `rating = ${star}`}
          x-on:mouseenter={readonly ? '' : `hovered = ${star}`}
          x-on:mouseleave={readonly ? '' : `hovered = 0`}
          x-bind:style={`(hovered || rating) >= ${star} ? 'color:hsla(var(--warning));' : 'color:hsla(var(--muted-foreground),0.4);'`}
          style={`background:none;border:none;font-size:22px;cursor:${readonly ? 'default' : 'pointer'};padding:0;line-height:1;transition:color 0.15s;`}
          type="button"
        >
          ★
        </button>
      ))}
    </div>
  );
}
