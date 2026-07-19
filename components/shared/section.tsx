import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClass?: string;
  background?: "default" | "muted" | "primary";
}

export function Section({
  children,
  className,
  id,
  containerClass,
  background = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32 relative overflow-hidden",
        {
          "bg-background": background === "default",
          "bg-muted/50": background === "muted",
          "bg-primary text-primary-foreground": background === "primary",
        },
        className
      )}
    >
      <div className={cn("container mx-auto px-4 md:px-6 relative z-10", containerClass)}>
        {children}
      </div>
    </section>
  );
}
