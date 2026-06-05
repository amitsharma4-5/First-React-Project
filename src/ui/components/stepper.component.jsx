/**
 * @typedef {{ steps: Array<{ title: string, description?: string }> }} StepperProps
 */

/**
 * @param {StepperProps} props
 */
export function Stepper({ steps }) {
  return (
    <div
      x-data="{ current: 0 }"
      style="width:100%;max-width:500px;"
    >
      <div style="display:flex;align-items:center;margin-bottom:24px;">
        {steps.map((step, i) => (
          <>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div
                x-bind:style={`current >= ${i} ? 'background:hsla(var(--primary));color:#fff;' : 'background:hsla(var(--muted));color:hsla(var(--muted-foreground));'`}
                style="width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;transition:background 0.2s;"
              >
                {i + 1}
              </div>
              <span style="font-size:11px;color:hsla(var(--muted-foreground));white-space:nowrap;">{step.title}</span>
            </div>
            {i < steps.length - 1 && (
              <div
                x-bind:style={`current > ${i} ? 'background:hsla(var(--primary));' : 'background:hsla(var(--muted-foreground),0.3);'`}
                style="flex:1;height:2px;margin:0 6px;margin-bottom:18px;transition:background 0.2s;"
              />
            )}
          </>
        ))}
      </div>

      {steps.map((step, i) => (
        <div x-show={`current === ${i}`} x-transition>
          {step.description && (
            <p style="color:hsla(var(--muted-foreground));font-size:14px;margin:0 0 16px;">{step.description}</p>
          )}
        </div>
      ))}

      <div style="display:flex;gap:8px;margin-top:16px;">
        <button
          x-on:click="if(current > 0) current--"
          x-bind:disabled="current === 0"
          class="btn btn-secondary-inversed rounded px-4 py-2 text-sm"
        >
          Back
        </button>
        <button
          x-on:click={`if(current < ${steps.length - 1}) current++`}
          x-bind:disabled={`current === ${steps.length - 1}`}
          class="btn btn-primary rounded px-4 py-2 text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
}
