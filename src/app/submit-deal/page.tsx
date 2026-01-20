import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { DealSubmissionForm } from "@/components/deal-submission-form";

export const metadata = {
  title: "Submit a Deal",
  description: "Submit a Midwest investment property for review."
};

export default function SubmitDeal() {
  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Submit a Deal</h1>
        <p className="mt-4 text-lg text-zinc-600">
          Have a property that fits a buy-and-hold investor profile? Submit it below.
        </p>
      </div>

      <Section
        title="Deal details"
        description="We review deals that align with Midwest buy-and-hold strategies."
      >
        <DealSubmissionForm />
      </Section>
    </Container>
  );
}
