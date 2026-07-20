"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SiteLogo } from "@/components/shared/site-logo";
import { usePathname } from "next/navigation";
import { GOOGLE_FORM_URL, WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Timings", href: "/timings" },
  { name: "Why Arabic", href: "/why-arabic" },
  { name: "Teacher", href: "/teacher" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 16);
  });

  const isSolid = isScrolled || !isHome;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 md:px-6 md:pt-4">
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isSolid ? "rgba(255, 255, 255, 0.92)" : "rgba(255, 255, 255, 0.08)",
          boxShadow: isSolid
            ? "0 4px 24px -4px rgba(15, 118, 110, 0.12), 0 0 0 1px rgba(15, 118, 110, 0.06)"
            : "0 0 0 1px rgba(255, 255, 255, 0.12)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 rounded-2xl px-4 backdrop-blur-xl md:h-16 md:rounded-full md:px-6",
          !isSolid && isHome && "md:px-5"
        )}
      >
        {/* Logo */}
        <SiteLogo priority height={44} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 xl:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-2 text-[13px] font-medium transition-all duration-200",
                  isActive
                    ? isSolid
                      ? "bg-primary text-white shadow-sm shadow-primary/20"
                      : "bg-white/90 text-primary shadow-sm"
                    : isSolid
                      ? "text-foreground/75 hover:bg-primary/8 hover:text-primary"
                      : "text-foreground/80 hover:bg-white/15 hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Tablet nav — key links only */}
        <nav className="hidden items-center gap-1 md:flex xl:hidden">
          {links.slice(0, 5).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-2.5 py-1.5 text-xs font-medium transition-all",
                  isActive
                    ? "bg-primary text-white"
                    : isSolid
                      ? "text-foreground/75 hover:text-primary"
                      : "text-foreground/80 hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTAs */}
        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "h-9 rounded-full px-4 text-xs font-semibold md:text-sm",
              isSolid
                ? "border-primary/20 text-primary hover:bg-primary/5"
                : "border-white/30 bg-white/10 text-foreground backdrop-blur-sm hover:bg-white/20"
            )}
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
              WhatsApp
            </a>
          </Button>
          <Button
            size="sm"
            className="h-9 rounded-full bg-primary px-4 text-xs font-semibold text-white shadow-md shadow-primary/25 hover:bg-secondary md:text-sm"
            asChild
          >
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-9 w-9 rounded-xl",
                    isSolid ? "text-foreground" : "text-foreground bg-white/10"
                  )}
                />
              }
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-[min(100vw-2rem,360px)] flex-col border-l-0 p-0 shadow-2xl"
            >
              <div className="border-b border-border/50 bg-primary/5 px-6 py-5">
                <SiteLogo size="md" height={44} />
              </div>
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/80 hover:bg-muted hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
              <div className="flex flex-col gap-2.5 border-t border-border/50 p-4">
                <Button
                  variant="outline"
                  className="h-11 w-full rounded-full border-primary/20 text-primary"
                  asChild
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  className="h-11 w-full rounded-full bg-primary text-white hover:bg-secondary"
                  asChild
                >
                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </header>
  );
}
