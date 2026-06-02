/**
 * @typedef {{ title?: string, children: any, onClose: () => void }} ModalProps
 */

/**
 * @param {ModalProps} props
 */
export function Modal({ title, children, onClose }) {
  return (
    <div
      onclick={onClose}
      style="position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:1000;"
    >
      <div
        onclick={(e) => e.stopPropagation()}
        style="background:hsla(var(--background));border:1px solid hsla(var(--muted-foreground),0.3);border-radius:12px;padding:24px;min-width:300px;max-width:90vw;"
      >
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          {title && <h2 style="margin:0;font-size:18px;">{title}</h2>}
          <button
            onclick={onClose}
            style="background:none;border:none;font-size:20px;cursor:pointer;color:hsla(var(--muted-foreground));margin-left:auto;"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
