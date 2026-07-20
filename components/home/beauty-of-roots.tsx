"use client";

import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { BackgroundBlobs } from "@/components/shared/decorative";

const roots = [
  {
    word: "Rahma",
    meaning: "Mercy / Compassion",
    arabic: "رَحْمَة",
    letters: ["ر", "ح", "م"],
    translit: "R-H-M",
    origin: "Womb / Connection",
    accent: "primary" as const,
    body:
      "In Arabic, the word for mercy (Rahma) shares the same root as the word for womb (Rahm). It beautifully illustrates that true mercy is unconditional, nurturing, and deeply connected—just like a mother's bond with her child.",
  },
  {
    word: "Sabr",
    meaning: "Patience / Perseverance",
    arabic: "صَبْر",
    letters: ["ص", "ب", "ر"],
    translit: "S-B-R",
    origin: "To Bind / Restrain",
    accent: "gold" as const,
    body:
      "Sabr is often translated merely as patience, but its root means to tie or bind. It signifies a beautiful resilience—binding one's soul against despair, remaining steadfast, and actively persevering through life's trials.",
  },
];

export function BeautyOfRoots() {
  return (
    <Section background="gold" className="pt-24 pb-12">
      <BackgroundBlobs variant="gold" />

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
        {roots.map((root, i) => {
          const isGold = root.accent === "gold";
          return (
            <AnimatedContainer
              key={root.word}
              direction={i === 0 ? "right" : "left"}
              delay={i * 0.15}
            >
              <div
                className={`group relative h-full overflow-hidden rounded-3xl border border-border/50 bg-card/90 p-7 backdrop-blur-sm transition-all premium-shadow hover:premium-shadow-lg md:p-8 ${
                  isGold ? "hover:border-gold/40" : "hover:border-primary/30"
                }`}
              >
                <div
                  className={`absolute -right-6 -top-6 h-32 w-32 rounded-full blur-2xl transition-colors ${
                    isGold
                      ? "bg-gold/10 group-hover:bg-gold/15"
                      : "bg-primary/10 group-hover:bg-primary/15"
                  }`}
                />

                <div className="relative mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{root.word}</h3>
                    <p className="text-muted-foreground">{root.meaning}</p>
                  </div>
                  <div
                    className={`shrink-0 font-arabic text-4xl leading-none md:text-5xl ${
                      isGold ? "text-gold" : "text-primary"
                    } transition-transform group-hover:scale-105`}
                    dir="rtl"
                    lang="ar"
                  >
                    {root.arabic}
                  </div>
                </div>

                <div className="relative space-y-5">
                  <div className="flex flex-wrap items-center gap-3 border-b border-border/50 pb-5">
                    {/* Individual root letter chips — prevents wrapping & joining issues */}
                    <div className="flex items-center gap-1.5" dir="rtl" lang="ar">
                      {root.letters.map((letter) => (
                        <span
                          key={letter}
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-arabic text-xl leading-none ${
                            isGold
                              ? "bg-gold/12 text-gold ring-1 ring-gold/20"
                              : "bg-primary/12 text-primary ring-1 ring-primary/20"
                          }`}
                        >
                          {letter}
                        </span>
                      ))}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">
                        Root: {root.translit}
                      </p>
                      <p className="text-xs text-muted-foreground">{root.origin}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {root.body}
                  </p>
                </div>
              </div>
            </AnimatedContainer>
          );
        })}
      </div>
    </Section>
  );
}
