"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { BackgroundBlobs } from "@/components/shared/decorative";
import { Button } from "@/components/ui/button";

const timeline = [
  { year: "2014", event: "Began teaching Arabic to non-native speakers" },
  { year: "2017", event: "Earned Ijazah in Tajweed & Qira'at" },
  { year: "2020", event: "Launched structured online live programs" },
  { year: "2024", event: "Guided 1,000+ students to reading fluency" },
];

const quals = [
  { icon: GraduationCap, label: "BA in Arabic Literature" },
  { icon: Award, label: "10+ Years Teaching" },
  { icon: BookOpen, label: "Ijazah in Tajweed" },
  { icon: Users, label: "1,000+ Students Taught" },
];

export function MeetTeacher() {
  return (
    <Section background="gold" id="teacher">
      <BackgroundBlobs variant="gold" />
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <AnimatedContainer>
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Mentorship
          </span>
          <h2 className="mt-4 mb-6 font-heading text-4xl font-bold text-foreground md:text-5xl">
            Meet Your Teacher
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn from a passionate instructor dedicated to your success.
          </p>
        </AnimatedContainer>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <AnimatedContainer direction="right">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-gold/20 blur-xl" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-border/50 bg-gradient-to-br from-primary/10 via-muted to-gold/10 shadow-2xl md:aspect-[4/5]">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-4xl font-bold text-white shadow-xl">
                  UA
                </div>
                <p className="font-heading text-2xl font-bold text-foreground">Ustadh Ahmed</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold">
                  Lead Arabic Instructor
                </p>
              </div>
              <motion.div
                className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/40 bg-card/80 p-4 backdrop-blur-md"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-center text-sm font-medium text-foreground">
                  &ldquo;Every student can master Arabic with the right guide.&rdquo;
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedContainer>

        <div>
          <AnimatedContainer direction="left" delay={0.15}>
            <h3 className="mb-2 font-heading text-3xl font-bold md:text-4xl">Ustadh Ahmed</h3>
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-gold">
              Lead Arabic Instructor
            </p>
            <div className="mb-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 10 years of experience teaching Arabic to non-native speakers, Ustadh
                Ahmed brings deep knowledge and a genuine passion for the language of the Quran.
              </p>
              <p>
                He holds a Bachelor&apos;s degree in Arabic Language and Literature, with specialized
                training in online teaching methodologies. His approach makes complex grammar simple
                and conversation practice genuinely enjoyable.
              </p>
            </div>

            <div className="mb-10 grid grid-cols-2 gap-3">
              {quals.map((q) => (
                <div
                  key={q.label}
                  className="flex items-center gap-3 rounded-2xl border border-border/50 bg-card p-3 premium-shadow"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <q.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-bold text-foreground">{q.label}</p>
                </div>
              ))}
            </div>

            <div className="mb-8 space-y-4 border-l-2 border-primary/30 pl-5">
              {timeline.map((item) => (
                <div key={item.year} className="relative">
                  <span className="text-xs font-bold text-gold">{item.year}</span>
                  <p className="text-sm text-muted-foreground">{item.event}</p>
                </div>
              ))}
            </div>

            <Button className="rounded-full bg-primary hover:bg-secondary" asChild>
              <Link href="/teacher">Learn more about your teacher</Link>
            </Button>
          </AnimatedContainer>
        </div>
      </div>
    </Section>
  );
}
