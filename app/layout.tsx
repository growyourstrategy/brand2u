import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'brand2u — Where Creators & Brands Fall in Love',
  description: 'The marketplace connecting UGC creators with brands for authentic deals that actually convert. No cold DMs. No chasing invoices. Just deals.',
  keywords: 'brand deals, UGC creators, influencer marketing, brand partnerships, content creators',
  openGraph: {
    title: 'brand2u — Where Creators & Brands Fall in Love',
    description: 'The marketplace connecting UGC creators with brands for authentic deals.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
