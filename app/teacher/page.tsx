import { Metadata } from "next";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { PageHero } from "@/components/shared/page-hero";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Meet Your Teacher | Arabic Hub",
  description: "Learn about the qualifications and experience of our expert Arabic instructors.",
};

export default function TeacherPage() {
  return (
    <>
      <PageHero
        title="Meet Your Teacher"
        description="Learn from passionate and qualified instructors dedicated to your success."
        eyebrow="Mentorship"
        icon="graduation"
        arabicText="معلم"
        breadcrumbs={[{ label: "Teacher" }]}
        stats={[
          { value: "10+", label: "Years Exp." },
          { value: "1,000+", label: "Students" },
          { value: "Ijazah", label: "Tajweed" },
        ]}
      />

      <Section background="teal" className="pt-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <AnimatedContainer direction="right" className="w-full md:w-1/2">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative bg-muted border border-border/50 flex items-center justify-center">
                {/* Placeholder for teacher portrait */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-gold/10" />
                <div className="text-center p-6">
                  <Users className="w-20 h-20 text-primary/30 mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">Professional Portrait Placeholder</p>
                </div>
              </div>
            </AnimatedContainer>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <AnimatedContainer direction="left" delay={0.2}>
                <h2 className="font-heading text-4xl font-bold mb-2">Ustadh Ahmed</h2>
                <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-6">Lead Arabic Instructor</p>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                  <p>
                    With over 10 years of experience in teaching Arabic to non-native speakers, Ustadh Ahmed brings a wealth of knowledge and a deep passion for the language.
                  </p>
                  <p>
                    He holds a Bachelor's degree in Arabic Language and Literature, and has specialized training in teaching methodologies for online environments. His approach makes complex grammar rules simple and conversational practice engaging.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">BA in Arabic</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">10+ Years Exp.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Ijazah in Tajweed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">1000+ Students</p>
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
