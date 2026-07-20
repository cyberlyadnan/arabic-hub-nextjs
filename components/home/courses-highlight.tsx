"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  GraduationCap,
  MessageSquare,
  ScrollText,
  Sparkles,
  Star,
  Users,
  Video,
} from "lucide-react";
import Link from "next/link";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { BackgroundBlobs, GeometricPattern } from "@/components/shared/decorative";
import { Button } from "@/components/ui/button";
import { GOOGLE_FORM_URL } from "@/lib/constants";

const curriculumItems = [
  { label: "Basic Arabic Reading & Writing", level: "Level 1" },
  { label: "Quranic Tajweed & Recitation", level: "Level 2" },
  { label: "Classical Arabic Grammar", level: "Level 3" },
  { label: "Conversational Arabic", level: "Level 4" },
];

const highlights = [
  { icon: Video, label: "Live Online", desc: "Interactive sessions" },
  { icon: Users, label: "Small Batches", desc: "5–10 students" },
  { icon: Award, label: "Certificate", desc: "On completion" },
];

const courses = [
  {
    title: "Basic Arabic Reading & Writing",
    level: "Beginner",
    duration: "3 Months",
    students: "420+",
    rating: "4.9",
    desc: "Start from scratch. Alphabet, pronunciation, and your first sentences.",
    icon: BookOpen,
    accent: "primary",
    gradient: "from-primary/15 via-primary/5 to-transparent",
    iconBg: "bg-primary/12 text-primary ring-primary/20",
    borderHover: "hover:border-primary/30",
  },
  {
    title: "Quranic Reading & Tajweed",
    level: "All Levels",
    duration: "6 Months",
    students: "680+",
    rating: "5.0",
    desc: "Read the Quran fluently with correct Tajweed and beautiful intonation.",
    icon: ScrollText,
    accent: "gold",
    gradient: "from-gold/15 via-gold/5 to-transparent",
    iconBg: "bg-gold/12 text-gold ring-gold/20",
    borderHover: "hover:border-gold/30",
  },
  {
    title: "Conversational Arabic",
    level: "Intermediate",
    duration: "4 Months",
    students: "310+",
    rating: "4.8",
    desc: "Speak with confidence for travel, community, and daily life.",
    icon: MessageSquare,
    accent: "secondary",
    gradient: "from-secondary/15 via-secondary/5 to-transparent",
    iconBg: "bg-secondary/12 text-secondary ring-secondary/20",
    borderHover: "hover:border-secondary/30",
  },
];

export function CoursesHighlight() {
  return (
    <Section background="sage" id="courses" className="relative">
      <BackgroundBlobs variant="gold" />
      <div className="pointer-events-none absolute inset-0 text-primary">
        <GeometricPattern opacity={0.03} patternId="courses-geom" />
      </div>

      {/* Section header */}
      <div className="relative mb-14 text-center md:mb-16">
        <AnimatedContainer>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-sm backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Our Curriculum
          </span>
          <h2 className="mx-auto max-w-3xl font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-[3.25rem]">
            Structured courses for{" "}
            <span className="text-primary italic">every level</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Whether you are starting from the alphabet or perfecting your grammar and conversation
            skills, we have a tailored program for you.
          </p>
        </AnimatedContainer>
      </div>

      {/* Main split layout */}
      <div className="relative mb-16 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left — curriculum path */}
        <AnimatedContainer direction="right">
          <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur-md premium-shadow md:p-8 lg:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative">
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-primary/25">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">Your Learning Path</p>
                  <p className="text-xs text-muted-foreground">Step-by-step progression</p>
                </div>
              </div>

              <div className="relative space-y-0">
                <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-primary via-gold to-secondary" />
                {curriculumItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="group relative flex gap-4 pb-6 last:pb-0"
                  >
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary to-secondary text-xs font-bold text-white shadow-md transition-transform group-hover:scale-110">
                      {i + 1}
                    </div>
                    <div className="flex-1 rounded-2xl border border-border/40 bg-background/60 px-4 py-3 transition-all group-hover:border-primary/25 group-hover:bg-white group-hover:shadow-md">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                        {item.level}
                      </span>
                      <p className="mt-0.5 text-sm font-semibold text-foreground md:text-base">
                        {item.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2 border-t border-border/50 pt-8">
                {highlights.map((h) => (
                  <div key={h.label} className="text-center">
                    <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                      <h.icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-xs font-bold text-foreground">{h.label}</p>
                    <p className="text-[10px] text-muted-foreground">{h.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="rounded-full bg-primary shadow-md shadow-primary/20 hover:bg-secondary" asChild>
                  <Link href="/courses">
                    View All Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary/20 bg-white/50 text-primary hover:bg-white"
                  asChild
                >
                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedContainer>

        {/* Right — visual showcase */}
        <AnimatedContainer direction="left" delay={0.15}>
          <div className="relative flex h-full min-h-[420px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/50 bg-gradient-to-br from-primary/10 via-white/80 to-gold/10 shadow-2xl premium-shadow-lg md:min-h-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-gold/10" />
            <GeometricPattern opacity={0.04} patternId="courses-visual-geom" className="text-primary" />

            <div className="relative z-10 flex flex-col items-center p-8 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-lg ring-1 ring-primary/10">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <p className="font-arabic mb-2 text-4xl text-primary" dir="rtl">
                تَعَلَّمْ
              </p>
              <p className="mb-1 font-heading text-2xl font-bold text-foreground">Learn. Practice. Master.</p>
              <p className="max-w-xs text-sm text-muted-foreground">
                A modern curriculum built for real progress — from your first letter to fluent conversation.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {["Alphabet", "Tajweed", "Grammar", "Speaking"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/15 bg-white/80 px-3 py-1 text-xs font-semibold text-primary shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              className="absolute right-6 top-8 z-10 rounded-2xl border border-white/60 bg-white/90 p-3.5 shadow-lg backdrop-blur-sm"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gold/15 p-2.5">
                  <Sparkles className="h-5 w-5 text-gold" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold">Interactive</p>
                  <p className="text-xs text-muted-foreground">Live Sessions</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-6 z-10 rounded-2xl border border-white/60 bg-white/90 p-3.5 shadow-lg backdrop-blur-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-2.5">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold">6 Programs</p>
                  <p className="text-xs text-muted-foreground">All age groups</p>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedContainer>
      </div>

      {/* Premium course cards */}
      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
        {courses.map((course, i) => (
          <AnimatedContainer key={course.title} delay={0.1 * i} direction="up">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/50 bg-white/90 p-7 shadow-md backdrop-blur-sm transition-all premium-shadow hover:premium-shadow-lg ${course.borderHover}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-90`} />

              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-110 ${course.iconBg}`}
                  >
                    <course.icon className="h-7 w-7" />
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-white/80 px-2 py-1 text-xs font-bold text-gold shadow-sm">
                    <Star className="h-3 w-3 fill-gold" />
                    {course.rating}
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    {course.level}
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-muted/80 px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-bold leading-snug text-foreground md:text-xl">
                  {course.title}
                </h3>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {course.desc}
                </p>

                <div className="mt-auto space-y-4">
                  <div className="flex items-center justify-between border-t border-border/40 pt-4">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                      <Users className="h-3.5 w-3.5" />
                      {course.students} enrolled
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-gold">
                      <Award className="h-3.5 w-3.5" />
                      Certificate
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-primary/20 bg-white/60 text-primary hover:bg-primary hover:text-white"
                    asChild
                  >
                    <Link href="/courses">
                      Explore Course
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatedContainer>
        ))}
      </div>
    </Section>
  );
}
