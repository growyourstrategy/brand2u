'use client'

import Link from 'next/link'

const stats = [
  { num: '30', suffix: '×', label: 'Cheaper than agencies' },
  { num: '$49', suffix: '', label: 'Per month to start' },
  { num: '8K', suffix: '+', label: 'Verified creators' },
  { num: '9', suffix: '%', label: 'Platform fee per deal' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4"
      style={{ background: '#0A0A0F', paddingTop: '8rem', paddingBottom: '5rem' }}
    >
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '900px',
          background: 'radial-gradient(circle, rgba(255,77,109,0.15) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      {/* Bottom separator line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,77,109,0.4), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-6 animate-slide-up"
          style={{ color: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
        >
          ROI for brands
        </p>

        {/* Headline */}
        <h1
          className="font-black leading-[1.0] tracking-tight max-w-[820px] mb-6 animate-slide-up"
          style={{
            fontFamily: 'var(--font-syne)',
            color: '#FFFFFF',
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            letterSpacing: '-2px',
          }}
        >
          Stop paying agency<br />
          prices.{' '}
          <em className="not-italic" style={{ color: '#FF4D6D' }}>Start getting</em>
          <br />agency results.
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl leading-relaxed max-w-[560px] mb-12 animate-slide-up"
          style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}
        >
          Brand2u connects you directly with verified creators who actually move product — at a fraction of what you&apos;re spending now.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 animate-slide-up">
          <Link
            href="/dashboard?mode=brand"
            className="px-8 py-4 rounded-full text-white font-bold text-lg transition-all hover:scale-105 hover:-translate-y-0.5"
            style={{ background: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
          >
            Post a Campaign →
          </Link>
          <a
            href="#calculator"
            className="px-8 py-4 rounded-full text-white font-bold text-lg transition-all hover:scale-105"
            style={{
              border: '2px solid rgba(255,255,255,0.2)',
              background: 'transparent',
              fontFamily: 'var(--font-syne)',
            }}
          >
            Calculate My ROI
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap justify-center w-full animate-slide-up"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="px-6 sm:px-10 py-6 text-center"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}
            >
              <div
                className="font-black leading-none text-white mb-1"
                style={{ fontFamily: 'var(--font-syne)', fontSize: '2.4rem' }}
              >
                <span style={{ color: '#FF4D6D' }}>{s.num}</span>
                {s.suffix}
              </div>
              <div className="text-xs tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
