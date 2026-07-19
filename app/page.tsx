import { Metadata } from "next";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle, Clock, Globe2, Sparkles, Star, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Arabic Hub | Premium Online Arabic Learning Platform",
  description: "Learn Arabic with Confidence. Master the Language of the Quran with live online classes designed for beginners and learners of all ages.",
};

const GOOGLE_FORM_URL = "https://forms.google.com"; // Placeholder

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        
        {/* Next/Image Background */}
        <Image
          src="/images/hero-bg.png"
          alt="Islamic Geometric Background"
          fill
          priority
          className="object-cover object-center pointer-events-none -z-20"
        />
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-background/75 backdrop-blur-[2px] -z-10" />

        {/* Large Decorative Calligraphy Watermark */}
        <div className="absolute -right-20 top-20 opacity-[0.05] text-[400px] font-arabic leading-none pointer-events-none select-none text-primary transform -rotate-12 -z-10">
          اقرأ
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <AnimatedContainer delay={0.1} direction="up">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 inline-block border border-primary/20">
                Welcome to Arabic Hub
              </span>
            </AnimatedContainer>
            
            <AnimatedContainer delay={0.2} direction="up">
              <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                Learn Arabic with <span className="text-primary italic">Confidence</span>.
                <br />
                Master the Language of the Quran.
              </h1>
            </AnimatedContainer>

            <AnimatedContainer delay={0.3} direction="up">
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Join our premium live online classes designed for beginners, kids, and adults. Experience a modern, structured approach to learning Arabic.
              </p>
            </AnimatedContainer>

            <AnimatedContainer delay={0.4} direction="up" className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full bg-primary hover:bg-secondary text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:scale-105" asChild>
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full border-primary/20 hover:bg-primary/5 text-primary transition-all hover:scale-105" asChild>
                <Link href="/timings">
                  View Timings
                </Link>
              </Button>
            </AnimatedContainer>
            
            <AnimatedContainer delay={0.6} direction="up" className="mt-16 flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-gold" /> Live Classes</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-gold" /> Small Batches</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-gold" /> Expert Teachers</div>
            </AnimatedContainer>
          </div>
        </div>
        
        {/* Decorative gradient blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      </section>

      {/* Why Learn Arabic Section */}
      <Section background="muted">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedContainer>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Learn Arabic?
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the profound benefits of mastering one of the world's most historically and spiritually significant languages.
            </p>
          </AnimatedContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Understand the Quran", desc: "Connect deeply with the words of Allah without translations.", icon: BookOpen },
            { title: "Islamic Texts", desc: "Unlock classical literature, hadith, and rich Islamic history.", icon: Star },
            { title: "Global Communication", desc: "Speak with over 400 million native speakers worldwide.", icon: Globe2 },
          ].map((feature, i) => (
            <AnimatedContainer key={i} delay={0.1 * i} direction="up">
              <div className="bg-card p-8 rounded-3xl shadow-sm border border-border/50 hover:shadow-md transition-shadow group h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            </AnimatedContainer>
          ))}
        </div>
        <div className="mt-12 text-center">
          <AnimatedContainer delay={0.4}>
             <Button variant="link" className="text-primary text-lg" asChild>
               <Link href="/why-arabic">Explore all benefits &rarr;</Link>
             </Button>
          </AnimatedContainer>
        </div>
      </Section>

      {/* The Beauty of Arabic (Grammar & Meaning) */}
      <Section background="default" className="pt-24 pb-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedContainer>
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">Language of Depth</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              The Beauty of Arabic Roots
            </h2>
            <p className="text-lg text-muted-foreground">
              Arabic is built on a profound root system where every word tells a story. Discover how deep the meanings go.
            </p>
          </AnimatedContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Example 1 */}
          <AnimatedContainer direction="right">
            <div className="bg-muted/50 rounded-3xl p-8 border border-border/50 h-full relative overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Rahma</h3>
                  <p className="text-muted-foreground">Mercy / Compassion</p>
                </div>
                <div className="text-4xl font-arabic text-primary" dir="rtl">رَحْمَة</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    ر ح م
                  </div>
                  <p className="text-sm font-medium">Root: R-H-M (Womb / Connection)</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  In Arabic, the word for mercy (Rahma) shares the same root as the word for womb (Rahm). It beautifully illustrates that true mercy is unconditional, nurturing, and deeply connected—just like a mother's bond with her child.
                </p>
              </div>
            </div>
          </AnimatedContainer>

          {/* Example 2 */}
          <AnimatedContainer direction="left" delay={0.2}>
            <div className="bg-muted/50 rounded-3xl p-8 border border-border/50 h-full relative overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Sabr</h3>
                  <p className="text-muted-foreground">Patience / Perseverance</p>
                </div>
                <div className="text-4xl font-arabic text-gold" dir="rtl">صَبْر</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-sm">
                    ص ب ر
                  </div>
                  <p className="text-sm font-medium">Root: S-B-R (To Bind / Restrain)</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sabr is often translated merely as patience, but its root means to tie or bind. It signifies a beautiful resilience—binding one's soul against despair, remaining steadfast, and actively persevering through life's trials.
                </p>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Wisdom from the Quran Section */}
      <Section background="primary" className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedContainer>
             <BookOpen className="w-12 h-12 text-gold/60 mx-auto mb-6" />
             <h2 className="font-arabic text-4xl md:text-5xl lg:text-7xl text-primary-foreground font-medium mb-8 leading-normal drop-shadow-sm" dir="rtl">
               وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
             </h2>
             <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium max-w-3xl mx-auto mb-8 italic">
               "And We have certainly made the Qur'an easy for remembrance, so is there any who will remember?"
             </p>
             <div className="inline-block px-6 py-2 border border-gold/30 rounded-full bg-black/10 backdrop-blur-sm">
               <p className="text-sm font-bold text-gold uppercase tracking-widest">
                 — Surah Al-Qamar (54:17)
               </p>
             </div>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Courses Highlights Section */}
      <Section background="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedContainer>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">Our Curriculum</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Structured courses for every level.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you are starting from the alphabet or looking to perfect your grammar and conversation skills, we have a tailored program for you.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Basic Arabic Reading & Writing",
                  "Quranic Tajweed & Recitation",
                  "Classical Arabic Grammar",
                  "Conversational Arabic"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Button size="lg" className="rounded-full bg-primary hover:bg-secondary" asChild>
                <Link href="/courses">View All Courses</Link>
              </Button>
            </AnimatedContainer>
          </div>
          
          <div className="relative">
            <AnimatedContainer direction="left">
               {/* Visual placeholder for course graphic */}
               <div className="aspect-[4/5] md:aspect-square bg-muted rounded-[3rem] overflow-hidden relative border border-border/50 shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-gold/20 mix-blend-multiply" />
                  <BookOpen className="w-32 h-32 text-primary/40" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-10 right-10 bg-card p-4 rounded-2xl shadow-lg flex items-center gap-4 animate-bounce-slow">
                    <div className="bg-gold/20 p-3 rounded-full">
                      <Sparkles className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Interactive</p>
                      <p className="text-xs text-muted-foreground">Live Sessions</p>
                    </div>
                  </div>
               </div>
            </AnimatedContainer>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" className="py-24">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedContainer>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Begin your Arabic journey today.
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Join hundreds of students who are already mastering Arabic from the comfort of their homes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full bg-card hover:bg-white text-primary shadow-xl" asChild>
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/contact">
                  Contact Support
                </Link>
              </Button>
            </div>
          </AnimatedContainer>
        </div>
      </Section>
    </>
  );
}
