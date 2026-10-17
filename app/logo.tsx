// Two rings meeting, with the shared lens filled: a plain mark for "synthesis".
// The rings meet and part on a continuous loop (see .logo-* in globals.css).
export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <svg
        viewBox="0 0 40 28"
        className="h-7 w-10 shrink-0 overflow-visible"
        aria-hidden="true"
      >
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <circle className="logo-ring-left" cx="14" cy="14" r="11" />
          <circle className="logo-ring-right" cx="26" cy="14" r="11" />
        </g>
        <path
          className="logo-lens"
          d="M20 4.78 A11 11 0 0 1 20 23.22 A11 11 0 0 1 20 4.78 Z"
          fill="currentColor"
        />
      </svg>
      <span className="text-[0.9375rem] font-semibold uppercase leading-none tracking-[0.16em] sm:text-base">
        General Synthesis
      </span>
    </span>
  );
}
