import { Metadata } from "next";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, LayoutList, MessageSquare, Mic, ScrollText } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Courses | Arabic Hub",
  description: "Explore our structured online Arabic courses for beginners, kids, and advanced learners.",
};

const courses = [
  {
    id: "basic",
    title: "Basic Arabic Reading & Writing",
    level: "Beginner",
    duration: "3 Months",
    mode: "Live Online",
    desc: "Start from scratch. Learn the Arabic alphabet, correct pronunciation, and basic vocabulary to form simple sentences.",
    icon: LayoutList,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    id: "quran",
    title: "Quranic Reading & Tajweed",
    level: "All Levels",
    duration: "6 Months",
    mode: "Live Online",
    desc: "Master the rules of Tajweed. Learn to read the Quran fluently with correct pronunciation and intonation.",
    icon: BookOpen,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    id: "grammar",
    title: "Classical Arabic Grammar",
    level: "Intermediate",
    duration: "6 Months",
    mode: "Live Online",
    desc: "Dive deep into Nahw and Sarf. Understand sentence structure and morphology to comprehend classical texts.",
    icon: ScrollText,
    color: "text-gold",
    bg: "bg-gold/10"
  },
  {
    id: "conversation",
    title: "Conversational Arabic",
    level: "Intermediate",
    duration: "4 Months",
    mode: "Live Online",
    desc: "Focus on speaking and listening. Practical Arabic for travel, business, and daily communication.",
    icon: MessageSquare,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    id: "kids",
    title: "Arabic for Kids",
    level: "Beginner (Ages 5-12)",
    duration: "Ongoing",
    mode: "Live Online",
    desc: "Fun, interactive sessions designed specifically for children using games, stories, and engaging visual aids.",
    icon: GraduationCap,
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  },
  {
    id: "custom",
    title: "1-on-1 Personalized",
    level: "Any Level",
    duration: "Flexible",
    mode: "Live Online",
    desc: "Tailored curriculum based on your specific goals. Flexible timing and personalized pace.",
    icon: Mic,
    color: "text-primary",
    bg: "bg-primary/10"
  }
];

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Our Courses"
        description="Carefully structured programs designed to take you from absolute beginner to confident speaker and reader."
        eyebrow="Curriculum"
        icon="book"
        arabicText="دورات"
        breadcrumbs={[{ label: "Courses" }]}
        stats={[
          { value: "6", label: "Programs" },
          { value: "Live", label: "Online Mode" },
          { value: "All", label: "Age Groups" },
        ]}
      />

      <Section background="sand" className="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, i) => (
            <AnimatedContainer key={course.id} delay={0.1 * i} direction="up">
              <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-lg transition-all h-full flex flex-col group">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${course.bg}`}>
                  <course.icon className={`w-7 h-7 ${course.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary/10 text-secondary">
                    {course.level}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                    {course.duration}
                  </span>
                </div>
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {course.desc}
                </p>
                <Button className="w-full rounded-full" variant="outline" asChild>
                  <Link href="/timings">Check Timings</Link>
                </Button>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </Section>
    </>
  );
}
