import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";

export const metadata = {
  title: "Investor Portal",
  description: "Private investor portal resources."
};

export default function PortalHome() {
  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Investor Portal</h1>
        <p className="mt-4 text-lg text-zinc-600">
          Private resources for approved investors. Keep this link confidential.
        </p>
      </div>

      <Section title="Resources" description="Download criteria and operator notes.">
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="/deal-criteria.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft hover:bg-zinc-50"
          >
            <div className="font-semibold">Deal Criteria (PDF)</div>
            <div className="mt-2 text-sm text-zinc-600">
              Quick screen for submissions and underwriting alignment.
            </div>
          </a>

          <Link
            href="/contact"
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft hover:bg-zinc-50"
          >
            <div className="font-semibold">Schedule / Contact</div>
            <div className="mt-2 text-sm text-zinc-600">
              Schedule an investor call or update your buy box.
            </div>
          </Link>
        </div>
      </Section>

      <Section title="Next steps" description="How we move quickly once criteria matches.">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>• Submit your buy box and funding profile.</li>
            <li>• We review opportunities that fit on paper first.</li>
            <li>• If viable, we request details and schedule a short execution call.</li>
          </ul>
        </div>
      </Section>
    </Container>
  );
}
