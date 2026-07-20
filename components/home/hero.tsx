"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  BookOpen,
  CheckCircle,
  GraduationCap,
  Play,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { GOOGLE_FORM_URL } from "@/lib/constants";
import { GeometricPattern } from "@/components/shared/decorative";

const FLOATING_LETTERS = [
  { char: "ا", x: "4%", y: "15%", delay: 0, size: "text-4xl md:text-6xl" },
  { char: "ب", x: "92%", y: "20%", delay: 0.5, size: "text-3xl md:text-5xl" },
  { char: "ت", x: "6%", y: "75%", delay: 1, size: "text-3xl md:text-4xl" },
  { char: "ق", x: "94%", y: "70%", delay: 0.8, size: "text-4xl md:text-5xl" },
];

const TYPING_WORDS = ["Confidence", "Clarity", "Purpose", "Joy"];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const parallaxX = useTransform(springX, [0, 1], [-16, 16]);
  const parallaxY = useTransform(springY, [0, 1], [-12, 12]);

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_WORDS[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1600);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[94vh] items-center overflow-hidden pb-20 pt-nav md:min-h-[92vh]"
    >
      <Image
        src="/images/hero-bg.png"
        alt="Islamic Geometric Background"
        fill
        priority
        className="pointer-events-none -z-20 object-cover object-center"
      />

      {/* Rich layered overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#E8F5F3]/95 via-background/88 to-[#F5F0E6]/90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-primary/[0.06]" />
      <div className="pointer-events-none absolute inset-0 -z-10 text-primary">
        <GeometricPattern opacity={0.05} patternId="hero-geom" />
      </div>

      <div className="pointer-events-none absolute -top-32 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px] animate-pulse-soft" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[450px] w-[450px] rounded-full bg-gold/20 blur-[110px]" />
      <div className="pointer-events-none absolute top-1/3 right-1/3 -z-10 h-[280px] w-[280px] rounded-full bg-secondary/10 blur-[90px]" />

      <div className="pointer-events-none absolute -right-10 top-16 -z-10 select-none font-arabic text-[200px] leading-none text-primary opacity-[0.05] -rotate-12 md:text-[320px] lg:text-[380px]">
        اقرأ
      </div>

      {FLOATING_LETTERS.map((letter, i) => (
        <motion.span
          key={i}
          className={`pointer-events-none absolute z-0 select-none font-arabic text-primary/25 ${letter.size}`}
          style={{ left: letter.x, top: letter.y, x: parallaxX, y: parallaxY }}
          animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: letter.delay }}
          dir="rtl"
        >
          {letter.char}
        </motion.span>
      ))}

      <div className="container relative z-10 mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-gold" />
              Premium Online Arabic Learning
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-5xl xl:text-6xl"
            >
              Learn Arabic with{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text italic text-transparent">
                {displayText}
                <span className="ml-0.5 inline-block h-[0.85em] w-[3px] animate-pulse bg-primary align-middle" />
              </span>
              <br />
              <span className="text-foreground">Master the Language of the </span>
              <span className="text-gold">Quran</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Live online classes for beginners, kids, and adults — structured, interactive,
              and taught by expert instructors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
            >
              <Button
                size="lg"
                className="h-14 w-full rounded-full bg-primary px-8 text-lg text-primary-foreground shadow-xl shadow-primary/35 transition-all hover:scale-105 hover:bg-secondary sm:w-auto"
                asChild
              >
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 w-full rounded-full border-primary/25 bg-white/60 px-8 text-lg text-primary backdrop-blur-sm transition-all hover:scale-105 hover:bg-white sm:w-auto"
                asChild
              >
                <Link href="/timings">View Timings</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              {["Beginner Friendly", "Kids & Adults", "Certificate"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-primary/15 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-foreground/80 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-muted-foreground lg:justify-start"
            >
              {[
                { icon: CheckCircle, text: "Live Classes" },
                { icon: Users, text: "Small Batches" },
                { icon: GraduationCap, text: "Expert Teachers" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-gold" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — visual stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mx-auto hidden w-full max-w-md lg:block lg:max-w-none"
          >
            <div className="relative mx-auto aspect-square max-w-[420px]">
              {/* Glow ring */}
              <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-gold/15 to-secondary/20 blur-2xl" />

              {/* Main card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-2xl backdrop-blur-xl premium-shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/10" />
                <div className="relative">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-2.5 w-2.5 rounded-full bg-green-500" />
                      <span className="text-xs font-semibold text-muted-foreground">Live Now</span>
                    </div>
                    <span className="rounded-full bg-gold/15 px-2.5 py-1 text-xs font-bold text-gold">
                      Lesson 1
                    </span>
                  </div>

                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">
                    Arabic Alphabet
                  </p>
                  <p className="font-arabic mb-6 text-6xl text-primary" dir="rtl">
                    بَ سْمِ
                  </p>

                  <div className="mb-5 grid grid-cols-3 gap-2">
                    {["ا", "ب", "ت"].map((l, i) => (
                      <motion.div
                        key={l}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                        className="rounded-xl border border-primary/15 bg-primary/5 py-3 text-center font-arabic text-2xl text-primary"
                        dir="rtl"
                      >
                        {l}
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-muted/60 p-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                      <Play className="h-4 w-4 fill-white" />
                    </span>
                    <div>
                      <p className="text-sm font-bold">Pronunciation Practice</p>
                      <p className="text-xs text-muted-foreground">Tap to hear (demo)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                className="absolute -left-6 top-8 z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="glass premium-shadow flex items-center gap-3 rounded-2xl px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Live Class</p>
                    <p className="text-xs text-muted-foreground">Starting soon</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 top-1/4 z-10"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="glass premium-shadow rounded-2xl px-4 py-3">
                  <div className="mb-1 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm font-bold">4.9 Rating</p>
                  <p className="text-xs text-muted-foreground">250+ reviews</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-4 z-10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="glass premium-shadow flex items-center gap-3 rounded-2xl px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20">
                    <Award className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-arabic text-lg text-primary" dir="rtl">شهادة</p>
                    <p className="text-xs text-muted-foreground">Certificate included</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -right-2 z-10"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <div className="glass premium-shadow flex items-center gap-2 rounded-2xl px-4 py-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <p className="text-sm font-bold">6 Courses</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
