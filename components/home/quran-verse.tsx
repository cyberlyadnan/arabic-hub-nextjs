import { BookOpen } from "lucide-react";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Section } from "@/components/shared/section";
import { BackgroundBlobs, GeometricPattern } from "@/components/shared/decorative";

export function QuranVerse() {
  return (
    <Section background="primary" className="py-24 relative overflow-hidden">
      <BackgroundBlobs variant="primary" />
      <div className="pointer-events-none absolute inset-0 text-white">
        <GeometricPattern opacity={0.06} patternId="quran-geom" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <AnimatedContainer>
          <BookOpen className="mx-auto mb-6 h-12 w-12 text-gold/60" />
          <h2
            className="mb-8 font-arabic text-4xl font-medium leading-normal text-primary-foreground drop-shadow-sm md:text-5xl lg:text-7xl"
            dir="rtl"
          >
            وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl font-medium italic text-primary-foreground/90 md:text-2xl">
            &ldquo;And We have certainly made the Qur&apos;an easy for remembrance, so is there any who will remember?&rdquo;
          </p>
          <div className="inline-block rounded-full border border-gold/30 bg-black/10 px-6 py-2 backdrop-blur-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-gold">
              — Surah Al-Qamar (54:17)
            </p>
          </div>
        </AnimatedContainer>
      </div>
    </Section>
  );
}
