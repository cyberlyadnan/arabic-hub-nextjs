"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle, ChevronDown, GraduationCap, Sparkles, Users } from "lucide-react";
import { GOOGLE_FORM_URL } from "@/lib/constants";
import { GeometricPattern } from "@/components/shared/decorative";

const FLOATING_LETTERS = [
  { char: "ا", x: "8%", y: "18%", delay: 0, size: "text-5xl md:text-7xl" },
  { char: "ب", x: "85%", y: "22%", delay: 0.5, size: "text-4xl md:text-6xl" },
  { char: "ت", x: "12%", y: "70%", delay: 1, size: "text-4xl md:text-5xl" },
  { char: "ث", x: "88%", y: "65%", delay: 1.5, size: "text-5xl md:text-6xl" },
  { char: "ق", x: "5%", y: "45%", delay: 0.8, size: "text-3xl md:text-5xl" },
  { char: "ر", x: "92%", y: "42%", delay: 1.2, size: "text-3xl md:text-4xl" },
];

const TYPING_WORDS = ["Confidence", "Clarity", "Purpose", "Joy"];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const parallaxX = useTransform(springX, [0, 1], [-20, 20]);
  const parallaxY = useTransform(springY, [0, 1], [-15, 15]);
  const cardLeftX = useTransform(springX, [0, 1], [10, -10]);
  const cardLeftY = useTransform(springY, [0, 1], [8, -8]);
  const cardRightX = useTransform(springX, [0, 1], [-12, 12]);
  const cardRightY = useTransform(springY, [0, 1], [-6, 6]);

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
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-8 pb-16"
    >
      <Image
        src="/images/hero-bg.png"
        alt="Islamic Geometric Background"
        fill
        priority
        className="pointer-events-none -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/70 to-background/90 backdrop-blur-[2px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 text-primary">
        <GeometricPattern opacity={0.04} patternId="hero-geom" />
      </div>

      {/* Gradient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] animate-pulse-soft" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-gold/15 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-[80px]" />

      {/* Decorative calligraphy watermark */}
      <div className="pointer-events-none absolute -right-20 top-20 -z-10 select-none font-arabic text-[280px] leading-none text-primary opacity-[0.04] -rotate-12 md:text-[400px]">
        اقرأ
      </div>

      {/* Floating Arabic letters */}
      {FLOATING_LETTERS.map((letter, i) => (
        <motion.span
          key={i}
          className={`pointer-events-none absolute z-0 select-none font-arabic text-primary/20 ${letter.size}`}
          style={{ left: letter.x, top: letter.y, x: parallaxX, y: parallaxY }}
          animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: letter.delay,
          }}
          dir="rtl"
        >
          {letter.char}
        </motion.span>
      ))}

      {/* Floating learning cards — desktop */}
      <motion.div
        className="absolute left-[4%] top-[28%] z-10 hidden lg:block"
        style={{ x: cardLeftX, y: cardLeftY }}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="glass premium-shadow flex items-center gap-3 rounded-2xl px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Live Class</p>
              <p className="text-xs text-muted-foreground">Starting soon</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-[5%] top-[32%] z-10 hidden lg:block"
        style={{ x: cardRightX, y: cardRightY }}
      >
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="glass premium-shadow rounded-2xl px-4 py-3">
            <div className="mb-2 flex items-center gap-2">
              <Award className="h-4 w-4 text-gold" />
              <span className="text-xs font-semibold text-gold">Certificate</span>
            </div>
            <p className="font-arabic text-2xl text-primary" dir="rtl">مُتَمَيِّز</p>
            <p className="text-xs text-muted-foreground">Achievement unlocked</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-[18%] left-[6%] z-10 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="glass premium-shadow flex items-center gap-3 rounded-2xl px-4 py-3">
          <div className="-space-x-2 flex">
            {["A", "S", "M"].map((initial, i) => (
              <div
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-gradient-to-br from-primary to-secondary text-xs font-bold text-white"
              >
                {initial}
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">1,000+ Students</p>
            <p className="text-xs text-muted-foreground">Learning together</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[22%] right-[7%] z-10 hidden lg:block"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <div className="glass premium-shadow flex items-center gap-3 rounded-2xl px-4 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20">
            <Sparkles className="h-5 w-5 text-gold" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">4.9 ★ Rating</p>
            <p className="text-xs text-muted-foreground">From 250+ reviews</p>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            <Sparkles className="h-4 w-4 text-gold" />
            Welcome to Arabic Hub
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-6 font-heading text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl"
          >
            Learn Arabic with{" "}
            <span className="text-primary italic">
              {displayText}
              <span className="ml-0.5 inline-block h-[0.9em] w-[3px] animate-pulse bg-primary align-middle" />
            </span>
            .
            <br />
            Master the Language of the Quran.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
          >
            Join our premium live online classes designed for beginners, kids, and adults.
            Experience a modern, structured approach to learning Arabic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
          >
            <Button
              size="lg"
              className="h-14 w-full rounded-full bg-primary px-8 text-lg text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:scale-105 hover:bg-secondary sm:w-auto"
              asChild
            >
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 w-full rounded-full border-primary/20 px-8 text-lg text-primary transition-all hover:scale-105 hover:bg-primary/5 sm:w-auto"
              asChild
            >
              <Link href="/timings">View Timings</Link>
            </Button>
          </motion.div>

          {/* Course badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {["Beginner Friendly", "Kids & Adults", "Certificate Included"].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border/60 bg-card/80 px-3.5 py-1.5 text-xs font-semibold text-foreground/80 shadow-sm backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-gold" /> Live Classes
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-gold" /> Small Batches
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-gold" /> Expert Teachers
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gold" /> 1,000+ Learners
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#why-arabic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to explore"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Explore</span>
        <ChevronDown className="h-5 w-5 animate-scroll-hint" />
      </motion.a>
    </section>
  );
}
