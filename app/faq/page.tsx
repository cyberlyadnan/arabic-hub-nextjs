import { Metadata } from "next";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { PageHero } from "@/components/shared/page-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Arabic Hub",
  description: "Find answers to common questions about our Arabic courses, timings, and learning process.",
};

const faqs = [
  {
    question: "Do I need any prior knowledge of Arabic to join?",
    answer: "No, our Basic Arabic Reading & Writing course is designed for absolute beginners. We start from the alphabet and guide you step-by-step."
  },
  {
    question: "How are the classes conducted?",
    answer: "All our classes are conducted live online via Google Meet. They are fully interactive, allowing you to ask questions and practice speaking in real-time."
  },
  {
    question: "What if I miss a class?",
    answer: "Don't worry! All live sessions are recorded and made available to students. You can review the recordings at your convenience to catch up."
  },
  {
    question: "How many students are in a batch?",
    answer: "We keep our batches small (typically 5-10 students) to ensure personalized attention and ample speaking time for everyone."
  },
  {
    question: "Do you provide study materials?",
    answer: "Yes, comprehensive study materials, worksheets, and resources are provided in digital format as part of the course."
  },
  {
    question: "Can I switch batches if my schedule changes?",
    answer: "Yes, subject to availability, you can request a transfer to a different batch (morning, evening, or weekend) that better suits your schedule."
  }
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Find answers to common questions about our Arabic courses, timings, and learning process."
        eyebrow="Help Center"
        icon="help"
        arabicText="سؤال"
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <Section background="sky" className="pt-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedContainer delay={0.2} direction="up">
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50 py-2">
                  <AccordionTrigger className="text-left text-lg font-bold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedContainer>
          
          <AnimatedContainer delay={0.4} direction="up">
            <div className="mt-16 text-center bg-card border border-border/50 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help! Reach out to us via WhatsApp or Email.
              </p>
              <Button size="lg" className="rounded-full bg-primary hover:bg-secondary" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </AnimatedContainer>
        </div>
      </Section>
    </>
  );
}
