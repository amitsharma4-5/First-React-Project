/**
 * @typedef {{ total: number, perPage?: number }} PaginationProps
 */

/**
 * @param {PaginationProps} props
 */
export function Pagination({ total, perPage = 10 }) {
  const pages = Math.ceil(total / perPage);

  return (
    <div
      x-data={`{ current: 1, pages: ${pages} }`}
      style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;"
    >
      <button
        x-on:click="if(current > 1) current--"
        x-bind:disabled="current === 1"
        class="btn btn-secondary-inversed rounded px-3 py-1 text-sm"
      >
        ←
      </button>

      {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
        <button
          x-on:click={`current = ${page}`}
          x-bind:class={`current === ${page} ? 'btn btn-primary rounded px-3 py-1 text-sm' : 'btn btn-secondary-inversed rounded px-3 py-1 text-sm'`}
        >
          {page}
        </button>
      ))}

      <button
        x-on:click={`if(current < ${pages}) current++`}
        x-bind:disabled={`current === ${pages}`}
        class="btn btn-secondary-inversed rounded px-3 py-1 text-sm"
      >
        →
      </button>
    </div>
  );
}
