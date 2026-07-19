"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  GraduationCap,
  MessageSquare,
  ScrollText,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { BackgroundBlobs } from "@/components/shared/decorative";
import { Button } from "@/components/ui/button";
import { GOOGLE_FORM_URL } from "@/lib/constants";

const courses = [
  {
    title: "Basic Arabic Reading & Writing",
    level: "Beginner",
    duration: "3 Months",
    students: "420+",
    desc: "Start from scratch. Alphabet, pronunciation, and your first sentences.",
    icon: BookOpen,
    gradient: "from-primary/20 via-primary/5 to-transparent",
    iconBg: "bg-primary/15 text-primary",
  },
  {
    title: "Quranic Reading & Tajweed",
    level: "All Levels",
    duration: "6 Months",
    students: "680+",
    desc: "Read the Quran fluently with correct Tajweed and beautiful intonation.",
    icon: ScrollText,
    gradient: "from-gold/20 via-gold/5 to-transparent",
    iconBg: "bg-gold/15 text-gold",
  },
  {
    title: "Conversational Arabic",
    level: "Intermediate",
    duration: "4 Months",
    students: "310+",
    desc: "Speak with confidence for travel, community, and daily life.",
    icon: MessageSquare,
    gradient: "from-secondary/20 via-secondary/5 to-transparent",
    iconBg: "bg-secondary/15 text-secondary",
  },
];

export function CoursesHighlight() {
  return (
    <Section background="sage" id="courses">
      <BackgroundBlobs />
      <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <AnimatedContainer>
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">
              Our Curriculum
            </span>
            <h2 className="mt-4 mb-6 font-heading text-4xl font-bold text-foreground md:text-5xl">
              Structured courses for every level.
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Whether you are starting from the alphabet or looking to perfect your grammar and
              conversation skills, we have a tailored program for you.
            </p>

            <ul className="mb-8 space-y-4">
              {[
                "Basic Arabic Reading & Writing",
                "Quranic Tajweed & Recitation",
                "Classical Arabic Grammar",
                "Conversational Arabic",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-medium text-foreground">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full bg-primary hover:bg-secondary" asChild>
                <Link href="/courses">View All Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary/20 text-primary" asChild>
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
            </div>
          </AnimatedContainer>
        </div>

        <div className="relative">
          <AnimatedContainer direction="left">
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[3rem] border border-border/50 bg-gradient-to-br from-primary/10 via-muted to-gold/10 shadow-2xl md:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-gold/20 mix-blend-multiply" />
              <BookOpen className="relative z-10 h-32 w-32 text-primary/40" />

              <motion.div
                className="absolute top-10 right-10 z-10 flex items-center gap-4 rounded-2xl bg-card p-4 shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="rounded-full bg-gold/20 p-3">
                  <Sparkles className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-bold">Interactive</p>
                  <p className="text-xs text-muted-foreground">Live Sessions</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-8 z-10 flex items-center gap-3 rounded-2xl bg-card/90 p-4 shadow-lg backdrop-blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="rounded-full bg-primary/15 p-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold">Certificate</p>
                  <p className="text-xs text-muted-foreground">On completion</p>
                </div>
              </motion.div>
            </div>
          </AnimatedContainer>
        </div>
      </div>

      {/* Premium course cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {courses.map((course, i) => (
          <AnimatedContainer key={course.title} delay={0.1 * i} direction="up">
            <motion.div
              whileHover={{ y: -8 }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/50 bg-card p-8 premium-shadow transition-shadow hover:premium-shadow-lg`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-80`} />
              <div className="relative">
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${course.iconBg} transition-transform group-hover:scale-110`}>
                  <course.icon className="h-7 w-7" />
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-secondary/10 px-2.5 py-1 text-xs font-semibold text-secondary">
                    {course.level}
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold">{course.title}</h3>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {course.desc}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <Users className="h-3.5 w-3.5" />
                    {course.students} enrolled
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-gold">
                    <Award className="h-3.5 w-3.5" />
                    Certificate
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatedContainer>
        ))}
      </div>
    </Section>
  );
}
