# Velora — Clothing E-Commerce Store

A premium storefront for a modern clothing brand built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Premium homepage with curated hero, category blocks, featured products, and best sellers
- Search, category filter, and sorting on the shop page
- Product detail pages with size, color, and quantity selection
- Cart, wishlist, and local persistence behavior
- Checkout flow that creates demo orders via API routes
- Order tracking page with order lookup and status timeline
- Admin dashboard for basic product creation
- API routes for products, orders, cart, wishlist, and authentication

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Local in-memory demo data store

## Run locally

```bash
npm install
npm run dev -- --hostname 0.0.0.0
```

Then open:

- http://localhost:3000

## Build

```bash
npm run build
```

## Notes

This version is a fully working storefront demo built around an in-memory store so it runs immediately without external services. It demonstrates the full customer journey and core commerce flow, while intentionally leaving a production database and payment system as a follow-up implementation for a real deployment.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
