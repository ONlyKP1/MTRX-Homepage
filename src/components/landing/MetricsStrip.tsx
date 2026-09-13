import { useEffect, useRef, useState } from 'react';

const metrics = [
  /*
    Figures that can be stood behind.

    "99.98% payment success rate" and "99.99% uptime SLA" were both here and
    neither is measured: the platform has no SLA anybody has signed and no
    success rate over enough payments to quote two decimal places of. A number
    on a payments homepage is the one a prospect repeats back in a meeting, so
    each of these is either counted or a capability rather than a performance
    claim.

    Countries and currencies come from the funding provider's own catalogue.
    Providers is how many the orchestration layer can route between, which is
    the claim this positioning actually rests on.
  */
  // Measured against the live provider catalogue on 2026-09-13: 113 fiat
  // currencies, and 22 providers considered on a single quote. Quoted low.
  { end: 100, suffix: '+', decimals: 0, label: 'Currencies Accepted' },
  { end: 20, suffix: '+', decimals: 0, label: 'Providers Routed' },
  // Not a boast about our uptime, a fact about the rails: stablecoin
  // settlement has no cut-off time, no weekend and no bank holiday.
  { end: 24, suffix: '/7', decimals: 0, label: 'Settlement Window' },
  // Structural rather than aspirational. A merchant is paid from a wallet
  // balance, and there is no card in that transaction to reverse.
  { end: 0, suffix: '%', decimals: 0, label: 'Merchant Chargebacks' },
];

function useCountUp(end: number, decimals: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState<number>(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * end);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [start, end, duration]);

  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
}

function MetricItem({ end, suffix, decimals, label, started, delay }: {
  end: number; suffix: string; decimals: number; label: string; started: boolean; delay: number;
}) {
  const [go, setGo] = useState(false);
  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setGo(true), delay);
    return () => clearTimeout(t);
  }, [started, delay]);

  const display = useCountUp(end, decimals, go);

  return (
    <div className={`hp-metrics-strip__item ${go ? 'hp-metrics-strip__item--visible' : ''}`}>
      <span className="hp-metrics-strip__num">{display}{suffix}</span>
      <span className="hp-metrics-strip__label">{label}</span>
    </div>
  );
}

export function MetricsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="hp-metrics-strip" ref={ref}>
      <div className="hp-metrics-strip__inner">
        {metrics.map((m, i) => (
          <MetricItem key={i} {...m} started={inView} delay={i * 150} />
        ))}
      </div>
    </div>
  );
}
