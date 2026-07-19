"use client";

import { AnimatedContainer } from "@/components/shared/animated-container";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Section } from "@/components/shared/section";
import { GeometricPattern } from "@/components/shared/decorative";
import { Award, GraduationCap, Star, Users } from "lucide-react";

const stats = [
  { value: 1000, suffix: "+", label: "Students", icon: Users },
  { value: 4.9, suffix: "★", label: "Rating", decimals: 1, icon: Star },
  { value: 25, suffix: "+", label: "Batches", icon: GraduationCap },
  { value: 98, suffix: "%", label: "Completion", icon: Award },
];

export function SuccessStats() {
  return (
    <Section background="primary" className="py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 text-white">
        <GeometricPattern opacity={0.05} patternId="stats-geom" />
      </div>
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-gold/20 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/30 blur-[100px]" />

      <div className="mx-auto mb-12 max-w-2xl text-center">
        <AnimatedContainer>
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            Student Success at a Glance
          </h2>
          <p className="mt-3 text-primary-foreground/75">
            Real results from learners around the world
          </p>
        </AnimatedContainer>
      </div>

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
        {stats.map((stat, i) => (
          <AnimatedContainer key={stat.label} delay={0.1 * i}>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-md md:p-8">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20">
                <stat.icon className="h-6 w-6 text-gold" />
              </div>
              <p className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </p>
              <p className="mt-2 text-sm font-medium text-primary-foreground/70">{stat.label}</p>
            </div>
          </AnimatedContainer>
        ))}
      </div>
    </Section>
  );
}
