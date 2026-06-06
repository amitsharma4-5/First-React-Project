export function Todo() {
  return (
    <div
      x-data="{ todos: [], input: '' }"
      style="width:100%;max-width:420px;display:flex;flex-direction:column;gap:12px;"
    >
      <h2 style="margin:0;font-size:20px;">Todo List</h2>

      <div style="display:flex;gap:8px;">
        <input
          x-model="input"
          x-on:keydown.enter="if(input.trim()){ todos.push({ id: Date.now(), text: input.trim(), done: false }); input = '' }"
          type="text"
          placeholder="Add a task..."
          style="flex:1;padding:8px 12px;border:1px solid hsla(var(--muted-foreground),0.4);border-radius:8px;font-size:14px;background:hsla(var(--background));color:hsla(var(--foreground));outline:none;"
        />
        <button
          x-on:click="if(input.trim()){ todos.push({ id: Date.now(), text: input.trim(), done: false }); input = '' }"
          class="btn btn-primary rounded px-4 py-2 text-sm"
        >
          Add
        </button>
      </div>

      <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px;">
        <template x-for="todo in todos" x-bind:key="todo.id">
          <li style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border:1px solid hsla(var(--muted-foreground),0.2);border-radius:8px;background:hsla(var(--background));">
            <div style="display:flex;align-items:center;gap:10px;">
              <input
                type="checkbox"
                x-model="todo.done"
                style="width:16px;height:16px;cursor:pointer;accent-color:hsla(var(--primary));"
              />
              <span
                x-text="todo.text"
                x-bind:style="todo.done ? 'text-decoration:line-through;color:hsla(var(--muted-foreground));' : 'color:hsla(var(--foreground));'"
                style="font-size:14px;"
              ></span>
            </div>
            <button
              x-on:click="todos = todos.filter(t => t.id !== todo.id)"
              style="background:none;border:none;cursor:pointer;color:hsla(var(--danger));font-size:16px;padding:0;"
            >
              🗑
            </button>
          </li>
        </template>
        <p
          x-show="todos.length === 0"
          style="text-align:center;color:hsla(var(--muted-foreground));font-size:13px;margin:0;"
        >
          No tasks yet. Add one above!
        </p>
      </ul>
    </div>
  );
}
