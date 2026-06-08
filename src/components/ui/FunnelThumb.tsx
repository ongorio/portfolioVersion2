const MAX_BAR_PX = 112;

const FUNNEL_STAGES = [
  { label: "RECEIVED",  count: "1,247", pct: 1.00 },
  { label: "PARSED",    count: "1,247", pct: 1.00 },
  { label: "VALIDATED", count: "1,198", pct: 0.96 },
  { label: "SENT",      count: "1,143", pct: 0.78 },
  { label: "CONVERTED", count:   "891", pct: 0.54 },
] as const;

export function FunnelThumb() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-md bg-[var(--surface)]">
      <div className="flex flex-col gap-[5px]">
        {FUNNEL_STAGES.map((s, i) => {
          const isFirst = i === 0;
          const barOpacityPct = Math.round((0.12 + s.pct * 0.28) * 100);
          return (
            <div key={s.label} className="flex items-center gap-1.5">
              <span className="w-[58px] flex-none font-mono text-[7px] uppercase tracking-[0.1em] text-accent-mid">
                {s.label}
              </span>

              <div
                className="flex h-[14px] flex-none items-center justify-end rounded-[3px] pr-[5px]"
                style={{
                  width: `${s.pct * MAX_BAR_PX}px`,
                  background: isFirst
                    ? `color-mix(in srgb, var(--accent-mid) 20%, transparent)`
                    : `color-mix(in srgb, var(--accent) ${barOpacityPct}%, transparent)`,
                }}
              >
                <span className={`font-mono text-[7.5px] font-semibold ${isFirst ? "text-accent-mid" : "text-accent"}`}>
                  {s.count}
                </span>
              </div>

              <span
                className="w-7 flex-none font-mono text-[7px]"
                style={{
                  color: isFirst
                    ? `color-mix(in srgb, var(--accent-mid) 45%, transparent)`
                    : `color-mix(in srgb, var(--accent) 55%, transparent)`,
                }}
              >
                {Math.round(s.pct * 100)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
