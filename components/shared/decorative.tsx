export function GeometricPattern({
  className = "",
  opacity = 0.06,
  patternId = "islamic-geom",
}: {
  className?: string;
  opacity?: number;
  patternId?: string;
}) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ opacity }}
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M40 0 L80 40 L40 80 L0 40 Z M40 10 L70 40 L40 70 L10 40 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <circle cx="40" cy="40" r="3" fill="currentColor" />
          <path
            d="M40 20 L50 40 L40 60 L30 40 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

export function SectionDivider({
  flip = false,
  className = "",
  fill = "var(--background)",
}: {
  flip?: boolean;
  className?: string;
  fill?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block h-[40px] w-full md:h-[60px]"
      >
        <path
          d="M0,0 C150,80 350,0 600,50 C850,100 1050,20 1200,60 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function BackgroundBlobs({ variant = "default" }: { variant?: "default" | "gold" | "primary" }) {
  if (variant === "gold") {
    return (
      <>
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gold/15 blur-[100px] animate-pulse-soft" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      </>
    );
  }
  if (variant === "primary") {
    return (
      <>
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-secondary/30 blur-[120px]" />
      </>
    );
  }
  return (
    <>
      <div className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-primary/8 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-gold/10 blur-[100px] animate-pulse-soft" />
    </>
  );
}
