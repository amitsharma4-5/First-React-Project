export function NotFound() {
  return (
    <div
      class="flex flex-col items-center justify-center gap-y-4"
      style="min-height:60vh;"
    >
      <h1 style="font-size:80px;margin:0;color:hsla(var(--primary));line-height:1;">404</h1>
      <p style="font-size:18px;color:hsla(var(--muted-foreground));margin:0;">
        Oops! Page not found.
      </p>
      <a
        href="/"
        class="btn btn-primary rounded px-6 py-2"
        style="margin-top:8px;"
      >
        ← Back to Home
      </a>
    </div>
  );
}
