export function Greeting() {
  return (
    <div
      x-data="{ name: '', submitted: false }"
      class="flex flex-col items-center gap-y-4 w-full max-w-sm"
    >
      <h2 class="text-center">What's your name?</h2>
      <div class="flex gap-x-2 w-full">
        <input
          x-model="name"
          x-on:keydown.enter="submitted = name.trim().length > 0"
          type="text"
          placeholder="Enter your name..."
          class="input input-primary flex-1 px-3 py-2"
        />
        <button
          x-on:click="submitted = name.trim().length > 0"
          class="btn btn-primary rounded px-4 py-2"
        >
          Go
        </button>
      </div>
      <p
        x-show="submitted"
        x-text="`Hello, ${name}! 👋`"
        class="text-lg font-medium"
        style="color: hsla(var(--primary))"
      ></p>
    </div>
  );
}
