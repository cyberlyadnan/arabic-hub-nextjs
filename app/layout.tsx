import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Noto_Naskh_Arabic } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-naskh",
});

export const metadata: Metadata = {
  title: "Arabic Hub - Premium Online Arabic Learning Platform",
  description: "Learn Arabic with Confidence. Master the Language of the Quran with live online classes.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} ${notoNaskh.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
        <Navbar />
        <main className="flex flex-1 flex-col pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
