/**
 * @typedef {{ name?: string, size?: number, src?: string }} AvatarProps
 */

/**
 * @param {AvatarProps} props
 */
export function Avatar({ name = "", size = 40, src }) {
  const initials = name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        style={`width:${size}px;height:${size}px;border-radius:50%;object-fit:cover;`}
      />
    );
  }

  return (
    <div style={`width:${size}px;height:${size}px;border-radius:50%;background:hsla(var(--primary));color:hsla(var(--primary-foreground));display:flex;align-items:center;justify-content:center;font-size:${Math.round(size * 0.38)}px;font-weight:600;`}>
      {initials}
    </div>
  );
}
