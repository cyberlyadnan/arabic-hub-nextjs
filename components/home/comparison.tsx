import { Check, X } from "lucide-react";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { BackgroundBlobs } from "@/components/shared/decorative";

const rows = [
  { feature: "Live interactive classes", hub: true, traditional: true },
  { feature: "Small batch sizes (5–10)", hub: true, traditional: false },
  { feature: "Recorded session access", hub: true, traditional: false },
  { feature: "Flexible morning / evening / weekend", hub: true, traditional: false },
  { feature: "Digital study materials included", hub: true, traditional: false },
  { feature: "Personalized attention", hub: true, traditional: false },
  { feature: "Learn from home", hub: true, traditional: false },
  { feature: "Certificate of completion", hub: true, traditional: true },
];

export function Comparison() {
  return (
    <Section background="teal" id="comparison">
      <BackgroundBlobs />
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <AnimatedContainer>
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Why Choose Us
          </span>
          <h2 className="mt-4 mb-6 font-heading text-4xl font-bold text-foreground md:text-5xl">
            Arabic Hub vs Traditional Classes
          </h2>
          <p className="text-lg text-muted-foreground">
            Modern learning designed for busy lives — without compromising quality.
          </p>
        </AnimatedContainer>
      </div>

      <AnimatedContainer delay={0.15}>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-border/50 bg-card premium-shadow-lg">
          <div className="grid grid-cols-3 border-b border-border/50 bg-gradient-to-r from-primary/5 via-card to-muted/50 px-4 py-5 md:px-8">
            <div className="text-sm font-semibold text-muted-foreground md:text-base">Feature</div>
            <div className="text-center">
              <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground md:text-sm">
                Arabic Hub
              </span>
            </div>
            <div className="text-center text-sm font-semibold text-muted-foreground md:text-base">
              Traditional
            </div>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 items-center px-4 py-4 md:px-8 ${
                i % 2 === 0 ? "bg-transparent" : "bg-muted/30"
              }`}
            >
              <div className="pr-2 text-sm font-medium text-foreground md:text-base">
                {row.feature}
              </div>
              <div className="flex justify-center">
                {row.hub ? (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
                    <Check className="h-4 w-4 text-primary" />
                  </span>
                ) : (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                    <X className="h-4 w-4 text-muted-foreground" />
                  </span>
                )}
              </div>
              <div className="flex justify-center">
                {row.traditional ? (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                    <Check className="h-4 w-4 text-muted-foreground" />
                  </span>
                ) : (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10">
                    <X className="h-4 w-4 text-red-400" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </AnimatedContainer>
    </Section>
  );
}
