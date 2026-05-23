'use client'

import Link from 'next/link'

const floatingEmojis = [
  { emoji: '🎯', className: 'top-24 left-[8%] text-3xl animate-float', delay: '0s' },
  { emoji: '💰', className: 'top-32 right-[10%] text-4xl animate-float', delay: '1s' },
  { emoji: '✨', className: 'top-[40%] left-[4%] text-2xl animate-float', delay: '2s' },
  { emoji: '🤝', className: 'top-[55%] right-[6%] text-3xl animate-float', delay: '0.5s' },
  { emoji: '📱', className: 'bottom-40 left-[12%] text-3xl animate-float', delay: '1.5s' },
]


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #faf5ff 60%, #f3e8ff 100%)',
      }}
    >
      {/* Subtle radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(124,58,237,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Floating emoji decorations */}
      {floatingEmojis.map(({ emoji, className, delay }) => (
        <span
          key={emoji}
          className={`absolute select-none pointer-events-none hidden sm:block ${className}`}
          style={{ animationDelay: delay }}
          aria-hidden="true"
        >
          {emoji}
        </span>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-200 shadow-card text-sm font-semibold text-brand-purple animate-slide-up">
          <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
          The #1 Creator–Brand Collab Platform
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-gray-900 animate-slide-up">
          Where Creators
          <br />
          &amp; Brands{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 60%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Fall in Love
          </span>{' '}
          💜
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl leading-relaxed animate-slide-up">
          Stop cold-pitching. Start closing.{' '}
          <span className="text-gray-700 font-semibold">brand2u</span> connects UGC creators with
          brands for real deals, real money, and real results.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up">
          <Link
            href="/dashboard"
            className="group relative px-8 py-4 rounded-full text-white font-bold text-lg shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all duration-200 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
            }}
          >
            <span className="relative z-10">Get My Creator Profile</span>
            {/* Shimmer overlay */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)',
              }}
            />
          </Link>

          <Link
            href="/dashboard?mode=brand"
            className="relative px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105"
            style={{
              background:
                'linear-gradient(white, white) padding-box, linear-gradient(135deg, #7C3AED, #EC4899) border-box',
              border: '2.5px solid transparent',
              color: '#7C3AED',
            }}
          >
            Post a Campaign
          </Link>
        </div>

        {/* Beta badge */}
        <p className="text-sm text-gray-500 font-medium animate-slide-up px-4 py-2 rounded-full bg-white border border-purple-100 shadow-card">
          ✨ Now in private beta — accepting founding members
        </p>
      </div>

      {/* Bottom fade-out for scroll affordance */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(243,232,255,0.4))',
        }}
      />
    </section>
  )
}
