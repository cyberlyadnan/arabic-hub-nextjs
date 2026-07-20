import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  /** Logo height in pixels */
  height?: number;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
  /**
   * `default` — logo.png for light backgrounds (navbar)
   * `light` — logo-light.png for dark backgrounds (footer)
   */
  variant?: "default" | "light";
}

const sizeMap = {
  sm: 36,
  md: 44,
  lg: 56,
};

export function SiteLogo({
  className,
  size = "md",
  height,
  priority = false,
  variant = "default",
}: SiteLogoProps) {
  const h = height ?? sizeMap[size];
  const w = Math.round(h * 3.8);
  const src = variant === "light" ? "/logo-light.png" : "/logo.png";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center overflow-hidden rounded-md transition-opacity hover:opacity-90",
        className
      )}
      aria-label="Arabic Hub — Home"
    >
      <Image
        src={src}
        alt="Arabic Hub"
        width={w}
        height={h}
        className="object-contain object-left"
        style={{ height: h, width: "auto" }}
        priority={priority}
      />
    </Link>
  );
}
