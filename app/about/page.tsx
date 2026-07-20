import { Metadata } from "next";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { PageHero } from "@/components/shared/page-hero";
import { Heart, Target, Lightbulb, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Arabic Hub",
  description: "Learn about the mission, vision, and teaching philosophy behind Arabic Hub.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        description="Arabic Hub was founded with a single, clear purpose: to make learning Arabic accessible, enjoyable, and deeply meaningful for everyone."
        eyebrow="About Arabic Hub"
        icon="heart"
        arabicText="قصة"
        breadcrumbs={[{ label: "About" }]}
        stats={[
          { value: "10+", label: "Years Experience" },
          { value: "1,000+", label: "Students Taught" },
          { value: "6", label: "Course Programs" },
        ]}
      />

      <Section background="sky" className="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-center">
          <AnimatedContainer direction="right">
            <div className="aspect-[4/3] bg-primary/10 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden border border-border/50">
              <Heart className="w-16 h-16 text-primary mb-6 opacity-80" />
              <h2 className="font-heading text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide high-quality, structured, and engaging Arabic education that connects students globally to the rich heritage and spiritual depth of the Arabic language.
              </p>
              
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </AnimatedContainer>
          
          <AnimatedContainer direction="left" delay={0.2}>
            <div className="aspect-[4/3] bg-gold/10 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden border border-border/50">
              <Target className="w-16 h-16 text-gold mb-6 opacity-80" />
              <h2 className="font-heading text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the world's most trusted and effective online platform for learning Arabic, known for our excellence in teaching and our commitment to student success.
              </p>
              
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            </div>
          </AnimatedContainer>
        </div>
      </Section>

      <Section background="teal">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedContainer>
            <h2 className="font-heading text-4xl font-bold mb-4">Our Teaching Philosophy</h2>
            <p className="text-lg text-muted-foreground">
              We focus on a comprehensive approach that balances grammar, vocabulary, and practical application.
            </p>
          </AnimatedContainer>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Lightbulb,
              title: "Interactive Learning",
              desc: "Active participation is key. Our live classes involve constant interaction, ensuring you're not just listening, but doing."
            },
            {
              icon: Users,
              title: "Personalized Attention",
              desc: "With small batch sizes, every student receives the individual attention needed to overcome their specific challenges."
            },
            {
              icon: Target,
              title: "Structured Progression",
              desc: "Step-by-step curriculum designed to take you from absolute beginner to confident speaker and reader."
            }
          ].map((item, i) => (
             <AnimatedContainer key={i} delay={0.1 * i} direction="up">
                <div className="bg-card p-8 rounded-3xl h-full shadow-sm border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
             </AnimatedContainer>
          ))}
        </div>
      </Section>
    </>
  );
}
