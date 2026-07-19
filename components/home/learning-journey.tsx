"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Ear,
  Library,
  MessageSquare,
  Mic2,
  PenLine,
} from "lucide-react";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { BackgroundBlobs } from "@/components/shared/decorative";

const weeks = [
  { week: "Week 1", title: "Arabic Alphabet", desc: "Master the 28 letters and their beautiful forms.", icon: PenLine },
  { week: "Week 2", title: "Pronunciation", desc: "Train your ear and tongue for authentic sounds.", icon: Mic2 },
  { week: "Week 3", title: "Vocabulary", desc: "Build your first 200 high-frequency words.", icon: Library },
  { week: "Week 4", title: "Reading", desc: "Read simple texts and short Quranic verses.", icon: BookOpen },
  { week: "Week 5", title: "Grammar", desc: "Unlock sentence structure with clear, modern methods.", icon: Ear },
  { week: "Week 6", title: "Conversation", desc: "Speak with confidence in everyday situations.", icon: MessageSquare },
];

export function LearningJourney() {
  return (
    <Section id="journey" background="sky">
      <BackgroundBlobs variant="gold" />
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <AnimatedContainer>
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Your Path
          </span>
          <h2 className="mt-4 mb-6 font-heading text-4xl font-bold text-foreground md:text-5xl">
            A clear 6-week learning journey
          </h2>
          <p className="text-lg text-muted-foreground">
            From your first letter to your first conversation — a structured path designed for real progress.
          </p>
        </AnimatedContainer>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Progress line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-gold to-primary/30 md:left-1/2 md:-translate-x-px" />

        <div className="space-y-8 md:space-y-12">
          {weeks.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <AnimatedContainer
                key={item.week}
                delay={0.1 * i}
                direction={isLeft ? "right" : "left"}
              >
                <div
                  className={`relative flex items-center gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="ml-12 rounded-3xl border border-border/50 bg-card p-6 premium-shadow transition-shadow hover:premium-shadow-lg md:ml-0"
                    >
                      <span className="text-xs font-bold uppercase tracking-wider text-gold">
                        {item.week}
                      </span>
                      <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center icon */}
                  <div className="absolute left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30 md:left-1/2 md:-translate-x-1/2">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div className="hidden flex-1 md:block" />
                </div>
              </AnimatedContainer>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
