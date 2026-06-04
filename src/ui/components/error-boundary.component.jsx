/**
 * @typedef {{ children: any, fallback?: any }} ErrorBoundaryProps
 */

/**
 * @param {ErrorBoundaryProps} props
 */
export function ErrorBoundary({ children, fallback }) {
  const defaultFallback = (
    <div
      style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;text-align:center;border:1px solid hsla(var(--danger-light));background:hsla(var(--danger-light));border-radius:8px;"
    >
      <h2 style="color:hsla(var(--danger-dark));margin:0 0 8px;font-size:18px;">Something went wrong</h2>
      <p style="color:hsla(var(--danger-dark));margin:0;font-size:14px;">
        Please refresh the page or try again later.
      </p>
    </div>
  );

  return (
    <div
      x-data="{ hasError: false }"
      x-on:error.window="hasError = true"
    >
      <div x-show="!hasError">
        {children}
      </div>
      <div x-show="hasError">
        {fallback || defaultFallback}
      </div>
    </div>
  );
}