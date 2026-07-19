import { AnimatedContainer } from "@/components/shared/animated-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-4">
      <AnimatedContainer className="text-center">
        <h1 className="font-heading text-8xl md:text-9xl font-bold text-primary/20 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button className="rounded-full px-8" asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </AnimatedContainer>
    </div>
  );
}
