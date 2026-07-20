import { Metadata } from "next";
import { HeroSection } from "@/components/home/hero";
import { WhyArabicSection } from "@/components/home/why-arabic";
import { ExperienceArabic } from "@/components/home/experience-arabic";
import { LearningJourney } from "@/components/home/learning-journey";
import { BeautyOfRoots } from "@/components/home/beauty-of-roots";
import { QuranVerse } from "@/components/home/quran-verse";
import { CoursesHighlight } from "@/components/home/courses-highlight";
import { SuccessStats } from "@/components/home/success-stats";
import { Testimonials } from "@/components/home/testimonials";
import { MeetTeacher } from "@/components/home/meet-teacher";
import { FaqPreview } from "@/components/home/faq-preview";
import { CtaSection } from "@/components/home/cta-section";
import { StickyMobileCta } from "@/components/home/sticky-mobile-cta";
import { SectionDivider } from "@/components/shared/decorative";

export const metadata: Metadata = {
  title: "Arabic Hub | Premium Online Arabic Learning Platform",
  description:
    "Learn Arabic with Confidence. Master the Language of the Quran with live online classes designed for beginners and learners of all ages.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider fill="#E0F2F1" />
      <WhyArabicSection />
      <ExperienceArabic />
      <LearningJourney />
      <BeautyOfRoots />
      <QuranVerse />
      <CoursesHighlight />
      <SuccessStats />
      <Testimonials />
      <MeetTeacher />
      <FaqPreview />
      <CtaSection />
      <StickyMobileCta />
    </>
  );
}
