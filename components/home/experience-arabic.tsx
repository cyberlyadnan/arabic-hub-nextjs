"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { BackgroundBlobs, GeometricPattern } from "@/components/shared/decorative";
import { Check, Volume2, X } from "lucide-react";
import { cn } from "@/lib/utils";

const ALPHABET = [
  { arabic: "ا", name: "Alif", meaning: "A as in Apple" },
  { arabic: "ب", name: "Baa", meaning: "B as in Book" },
  { arabic: "ت", name: "Taa", meaning: "T as in Tea" },
  { arabic: "ث", name: "Thaa", meaning: "Th as in Think" },
  { arabic: "ج", name: "Jeem", meaning: "J as in Jam" },
  { arabic: "ح", name: "Haa", meaning: "Deep H sound" },
  { arabic: "خ", name: "Khaa", meaning: "Kh as in Khan" },
  { arabic: "د", name: "Dal", meaning: "D as in Door" },
];

const NUMBERS = [
  { n: 1, arabic: "١", word: "واحد", english: "Wahid" },
  { n: 2, arabic: "٢", word: "اثنان", english: "Ithnan" },
  { n: 3, arabic: "٣", word: "ثلاثة", english: "Thalatha" },
  { n: 4, arabic: "٤", word: "أربعة", english: "Arba'a" },
  { n: 5, arabic: "٥", word: "خمسة", english: "Khamsa" },
  { n: 6, arabic: "٦", word: "ستة", english: "Sitta" },
  { n: 7, arabic: "٧", word: "سبعة", english: "Sab'a" },
  { n: 8, arabic: "٨", word: "ثمانية", english: "Thamaniya" },
  { n: 9, arabic: "٩", word: "تسعة", english: "Tis'a" },
  { n: 10, arabic: "١٠", word: "عشرة", english: "Ashara" },
];

const GREETINGS = [
  { arabic: "السلام عليكم", english: "Peace be upon you", usage: "Universal greeting" },
  { arabic: "مرحبا", english: "Hello / Welcome", usage: "Casual greeting" },
  { arabic: "شكراً", english: "Thank you", usage: "Expressing gratitude" },
  { arabic: "مع السلامة", english: "Goodbye", usage: "Parting farewell" },
];

const QUIZ_OPTIONS = [
  { id: "a", text: "Hello", correct: false },
  { id: "b", text: "Peace", correct: true },
  { id: "c", text: "Good morning", correct: false },
  { id: "d", text: "Welcome", correct: false },
];

type Tab = "alphabet" | "word" | "numbers" | "quiz" | "greetings";

