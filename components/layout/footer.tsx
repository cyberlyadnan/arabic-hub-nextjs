import Link from "next/link";
import { BookOpen, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GOOGLE_FORM_URL, WHATSAPP_URL } from "@/lib/constants";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 7.1C2 8.7 2 12 2 12s0 3.3.5 4.9c.3 1.1 1.2 2 2.3 2.3 1.7.5 7.2.5 7.2.5s5.5 0 7.2-.5c1.1-.3 2-1.2 2.3-2.3.5-1.6.5-4.9.5-4.9s0-3.3-.5-4.9c-.3-1.1-1.2-2-2.3-2.3-1.7-.5-7.2-.5-7.2-.5s-5.5 0-7.2.5c-1.1.3-2 1.2-2.3 2.3z" />
    <path d="m10 15 5-3-5-3v6z" />
  </svg>
);

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Our Courses" },
  { href: "/timings", label: "Batch Timings" },
  { href: "/why-arabic", label: "Why Arabic" },
  { href: "/teacher", label: "Meet Teacher" },
  { href: "/faq", label: "FAQs" },
];

const socials = [
  { href: "#", label: "Facebook", Icon: FacebookIcon },
  { href: "#", label: "Instagram", Icon: InstagramIcon },
  { href: "#", label: "Twitter", Icon: TwitterIcon },
  { href: "#", label: "YouTube", Icon: YoutubeIcon },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0A3D3A] text-white">
      {/* Decorative layers */}
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#C9A227]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-[#0D9488]/25 blur-[110px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[80px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40 Z M40 10 L70 40 L40 70 L10 40 Z' fill='none' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="container mx-auto px-4 py-10 md:px-6 md:py-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:flex-row md:items-center md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/20">
                <Sparkles className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
                  Ready to start learning?
                </h3>
                <p className="mt-1 text-sm text-white/65 md:text-base">
                  Join our next live batch and master Arabic with confidence.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                size="lg"
                className="rounded-full bg-gold px-7 text-[#0A3D3A] hover:bg-[#d4af37] hover:text-[#0A3D3A]"
                asChild
              >
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 pt-14 pb-8 md:px-6 md:pt-16">
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 transition-colors group-hover:bg-white/15">
                <BookOpen className="h-5 w-5 text-gold" />
              </span>
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                Arabic Hub
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/65">
              Premium online Arabic learning. Master the language of the Quran with live classes,
              expert teachers, and a structured path from alphabet to conversation.
            </p>
            <p className="font-arabic text-3xl text-gold/40" dir="rtl">
              اقرأ
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-gold/40 hover:bg-gold/15 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold">Explore</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold">Legal</h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold">Get in Touch</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition-colors hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  +91 12345 67890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@arabichub.com"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition-colors hover:bg-white/10"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  info@arabichub.com
                </a>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Online Live Classes · Global Access
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/50">
            &copy; {currentYear} Arabic Hub. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-white/50">
            Made with <span className="text-gold">♥</span> for Arabic Learners
          </p>
        </div>
      </div>
    </footer>
  );
}
