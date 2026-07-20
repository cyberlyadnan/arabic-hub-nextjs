import { Metadata } from "next";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { PageHero } from "@/components/shared/page-hero";
import { BookOpen, Star, Globe2, Briefcase, GraduationCap, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Learn Arabic? | Arabic Hub",
  description: "Discover the spiritual, personal, and professional benefits of learning the Arabic language.",
};

const benefits = [
  {
    title: "Understanding the Quran",
    desc: "Experience the profound beauty of the Quran in its original language. Connect deeply with the words of Allah without relying on translations, which often lose nuances and linguistic miracles.",
    icon: BookOpen,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "Access Islamic Texts",
    desc: "Unlock centuries of rich Islamic literature, from Hadith and Tafseer to classical poetry and history. Gain direct access to the thoughts of great scholars.",
    icon: Star,
    color: "text-gold",
    bg: "bg-gold/10"
  },
  {
    title: "Global Communication",
    desc: "Arabic is spoken by over 400 million people across 22 countries. It is one of the six official languages of the United Nations, opening doors to diverse cultures.",
    icon: Globe2,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Career Opportunities",
    desc: "Stand out in the global job market. There is a high demand for Arabic speakers in international business, diplomacy, journalism, and translation services.",
    icon: Briefcase,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Cognitive Benefits",
    desc: "Learning a new language, especially one with a different root system and script like Arabic, improves memory, problem-solving skills, and overall brain health.",
    icon: GraduationCap,
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  },
  {
    title: "Cultural Connection",
    desc: "Language is the gateway to culture. Understand the hospitality, traditions, and rich heritage of the Arab world in a way that is impossible from the outside.",
    icon: Heart,
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  }
];

export default function WhyArabicPage() {
  return (
    <>
      <PageHero
        title="Why Learn Arabic?"
        description="Arabic is more than just a language — it unlocks spiritual depth, historical wisdom, and global opportunities."
        eyebrow="Benefits"
        icon="globe"
        arabicText="عربي"
        breadcrumbs={[{ label: "Why Arabic" }]}
      />

      <Section background="teal" className="pt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <AnimatedContainer key={i} delay={0.1 * i} direction="up">
                <div className="bg-card p-8 rounded-3xl shadow-sm border border-border/50 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${benefit.bg}`}>
                    <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {benefit.desc}
                  </p>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </Section>
      
      <Section background="primary" className="py-24">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <AnimatedContainer>
             <h2 className="font-arabic text-4xl md:text-5xl font-medium mb-6 leading-relaxed" dir="rtl">
               إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ
             </h2>
             <p className="text-lg md:text-xl text-primary-foreground/80 font-medium max-w-2xl mx-auto mb-2">
               "Indeed, We have sent it down as an Arabic Qur'an that you might understand."
             </p>
             <p className="text-sm text-primary-foreground/60">(Surah Yusuf 12:2)</p>
          </AnimatedContainer>
        </div>
      </Section>
    </>
  );
}
