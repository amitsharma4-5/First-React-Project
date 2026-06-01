/**
 * @param {{ size?: number }} props
 */
export function Spinner({ size = 32 }) {
  return (
    <div style={`width:${size}px;height:${size}px;border:3px solid hsla(var(--primary-light-1));border-top:3px solid hsla(var(--primary));border-radius:50%;animation:spin 0.8s linear infinite;`} />
  );
}
