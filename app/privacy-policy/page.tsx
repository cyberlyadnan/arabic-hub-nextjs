import { Metadata } from "next";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Privacy Policy | Arabic Hub",
  description: "Privacy policy for Arabic Hub.",
};

export default function PrivacyPolicyPage() {
  return (
    <Section className="pt-32 pb-16">
      <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        
        <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">1. Introduction</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Welcome to Arabic Hub. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">2. The Data We Collect About You</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
          <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
          <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
          <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">3. How We Use Your Personal Data</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
          <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., enrolling you in a course).</li>
          <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">4. Data Security</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
        </p>
      </div>
    </Section>
  );
}
