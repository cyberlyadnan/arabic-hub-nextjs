import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";

export function BeautyOfRoots() {
  return (
    <Section background="gold" className="pt-24 pb-12">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <AnimatedContainer>
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Language of Depth
          </span>
          <h2 className="mt-4 mb-6 font-heading text-4xl font-bold text-foreground md:text-5xl">
            The Beauty of Arabic Roots
          </h2>
          <p className="text-lg text-muted-foreground">
            Arabic is built on a profound root system where every word tells a story. Discover how deep the meanings go.
          </p>
        </AnimatedContainer>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        <AnimatedContainer direction="right">
          <div className="group relative h-full overflow-hidden rounded-3xl border border-border/50 bg-card/80 p-8 backdrop-blur-sm transition-all hover:border-primary/30 premium-shadow hover:premium-shadow-lg">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-colors group-hover:bg-primary/15" />
            <div className="relative flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Rahma</h3>
                <p className="text-muted-foreground">Mercy / Compassion</p>
              </div>
              <div className="font-arabic text-4xl text-primary transition-transform group-hover:scale-110" dir="rtl">
                رَحْمَة
              </div>
            </div>
            <div className="relative space-y-4">
              <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  ر ح م
                </div>
                <p className="text-sm font-medium">Root: R-H-M (Womb / Connection)</p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                In Arabic, the word for mercy (Rahma) shares the same root as the word for womb (Rahm).
                It beautifully illustrates that true mercy is unconditional, nurturing, and deeply
                connected—just like a mother&apos;s bond with her child.
              </p>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer direction="left" delay={0.2}>
          <div className="group relative h-full overflow-hidden rounded-3xl border border-border/50 bg-card/80 p-8 backdrop-blur-sm transition-all hover:border-gold/40 premium-shadow hover:premium-shadow-lg">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition-colors group-hover:bg-gold/15" />
            <div className="relative flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Sabr</h3>
                <p className="text-muted-foreground">Patience / Perseverance</p>
              </div>
              <div className="font-arabic text-4xl text-gold transition-transform group-hover:scale-110" dir="rtl">
                صَبْر
              </div>
            </div>
            <div className="relative space-y-4">
              <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold">
                  ص ب ر
                </div>
                <p className="text-sm font-medium">Root: S-B-R (To Bind / Restrain)</p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Sabr is often translated merely as patience, but its root means to tie or bind. It
                signifies a beautiful resilience—binding one&apos;s soul against despair, remaining
                steadfast, and actively persevering through life&apos;s trials.
              </p>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </Section>
  );
}
