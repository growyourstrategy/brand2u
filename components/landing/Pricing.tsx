'use client'

import { useState } from 'react'
import Link from 'next/link'

const standardFeatures = [
  'Full creator marketplace access',
  'Filter by niche + engagement rate',
  'Up to 5 active contracts',
  'Built-in contract + escrow tools',
  'Basic analytics dashboard',
  'Standard support',
]

const proFeatures = [
  'Everything in Standard',
  'Unlimited active contracts',
  'AI creator matching by niche',
  'Advanced analytics + reporting',
  'Bulk outreach to creators',
  'Priority support + onboarding call',
]

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null)

  async function handleCheckout(plan: string) {
    setLoading(plan)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <section id="pricing" style={{ background: '#0A0A0F', padding: '6rem 2rem' }}>
      <div className="max-w-[1100px] mx-auto text-center">
        <span
          className="block text-[11px] font-semibold tracking-[0.16em] uppercase mb-4"
          style={{ color: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
        >
          Get started
        </span>
        <h2
          className="font-black leading-[1.1] mb-4 mx-auto"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            letterSpacing: '-1px',
          }}
        >
          Pick your plan.
          <br />
          <em className="not-italic" style={{ color: '#FF4D6D' }}>Start today.</em>
        </h2>
        <p
          className="text-base leading-relaxed mb-14 max-w-[540px] mx-auto"
          style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}
        >
          No long-term contract required. Cancel any time. Your first month pays for itself with one deal.
        </p>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[780px] mx-auto">
          {/* Standard */}
          <div
            className="rounded-[20px] p-9 text-left transition-all duration-200 hover:-translate-y-1"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <span
              className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-syne)' }}
            >
              Standard
            </span>
            <div className="font-bold text-[1.15rem] mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
              Brand Standard
            </div>
            <div className="font-black leading-none mb-1" style={{ fontFamily: 'var(--font-syne)', fontSize: '2.8rem' }}>
              $49
            </div>
            <div className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>per month</div>

            <ul className="mb-7 space-y-2.5">
              {standardFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <span style={{ color: '#00C9A7', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleCheckout('business')}
              disabled={loading !== null}
              className="w-full py-3.5 rounded-[10px] text-white font-bold text-sm transition-all hover:bg-white/20 disabled:opacity-60"
              style={{ background: 'rgba(255,255,255,0.08)', fontFamily: 'var(--font-syne)' }}
            >
              {loading === 'business' ? 'Redirecting…' : 'Get Started'}
            </button>
          </div>

          {/* Pro (featured) */}
          <div
            className="rounded-[20px] p-9 text-left transition-all duration-200 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, rgba(255,77,109,0.15), rgba(123,47,255,0.08))',
              border: '1px solid rgba(255,77,109,0.35)',
            }}
          >
            <span
              className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(255,77,109,0.2)', color: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
            >
              Pro
            </span>
            <div className="font-bold text-[1.15rem] mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
              Brand Pro
            </div>
            <div className="font-black leading-none mb-1" style={{ fontFamily: 'var(--font-syne)', fontSize: '2.8rem' }}>
              $99
            </div>
            <div className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>per month</div>

            <ul className="mb-7 space-y-2.5">
              {proFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <span style={{ color: '#00C9A7', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleCheckout('brand_pro')}
              disabled={loading !== null}
              className="w-full py-3.5 rounded-[10px] text-white font-bold text-sm transition-all hover:opacity-90 disabled:opacity-60"
              style={{ background: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
            >
              {loading === 'brand_pro' ? 'Redirecting…' : 'Start with Pro'}
            </button>
          </div>
        </div>

        {/* Founding Band */}
        <div
          className="flex items-center gap-6 rounded-2xl px-8 py-7 max-w-[780px] mx-auto mt-6 text-left"
          style={{
            background: 'linear-gradient(135deg, rgba(255,215,0,0.12), rgba(255,165,0,0.06))',
            border: '1px solid rgba(255,215,0,0.25)',
          }}
        >
          <span className="text-[1.8rem] flex-shrink-0" aria-hidden="true">★</span>
          <div>
            <h4
              className="font-bold text-base mb-1"
              style={{ fontFamily: 'var(--font-syne)', color: '#FFD700' }}
            >
              Founding Brand Program — 100 spots available
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              The first 100 brands to join Brand2u get Brand Standard completely free for 12 months, a &ldquo;Founding Partner&rdquo; badge, priority placement in creator searches, and locked-in pricing for life. Once they&apos;re gone, they&apos;re gone.
            </p>
          </div>
        </div>

        {/* Platform fee note */}
        <p className="mt-8 text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
          9% platform fee per completed deal · Free to start · Cancel any time
        </p>
      </div>
    </section>
  )
}
