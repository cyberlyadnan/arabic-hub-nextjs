"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  ChevronRight,
  Clock,
  FileText,
  Globe2,
  GraduationCap,
  Heart,
  HelpCircle,
  Home,
  Mail,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { GeometricPattern } from "@/components/shared/decorative";

type IconName =
  | "heart"
  | "book"
  | "help"
  | "graduation"
  | "clock"
  | "globe"
  | "mail"
  | "shield"
  | "file"
  | "home";

const iconMap: Record<IconName, LucideIcon> = {
  heart: Heart,
  book: BookOpen,
  help: HelpCircle,
  graduation: GraduationCap,
  clock: Clock,
  globe: Globe2,
  mail: Mail,
  shield: Shield,
  file: FileText,
  home: Home,
};

interface PageHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
  icon?: IconName;
  arabicText?: string;
  breadcrumbs?: { label: string; href?: string }[];
  stats?: { value: string; label: string }[];
}

export function PageHero({
  title,
  description,
  eyebrow,
  icon,
  arabicText,
  breadcrumbs,
  stats,
}: PageHeroProps) {
  const Icon = icon ? iconMap[icon] : null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F766E] via-[#0D6B64] to-[#0A524D] pb-12 pt-nav md:pb-16">
      <div className="pointer-events-none absolute inset-0 text-white">
        <GeometricPattern opacity={0.05} patternId="page-hero-main" />
      </div>
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-white/5 blur-[100px]" />

      {arabicText && (
        <div
          className="pointer-events-none absolute right-4 top-[55%] hidden -translate-y-1/2 select-none font-arabic text-[80px] leading-none text-white/[0.05] md:right-6 md:text-[100px] lg:block lg:text-[130px]"
          dir="rtl"
        >
          {arabicText}
        </div>
      )}

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-white/50 sm:text-sm"
          >
            <Link href="/" className="transition-colors hover:text-white/90">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3 shrink-0 opacity-40 sm:h-3.5 sm:w-3.5" />
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-white/90">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {(eyebrow || Icon) && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm sm:mb-5 sm:px-4">
                {Icon && <Icon className="h-3.5 w-3.5 text-gold" />}
                {eyebrow && (
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 sm:text-xs">
                    {eyebrow}
                  </span>
                )}
              </div>
            )}

            <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {title}
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base md:text-lg">
              {description}
            </p>

            {stats && stats.length > 0 && (
              <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/10 px-2 py-2 backdrop-blur-sm sm:px-4 sm:py-2.5"
                  >
                    <p className="font-heading text-base font-bold text-gold sm:text-xl">
                      {stat.value}
                    </p>
                    <p className="text-[10px] font-medium leading-tight text-white/55 sm:text-[11px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
    </section>
  );
}
