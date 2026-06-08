"use client";

import { useEffect, useRef, useState } from "react";

const TARGET = 1_000_000;
const DURATION_MS = 2000;

function formatCount(n: number): string {
  if (n >= 1_000_000) return "1M+";
  if (n >= 1_000) return `${Math.floor(n / 1_000)}K+`;
  return `${n}+`;
}

export function CleanupCounterThumbnail() {
  const [count, setCount] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / DURATION_MS, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * TARGET));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasRun]);

  return (
    <div
      ref={ref}
      className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[var(--surface)] rounded-md"
    >
      <span className="font-mono text-4xl font-bold text-accent tabular-nums">
        {formatCount(count)}
      </span>
      <span className="text-xs font-medium uppercase tracking-widest text-accent-mid">
        Records Removed
      </span>
    </div>
  );
}
