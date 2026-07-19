import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClass?: string;
  background?:
    | "default"
    | "muted"
    | "primary"
    | "gradient"
    | "warm"
    | "teal"
    | "gold"
    | "sage"
    | "sand"
    | "sky";
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
        "py-20 md:py-28 lg:py-32 relative overflow-hidden",
        {
          "bg-background": background === "default",
          "bg-[#EEF2F6]": background === "muted",
          "bg-primary text-primary-foreground": background === "primary",
          "bg-gradient-to-b from-[#E8F5F3] via-[#F0F7F6] to-[#EAF0F4]":
            background === "gradient",
          "bg-gradient-to-br from-[#F5F0E6] via-[#F8F4EC] to-[#E8F0EE]":
            background === "warm",
          "bg-gradient-to-br from-[#E0F2F1] via-[#E8F5F3] to-[#D5EBE8]":
            background === "teal",
          "bg-gradient-to-br from-[#F7F1DF] via-[#F9F4E8] to-[#F0EBD8]":
            background === "gold",
          "bg-gradient-to-br from-[#E8EFEA] via-[#EDF2EE] to-[#E2EBE5]":
            background === "sage",
          "bg-gradient-to-br from-[#F3EDE4] via-[#F6F1E9] to-[#EDE6DA]":
            background === "sand",
          "bg-gradient-to-br from-[#E6EEF5] via-[#EBF1F7] to-[#E0E9F2]":
            background === "sky",
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
