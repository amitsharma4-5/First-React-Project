/**
 * @typedef {{ value: number, max?: number, color?: "primary"|"success"|"danger"|"warning"|"info", showLabel?: boolean }} ProgressBarProps
 */

/**
 * @param {ProgressBarProps} props
 */
export function ProgressBar({ value, max = 100, color = "primary", showLabel = true }) {
  const percent = Math.min(Math.max((value / max) * 100, 0), 100).toFixed(0);

  const colorMap = new Map([
    ["primary", "hsla(var(--primary))"],
    ["success", "hsla(var(--success))"],
    ["danger",  "hsla(var(--danger))"],
    ["warning", "hsla(var(--warning))"],
    ["info",    "hsla(var(--info))"],
  ]);

  return (
    <div style="width:100%;">
      {showLabel && (
        <div style="display:flex;justify-content:space-between;font-size:12px;color:hsla(var(--muted-foreground));margin-bottom:4px;">
          <span>Progress</span>
          <span>{percent}%</span>
        </div>
      )}
      <div style="width:100%;height:8px;background:hsla(var(--muted));border-radius:999px;overflow:hidden;">
        <div style={`width:${percent}%;height:100%;background:${colorMap.get(color)};border-radius:999px;transition:width 0.3s ease;`} />
      </div>
    </div>
  );
}
