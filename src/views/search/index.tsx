export function SearchBar() {
  return (
    <div
      x-data="{ query: '', results: [] }"
      style="width:100%;max-width:420px;"
    >
      <div style="position:relative;">
        <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:16px;color:hsla(var(--muted-foreground));">🔍</span>
        <input
          x-model="query"
          type="text"
          placeholder="Search..."
          style="width:100%;padding:10px 16px 10px 38px;border:1px solid hsla(var(--muted-foreground),0.4);border-radius:8px;font-size:14px;background:hsla(var(--background));color:hsla(var(--foreground));outline:none;box-sizing:border-box;transition:border 0.2s;"
          x-on:focus="$el.style.borderColor='hsla(var(--primary))'"
          x-on:blur="$el.style.borderColor='hsla(var(--muted-foreground),0.4)'"
        />
        <button
          x-show="query.length > 0"
          x-on:click="query = ''"
          style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:16px;color:hsla(var(--muted-foreground));"
        >
          ✕
        </button>
      </div>
      <p
        x-show="query.length > 0"
        x-text="`Searching for: &quot;${query}&quot;`"
        style="margin-top:8px;font-size:13px;color:hsla(var(--muted-foreground));"
      ></p>
    </div>
  );
}
