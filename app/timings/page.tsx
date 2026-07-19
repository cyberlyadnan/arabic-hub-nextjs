import { Metadata } from "next";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MonitorPlay, Sun, Moon, Coffee } from "lucide-react";

export const metadata: Metadata = {
  title: "Batch Timings | Arabic Hub",
  description: "Flexible online batch timings for Arabic classes. Morning, evening, and weekend batches available.",
};

const GOOGLE_FORM_URL = "https://forms.google.com"; // Placeholder

const batches = [
  {
    id: "morning",
    title: "Morning Batch",
    icon: Sun,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    schedule: "Mon - Wed - Fri",
    time: "07:00 AM - 08:30 AM (IST)",
    audience: "Ideal for early risers and professionals."
  },
  {
    id: "evening",
    title: "Evening Batch",
    icon: Moon,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    schedule: "Tue - Thu - Sat",
    time: "07:30 PM - 09:00 PM (IST)",
    audience: "Perfect for students and working professionals."
  },
  {
    id: "weekend",
    title: "Weekend Batch",
    icon: Coffee,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    schedule: "Saturday & Sunday",
    time: "10:00 AM - 12:30 PM (IST)",
    audience: "Best for those with busy weekday schedules."
  }
];

export default function TimingsPage() {
  return (
    <>
      <Section background="muted" className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedContainer>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Batch Timings
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We offer flexible timings to accommodate your busy schedule. All classes are conducted live online via Google Meet.
            </p>
          </AnimatedContainer>
        </div>
      </Section>

      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {batches.map((batch, i) => (
              <AnimatedContainer key={batch.id} delay={0.1 * i} direction="up">
                <div className="bg-card p-8 rounded-3xl shadow-sm border border-border/50 h-full flex flex-col relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20 -z-10 transition-transform group-hover:scale-110 ${batch.bg}`} />
                  
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${batch.bg}`}>
                    <batch.icon className={`w-7 h-7 ${batch.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6">{batch.title}</h3>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Days</p>
                        <p className="text-muted-foreground text-sm">{batch.schedule}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Time</p>
                        <p className="text-muted-foreground text-sm">{batch.time}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-xl mb-6">
                    <p className="text-sm text-muted-foreground text-center">{batch.audience}</p>
                  </div>
                  
                  <Button className="w-full rounded-full bg-primary hover:bg-secondary" asChild>
                    <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                      Select Batch
                    </a>
                  </Button>
                </div>
              </AnimatedContainer>
            ))}
          </div>
          
          <AnimatedContainer delay={0.4} direction="up">
            <div className="mt-16 bg-primary/5 border border-primary/20 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <MonitorPlay className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Online Live Mode</h4>
                  <p className="text-muted-foreground text-sm">Interactive sessions via Google Meet / Zoom</p>
                </div>
              </div>
              <p className="text-sm font-medium text-primary text-center sm:text-right max-w-[200px]">
                Recordings provided for missed classes.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </Section>
    </>
  );
}
