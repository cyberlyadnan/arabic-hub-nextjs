import { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Terms and Conditions | Arabic Hub",
  description: "Terms and conditions for Arabic Hub.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms and Conditions"
        description="Please read these terms carefully before using Arabic Hub services."
        eyebrow="Legal"
        icon="file"
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      <Section background="teal" className="pt-8 pb-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/50 bg-card p-8 shadow-sm md:p-12">
          <p className="mb-6 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            By accessing or using the Arabic Hub website and our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access the service.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">2. Course Registration & Fees</h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            Registration for courses is subject to availability. We reserve the right to refuse service to anyone for any reason at any time. Course fees must be paid in full prior to the start of the batch unless otherwise agreed upon in writing.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">3. Intellectual Property</h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Arabic Hub and its licensors. Course materials provided are for your personal use only and may not be distributed or reproduced without explicit permission.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">4. Code of Conduct</h2>
          <p className="leading-relaxed text-muted-foreground">
            During live classes, students are expected to behave respectfully towards the instructor and fellow classmates. We reserve the right to remove any student from a course without refund if their behavior is deemed disruptive or inappropriate.
          </p>
        </div>
      </Section>
    </>
  );
}
