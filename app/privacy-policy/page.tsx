import { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy | Arabic Hub",
  description: "Privacy policy for Arabic Hub.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How we collect, use, and protect your personal data when you use Arabic Hub."
        eyebrow="Legal"
        icon="shield"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <Section background="sky" className="pt-8 pb-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/50 bg-card p-8 shadow-sm md:p-12">
          <p className="mb-6 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">1. Introduction</h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            Welcome to Arabic Hub. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">2. The Data We Collect About You</h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">3. How We Use Your Personal Data</h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>To register you as a new student.</li>
            <li>To manage our relationship with you.</li>
            <li>To improve our website, products/services, marketing or customer relationships.</li>
          </ul>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">4. Contact Us</h2>
          <p className="leading-relaxed text-muted-foreground">
            If you have any questions about this privacy policy, please contact us at info@arabichub.com.
          </p>
        </div>
      </Section>
    </>
  );
}
