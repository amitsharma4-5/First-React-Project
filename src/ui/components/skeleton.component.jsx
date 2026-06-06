/**
 * @typedef {{ width?: string, height?: string, borderRadius?: string, class?: string }} SkeletonProps
 */

/**
 * @param {SkeletonProps} props
 */
export function Skeleton({ width = "100%", height = "16px", borderRadius = "4px", class: className }) {
  return (
    <div
      class={className}
      style={`width:${width};height:${height};border-radius:${borderRadius};background:linear-gradient(90deg,hsla(var(--muted)) 25%,hsla(var(--muted-foreground),0.15) 50%,hsla(var(--muted)) 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;`}
    />
  );
}
