export function Footer() {
  return (
    <footer
      style="border-top:1px solid hsla(var(--muted-foreground),0.2);padding:16px;text-align:center;font-size:13px;color:hsla(var(--muted-foreground))"
    >
      Built with ⚡ Vite + JSXPine — {new Date().getFullYear()}
    </footer>
  );
}
