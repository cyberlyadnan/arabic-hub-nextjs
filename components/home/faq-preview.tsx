import { HelpCircle } from "lucide-react";
import Link from "next/link";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { BackgroundBlobs } from "@/components/shared/decorative";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Do I need any prior knowledge of Arabic to join?",
    answer:
      "No — our Basic Arabic Reading & Writing course is designed for absolute beginners. We start from the alphabet and guide you step-by-step.",
  },
  {
    question: "How are the classes conducted?",
    answer:
      "All classes are live online via Google Meet. They are fully interactive, so you can ask questions and practice speaking in real time.",
  },
  {
    question: "What if I miss a class?",
    answer:
      "All live sessions are recorded and shared with students. You can review recordings anytime to catch up.",
  },
  {
    question: "How many students are in a batch?",
    answer:
      "We keep batches small — typically 5–10 students — so everyone gets personalized attention and speaking time.",
  },
];

export function FaqPreview() {
  return (
    <Section background="sky" id="faq">
      <BackgroundBlobs />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <AnimatedContainer>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <HelpCircle className="h-7 w-7 text-primary" />
            </div>
            <h2 className="mb-4 font-heading text-4xl font-bold text-foreground md:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Quick answers about our courses, schedule, and learning experience.
            </p>
            <Button variant="outline" className="rounded-full border-primary/20 text-primary" asChild>
              <Link href="/faq">View all FAQs</Link>
            </Button>
          </AnimatedContainer>
        </div>

        <div className="lg:col-span-3">
          <AnimatedContainer delay={0.15}>
            <div className="rounded-[2rem] border border-border/50 bg-card p-2 premium-shadow md:p-4">
              <Accordion className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-border/50 px-4 py-1"
                  >
                    <AccordionTrigger className="py-5 text-left text-base font-bold hover:text-primary hover:no-underline md:text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </Section>
  );
}
