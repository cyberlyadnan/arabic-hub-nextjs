"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { BackgroundBlobs } from "@/components/shared/decorative";

const testimonials = [
  {
    name: "Amina Rahman",
    role: "Beginner Graduate",
    text: "I went from not knowing a single letter to reading short Surahs in 3 months. The live classes made all the difference — I never felt alone.",
    initials: "AR",
    rating: 5,
  },
  {
    name: "Yusuf Khan",
    role: "Parent of 2 students",
    text: "My kids look forward to every Arabic class. The teachers make learning fun without sacrificing structure. Highly recommend Arabic Hub!",
    initials: "YK",
    rating: 5,
  },
  {
    name: "Fatima Zahra",
    role: "Tajweed Student",
    text: "Finally, Tajweed that clicks. Clear explanations, patient instructors, and small batches so everyone gets to practice. Life-changing.",
    initials: "FZ",
    rating: 5,
  },
  {
    name: "Omar Hassan",
    role: "Working Professional",
    text: "Evening batches fit my schedule perfectly. Within weeks I was greeting colleagues in Arabic. Premium quality without the classroom stress.",
    initials: "OH",
    rating: 5,
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const current = testimonials[index];

  return (
    <Section background="sand" id="testimonials">
      <BackgroundBlobs variant="gold" />
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <AnimatedContainer>
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Testimonials
          </span>
          <h2 className="mt-4 mb-6 font-heading text-4xl font-bold text-foreground md:text-5xl">
            Loved by students worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from learners who started exactly where you are now.
          </p>
        </AnimatedContainer>
      </div>

      <div className="relative mx-auto max-w-3xl">
        <AnimatedContainer>
          <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-white/50 bg-card/60 p-8 shadow-xl backdrop-blur-xl md:p-12">
            <Quote className="absolute top-6 right-8 h-12 w-12 text-primary/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mb-8 text-lg leading-relaxed text-foreground md:text-xl">
                  &ldquo;{current.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-lg font-bold text-white shadow-md">
                    {current.initials}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{current.name}</p>
                    <p className="text-sm text-muted-foreground">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedContainer>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
