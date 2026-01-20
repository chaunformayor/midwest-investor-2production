import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Stat } from "@/components/stat";
import { Callout } from "@/components/callout";
import { Button } from "@/components/button";

export const metadata = {
  title: "Track Record",
  description: "Operating proof and execution metrics for Midwest Investor Services."
};

export default function TrackRecord() {
  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Track record</h1>
        <p className="mt-4 text-lg text-zinc-600">
          Execution matters. Here are recent operating metrics that reflect consistent output.
        </p>
      </div>

      <Section title="Operating metrics" description="Recent performance snapshot.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Full rehabs completed" value="34" />
          <Stat label="New roofs installed" value="15" />
          <Stat label="Maintenance calls completed" value="298" />
          <Stat label="Consulting hours logged" value="248" />
        </div>

        <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
          <div className="font-semibold">Case studies (recommended next)</div>
          <p className="mt-2 text-sm text-zinc-700">
            Add 3–6 case studies with photos and numbers (purchase price, rehab budget, rent, timeline). This is the highest
            trust builder for out-of-state investors.
          </p>
        </div>
      </Section>

      <div className="mt-16">
        <Callout
          title="Want to see deals that match your criteria?"
          body="Join the Investor List and tell us your buy box."
        >
          <Button href="/contact#investor-list" variant="secondary" className="bg-white text-zinc-900 hover:bg-zinc-100">
            Join the Investor List
          </Button>
          <Button href="/contact#schedule" variant="ghost" className="text-white hover:bg-white/10">
            Schedule a call
          </Button>
        </Callout>
      </div>
    </Container>
  );
}
