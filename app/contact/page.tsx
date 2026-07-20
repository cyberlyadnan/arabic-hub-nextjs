import { Metadata } from "next";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Arabic Hub",
  description: "Get in touch with Arabic Hub. Register for classes, ask questions, or request support.",
};

const WHATSAPP_NUMBER = "911234567890"; // Placeholder

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have a question or ready to begin your journey? We'd love to hear from you."
        eyebrow="Get in Touch"
        icon="mail"
        arabicText="تواصل"
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Section background="sand" className="pt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <AnimatedContainer direction="right">
              <h2 className="font-heading text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 12345 67890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@arabichub.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Location</h3>
                    <p className="text-muted-foreground">Online Live Classes<br />Global Access</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg" asChild>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </Button>
              </div>
            </AnimatedContainer>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            
            <AnimatedContainer direction="left" delay={0.2}>
              <h2 className="font-heading text-3xl font-bold mb-4">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we will get back to you as soon as possible.
              </p>
              
              <form action="https://formsubmit.co/info@arabichub.com" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="New Contact Form Submission from Arabic Hub" />
                <input type="hidden" name="_captcha" value="false" />
                
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
                  <input type="text" name="name" id="name" required className="w-full flex h-12 rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                  <input type="email" name="email" id="email" required className="w-full flex h-12 rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea name="message" id="message" required rows={4} className="w-full flex min-h-[120px] rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none" placeholder="How can we help you?"></textarea>
                </div>
                
                <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-secondary text-primary-foreground shadow-md">
                  Send Message
                </Button>
              </form>
            </AnimatedContainer>
          </div>
        </div>
      </Section>
    </>
  );
}
