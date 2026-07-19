import Link from "next/link";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { BackgroundBlobs, GeometricPattern } from "@/components/shared/decorative";
import { Button } from "@/components/ui/button";
import { GOOGLE_FORM_URL } from "@/lib/constants";

export function CtaSection() {
  return (
    <Section background="primary" className="py-24">
      <BackgroundBlobs variant="primary" />
      <div className="pointer-events-none absolute inset-0 text-white">
        <GeometricPattern opacity={0.05} patternId="cta-geom" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <AnimatedContainer>
          <span className="mb-4 inline-block rounded-full border border-gold/30 bg-black/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold backdrop-blur-sm">
            Limited seats this batch
          </span>
          <h2 className="mb-6 font-heading text-4xl font-bold text-primary-foreground md:text-6xl">
            Begin your Arabic journey today.
          </h2>
          <p className="mb-10 text-xl text-primary-foreground/80">
            Join hundreds of students who are already mastering Arabic from the comfort of their homes.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-14 w-full rounded-full bg-card px-8 text-lg text-primary shadow-xl hover:bg-white sm:w-auto"
              asChild
            >
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 w-full rounded-full border-primary-foreground/30 px-8 text-lg text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
              asChild
            >
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </AnimatedContainer>
      </div>
    </Section>
  );
}
