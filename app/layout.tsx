import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'brand2u — Stop Paying Agency Prices. Start Getting Agency Results.',
  description: 'The marketplace connecting brands directly with verified UGC creators. Full creator marketplace from $49/month. No agency retainers.',
  keywords: 'brand deals, UGC creators, influencer marketing, brand partnerships, content creators',
  openGraph: {
    title: 'brand2u — ROI for Brands',
    description: 'Connect directly with verified creators who move product — at a fraction of agency cost.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
