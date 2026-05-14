# Loratek Website — Next.js + Tailwind CSS

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Next.js — just click Deploy
4. No environment variables needed

## Routes

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/about` | About |
| `/services` | All services |
| `/industries` | Industries hub |
| `/industries/financial-services` | Financial Services |
| `/industries/oil-gas` | Oil & Gas |
| `/industries/manufacturing` | Manufacturing |
| `/industries/healthcare` | Healthcare |
| `/industries/government` | Government |
| `/industries/logistics-maritime` | Logistics & Maritime |
| `/industries/real-estate-construction` | Real Estate |
| `/blog` | Blog listing |
| `/blog/cybersecurity-nigeria` | Blog article |
| `/blog/digital-transformation` | Blog article |
| `/blog/azure-migration` | Blog article |
| `/blog/ndpr-compliance` | Blog article |
| `/blog/managed-it` | Blog article |
| `/blog/board-cybersecurity` | Blog article |
| `/contact` | Contact form |
| `/careers` | Careers |

## Adding a blog post

Edit `lib/data.ts` and add a new object to the `blogPosts` array. The route `/blog/your-slug` is created automatically.

## Adding an industry

Edit `lib/data.ts` and add to the `industries` array. The route `/industries/your-slug` is created automatically.
