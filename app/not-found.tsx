import Link from "next/link";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page Not Found"
        description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        eyebrow="404 Error"
        icon="home"
        arabicText="؟"
        breadcrumbs={[{ label: "404" }]}
      />
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/30 px-4 py-16">
        <AnimatedContainer className="text-center">
          <p className="font-heading mb-2 text-8xl font-bold text-primary/20 md:text-9xl">404</p>
          <Button className="rounded-full px-8" asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </AnimatedContainer>
      </div>
    </>
  );
}
