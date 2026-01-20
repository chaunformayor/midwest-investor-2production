import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Container } from "@/components/container";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Investor Portal Login",
  description: "Password-gated investor portal."
};

async function loginAction(formData: FormData) {
  "use server";
  const password = String(formData.get("password") || "");
  const nextPath = String(formData.get("next") || "/portal");

  const expected = process.env.PORTAL_PASSWORD || "";
  if (!expected) redirect("/contact");

  if (password === expected) {
    const jar = cookies();
    jar.set("mis_portal", "1", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30
    });
    redirect(nextPath);
  }

  redirect("/portal/login?error=1");
}

export default function PortalLogin({
  searchParams
}: {
  searchParams: { error?: string; next?: string };
}) {
  const error = searchParams?.error === "1";
  const nextPath = searchParams?.next || "/portal";

  return (
    <Container>
      <div className="mx-auto max-w-xl py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Investor Portal</h1>
        <p className="mt-3 text-zinc-600">
          This portal is private. Access is provided to approved investors.
        </p>

        <form action={loginAction} className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft">
          <input type="hidden" name="next" value={nextPath} />
          <label className="block">
            <div className="text-sm font-semibold">Access code</div>
            <input
              name="password"
              type="password"
              required
              className="mt-2 w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
              placeholder="Enter access code"
            />
          </label>

          {error ? (
            <div className="mt-4 rounded-2xl bg-rose-50 p-3 text-sm text-rose-900">
              Incorrect access code. Try again.
            </div>
          ) : null}

          <button
            type="submit"
            className="mt-5 w-full rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Enter Portal
          </button>

          <div className="mt-4 text-xs text-zinc-500">
            Need access? Email {SITE.email}.
          </div>
        </form>
      </div>
    </Container>
  );
}
