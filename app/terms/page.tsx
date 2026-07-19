import { Metadata } from "next";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Terms and Conditions | Arabic Hub",
  description: "Terms and conditions for Arabic Hub.",
};

export default function TermsPage() {
  return (
    <Section className="pt-32 pb-16">
      <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-foreground">Terms and Conditions</h1>
        
        <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">1. Acceptance of Terms</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          By accessing or using the Arabic Hub website and our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access the service.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">2. Course Registration & Fees</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Registration for courses is subject to availability. We reserve the right to refuse service to anyone for any reason at any time. Course fees must be paid in full prior to the start of the batch unless otherwise agreed upon in writing.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">3. Intellectual Property</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Arabic Hub and its licensors. Course materials provided are for your personal use only and may not be distributed or reproduced without explicit permission.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">4. Code of Conduct</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          During live classes, students are expected to behave respectfully towards the instructor and fellow classmates. We reserve the right to remove any student from a course without refund if their behavior is deemed disruptive or inappropriate.
        </p>
      </div>
    </Section>
  );
}
