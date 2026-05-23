export function TodoList() {
  return (
    <div
      x-data="{
        todos: [],
        newTodo: '',
        add() { if (this.newTodo.trim()) { this.todos.push({ id: Date.now(), text: this.newTodo.trim() }); this.newTodo = ''; } },
        remove(id) { this.todos = this.todos.filter(t => t.id !== id); }
      }"
      class="w-full max-w-md flex flex-col gap-y-4"
    >
      <h2 class="text-center">Todo List</h2>
      <div class="flex gap-x-2">
        <input
          x-model="newTodo"
          x-on:keydown.enter="add()"
          type="text"
          placeholder="Add a task..."
          class="input input-primary flex-1 px-3 py-2"
        />
        <button x-on:click="add()" class="btn btn-primary rounded px-4 py-2">
          Add
        </button>
      </div>
      <ul class="flex flex-col gap-y-2">
        <template x-for="todo in todos" x-bind:key="todo.id">
          <li class="flex items-center justify-between px-3 py-2 rounded border border-muted-foreground">
            <span x-text="todo.text"></span>
            <button x-on:click="remove(todo.id)" class="btn btn-danger rounded px-2 py-1 text-sm">
              Delete
            </button>
          </li>
        </template>
        <p x-show="todos.length === 0" class="text-center text-muted-foreground text-sm">
          No tasks yet. Add one above!
        </p>
      </ul>
    </div>
  );
}