export function ExperienceArabic() {
  const [tab, setTab] = useState<Tab>("alphabet");
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [selectedGreeting, setSelectedGreeting] = useState<number | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [playingLetter, setPlayingLetter] = useState<number | null>(null);

  const tabs: { id: Tab; label: string }[] = [
    { id: "alphabet", label: "Alphabet" },
    { id: "word", label: "Word of Day" },
    { id: "numbers", label: "Numbers" },
    { id: "quiz", label: "Mini Quiz" },
    { id: "greetings", label: "Greetings" },
  ];

  const handlePlay = (index: number) => {
    setPlayingLetter(index);
    setSelectedLetter(index);
    setTimeout(() => setPlayingLetter(null), 800);
  };

  return (
    <Section id="experience" background="sand" className="py-24 md:py-32">
      <BackgroundBlobs variant="gold" />
      <div className="pointer-events-none absolute inset-0 text-primary">
        <GeometricPattern opacity={0.03} patternId="experience-geom" />
      </div>

      <div className="mx-auto mb-12 max-w-3xl text-center">
        <AnimatedContainer>
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Try It Yourself
          </span>
          <h2 className="mt-4 mb-6 font-heading text-4xl font-bold text-foreground md:text-5xl">
            Experience Arabic
          </h2>
          <p className="text-lg text-muted-foreground">
            Interact with the language before you enroll. Tap letters, explore words, and test yourself.
          </p>
        </AnimatedContainer>
      </div>

      {/* Tabs */}
      <AnimatedContainer delay={0.1}>
        <div className="mx-auto mb-10 flex max-w-3xl gap-2 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={cn(
                "shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                tab === t.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card/80 text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border/50"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </AnimatedContainer>

      <div className="mx-auto max-w-5xl">
        <AnimatePresence mode="wait">
          {tab === "alphabet" && (
            <motion.div
              key="alphabet"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
                {ALPHABET.map((letter, i) => (
                  <button
                    key={letter.arabic}
                    type="button"
                    onClick={() => handlePlay(i)}
                    className={cn(
                      "group relative overflow-hidden rounded-3xl border bg-card p-5 text-center transition-all duration-300 premium-shadow hover:-translate-y-1 hover:premium-shadow-lg",
                      selectedLetter === i
                        ? "border-primary/40 ring-2 ring-primary/20"
                        : "border-border/50 hover:border-primary/30"
                    )}
                  >
                    <span
                      className={cn(
                        "mb-2 block font-arabic text-5xl text-primary transition-transform duration-300 group-hover:scale-110",
                        playingLetter === i && "scale-125"
                      )}
                      dir="rtl"
                    >
                      {letter.arabic}
                    </span>
                    <p className="font-bold text-foreground">{letter.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{letter.meaning}</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      <Volume2 className={cn("h-3 w-3", playingLetter === i && "animate-pulse")} />
                      Hear
                    </div>
                  </button>
                ))}
              </div>
              {selectedLetter !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-6 rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center"
                >
                  <p className="text-sm text-muted-foreground">You selected</p>
                  <p className="mt-1 font-arabic text-4xl text-primary" dir="rtl">
                    {ALPHABET[selectedLetter].arabic}
                  </p>
                  <p className="mt-2 font-semibold">
                    {ALPHABET[selectedLetter].name} — {ALPHABET[selectedLetter].meaning}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pronunciation UI demo — audio unlocks in live classes
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}

          {tab === "word" && (
            <motion.div
              key="word"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="mx-auto max-w-xl"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-gradient-to-br from-card via-card to-primary/5 p-8 md:p-12 premium-shadow-lg">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
                <span className="inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                  Word of the Day
                </span>
                <p className="mt-6 font-arabic text-6xl text-primary md:text-7xl" dir="rtl">
                  عِلْم
                </p>
                <h3 className="mt-4 font-heading text-3xl font-bold">Ilm</h3>
                <p className="text-lg text-muted-foreground">Knowledge / Learning</p>
                <div className="mt-6 space-y-3 border-t border-border/50 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Pronunciation</span>
                    <span className="font-semibold">ʿilm</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Root</span>
                    <span className="font-semibold font-arabic" dir="rtl">ع ل م</span>
                  </div>
                  <p className="pt-2 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;Seek knowledge from the cradle to the grave.&rdquo; — A cornerstone word in Islamic culture,
                    representing lifelong learning and wisdom.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {tab === "numbers" && (
            <motion.div
              key="numbers"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                {NUMBERS.map((num, i) => (
                  <button
                    key={num.n}
                    type="button"
                    onClick={() => setSelectedNumber(i)}
                    className={cn(
                      "group rounded-2xl border bg-card p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-3xl sm:p-4",
                      selectedNumber === i
                        ? "border-primary/40 ring-2 ring-primary/20 shadow-md"
                        : "border-border/50"
                    )}
                  >
                    <span className="block font-arabic text-2xl text-primary transition-transform group-hover:scale-110 sm:text-3xl md:text-4xl" dir="rtl">
                      {num.arabic}
                    </span>
                    <span className="mt-1 block text-xs font-bold text-muted-foreground sm:text-sm">
                      {num.n}
                    </span>
                  </button>
                ))}
              </div>
              {selectedNumber !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-3xl border border-border/50 bg-card p-6 text-center premium-shadow"
                >
                  <p className="font-arabic text-4xl text-primary" dir="rtl">
                    {NUMBERS[selectedNumber].word}
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    {NUMBERS[selectedNumber].n} — {NUMBERS[selectedNumber].english}
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}

          {tab === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="mx-auto max-w-lg"
            >
              <div className="rounded-[2rem] border border-border/50 bg-card p-8 premium-shadow-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-gold">Mini Quiz</span>
                <h3 className="mt-3 mb-2 font-heading text-2xl font-bold">
                  What does{" "}
                  <span className="font-arabic text-primary" dir="rtl">
                    سلام
                  </span>{" "}
                  mean?
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">Tap an answer to reveal</p>
                <div className="grid gap-3">
                  {QUIZ_OPTIONS.map((opt) => {
                    const isSelected = quizAnswer === opt.id;
                    const showResult = quizAnswer !== null;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        disabled={showResult}
                        onClick={() => setQuizAnswer(opt.id)}
                        className={cn(
                          "flex items-center justify-between rounded-2xl border px-5 py-4 text-left font-semibold transition-all",
                          !showResult && "hover:border-primary/40 hover:bg-primary/5",
                          isSelected && opt.correct && "border-green-500/50 bg-green-500/10 text-green-700",
                          isSelected && !opt.correct && "border-red-400/50 bg-red-400/10 text-red-600",
                          showResult && opt.correct && !isSelected && "border-green-500/30 bg-green-500/5",
                          !showResult && "border-border/50"
                        )}
                      >
                        {opt.text}
                        {showResult && opt.correct && <Check className="h-5 w-5 text-green-600" />}
                        {isSelected && !opt.correct && <X className="h-5 w-5 text-red-500" />}
                      </button>
                    );
                  })}
                </div>
                <AnimatePresence>
                  {quizAnswer && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-5 text-center text-sm font-medium text-muted-foreground"
                    >
                      {QUIZ_OPTIONS.find((o) => o.id === quizAnswer)?.correct
                        ? "Correct! سلام (Salaam) means Peace. Ready for live classes?"
                        : "Not quite — سلام means Peace. You'll master this in class!"}
                    </motion.p>
                  )}
                </AnimatePresence>
                {quizAnswer && (
                  <button
                    type="button"
                    onClick={() => setQuizAnswer(null)}
                    className="mt-4 w-full text-sm font-semibold text-primary hover:underline"
                  >
                    Try again
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {tab === "greetings" && (
            <motion.div
              key="greetings"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {GREETINGS.map((g, i) => (
                <button
                  key={g.arabic}
                  type="button"
                  onClick={() => setSelectedGreeting(selectedGreeting === i ? null : i)}
                  className={cn(
                    "group rounded-3xl border bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1 premium-shadow hover:premium-shadow-lg",
                    selectedGreeting === i
                      ? "border-primary/40 ring-2 ring-primary/15"
                      : "border-border/50"
                  )}
                >
                  <p className="font-arabic text-3xl text-primary transition-transform group-hover:scale-105 md:text-4xl" dir="rtl">
                    {g.arabic}
                  </p>
                  <p className="mt-3 text-lg font-bold">{g.english}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{g.usage}</p>
                  {selectedGreeting === i && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 text-xs font-medium text-primary"
                    >
                      Practice this phrase in your first conversation class
                    </motion.p>
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
