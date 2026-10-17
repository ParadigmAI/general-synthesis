// Two overlapping rings: a plain mark for "synthesis", drawn in currentColor.
export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <svg
        viewBox="0 0 40 28"
        className="h-7 w-10 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="11" />
        <circle cx="26" cy="14" r="11" />
      </svg>
      <span className="text-[0.9375rem] font-semibold uppercase leading-none tracking-[0.16em] sm:text-base">
        General Synthesis
      </span>
    </span>
  );
}
