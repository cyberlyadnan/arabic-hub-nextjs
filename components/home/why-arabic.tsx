"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Globe2,
  Heart,
  Landmark,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { BackgroundBlobs } from "@/components/shared/decorative";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    title: "Read Quran",
    desc: "Connect deeply with the words of Allah without relying on translations.",
    icon: BookOpen,
    accent: "from-primary/15 to-primary/5",
    iconColor: "text-primary",
  },
  {
    title: "Career Growth",
    desc: "Open doors in education, diplomacy, media, and international business.",
    icon: Briefcase,
    accent: "from-gold/20 to-gold/5",
    iconColor: "text-gold",
  },
  {
    title: "Travel",
    desc: "Navigate 25+ Arabic-speaking countries with confidence and cultural respect.",
    icon: Globe2,
    accent: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
  },
  {
    title: "Culture",
    desc: "Unlock poetry, literature, and a millennium of rich intellectual heritage.",
    icon: Landmark,
    accent: "from-primary/15 to-gold/10",
    iconColor: "text-primary",
  },
  {
    title: "Communication",
    desc: "Speak with over 400 million native speakers across the world.",
    icon: MessageCircle,
    accent: "from-secondary/15 to-primary/5",
    iconColor: "text-secondary",
  },
  {
    title: "Islamic Studies",
    desc: "Access classical texts, hadith, and scholarly works in their original form.",
    icon: Heart,
    accent: "from-gold/15 to-primary/5",
    iconColor: "text-gold",
  },
];

export function WhyArabicSection() {
  return (
    <Section id="why-arabic" background="teal">
      <BackgroundBlobs />
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <AnimatedContainer>
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Why Arabic?
          </span>
          <h2 className="mt-4 mb-6 font-heading text-4xl font-bold text-foreground md:text-5xl">
            A language that transforms every part of life
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the profound benefits of mastering one of the world&apos;s most historically
            and spiritually significant languages.
          </p>
        </AnimatedContainer>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {reasons.map((feature, i) => (
          <AnimatedContainer key={feature.title} delay={0.08 * i} direction="up">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative h-full overflow-hidden rounded-3xl border border-border/50 bg-card p-8 premium-shadow transition-shadow hover:premium-shadow-lg"
            >
              <div
                className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${feature.accent} blur-2xl transition-opacity group-hover:opacity-100 opacity-70`}
              />
              <div
                className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent}`}
              >
                <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
              </div>
              <h3 className="relative text-xl font-bold mb-3">{feature.title}</h3>
              <p className="relative text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          </AnimatedContainer>
        ))}
      </div>

      <div className="mt-12 text-center">
        <AnimatedContainer delay={0.4}>
          <Button variant="link" className="text-lg text-primary" asChild>
            <Link href="/why-arabic">Explore all benefits →</Link>
          </Button>
        </AnimatedContainer>
      </div>
    </Section>
  );
}
