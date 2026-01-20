# Midwest Investor Services (Next.js)

## Quick start
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run start
```

## Formspree
1. Create a Formspree form.
2. Copy the **Form ID** (looks like `abcdwxyz`).
3. Create `.env.local` in the project root:
```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=YOUR_FORM_ID
NEXT_PUBLIC_FORMSPREE_DEAL_FORM_ID=YOUR_DEAL_FORM_ID
```

## Calendly
Replace the iframe `src` in `src/app/contact/page.tsx` with your Calendly event link.

## Deploy (Vercel recommended)
- Push this repo to GitHub
- Import in Vercel
- Set env var `NEXT_PUBLIC_FORMSPREE_FORM_ID`
- Add your domain `midwestinvestorservices.com`


## Included Formspree endpoints (already wired)
- Investor List: https://formspree.io/f/maqqyknq
- Deal Submissions: https://formspree.io/f/xeeekayk

You can still override these via Vercel env vars if desired:
- NEXT_PUBLIC_FORMSPREE_FORM_ID (or NEXT_PUBLIC_FORMSPREE_INVESTOR_ENDPOINT)
- NEXT_PUBLIC_FORMSPREE_DEAL_FORM_ID (or NEXT_PUBLIC_FORMSPREE_DEAL_ENDPOINT)
