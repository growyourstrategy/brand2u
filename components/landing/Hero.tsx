'use client'

import Link from 'next/link'

const floatingEmojis = [
  { emoji: '🎯', className: 'top-24 left-[8%] text-3xl animate-float', delay: '0s' },
  { emoji: '💰', className: 'top-32 right-[10%] text-4xl animate-float', delay: '1s' },
  { emoji: '✨', className: 'top-[40%] left-[4%] text-2xl animate-float', delay: '2s' },
  { emoji: '🤝', className: 'top-[55%] right-[6%] text-3xl animate-float', delay: '0.5s' },
  { emoji: '📱', className: 'bottom-40 left-[12%] text-3xl animate-float', delay: '1.5s' },
]

const stats = [
  { icon: '⚡', label: '$2.4M+ paid to creators' },
  { icon: '🎯', label: '18,000+ deals closed' },
  { icon: '⭐', label: '4.9/5 avg rating' },
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

        {/* Social proof text */}
        <p className="text-sm text-gray-500 font-medium animate-slide-up">
          Join{' '}
          <span className="text-brand-purple font-bold">12,000+ creators</span> and{' '}
          <span className="text-brand-pink font-bold">1,500+ brands</span> already closing deals
        </p>

        {/* Stat pills */}
        <div className="flex flex-wrap justify-center gap-3 animate-slide-up">
          {stats.map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 shadow-card text-sm font-semibold text-gray-700 hover:shadow-card-hover hover:border-purple-200 transition-all duration-200"
            >
              <span aria-hidden="true">{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Deal notification card */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8 flex justify-center animate-slide-up">
        <div
          className="inline-flex items-center gap-4 px-5 py-4 rounded-2xl shadow-card-hover border border-white/60"
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Avatar placeholder */}
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-xl shrink-0 shadow-brand"
            style={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
            }}
          >
            🎉
          </div>

          <div className="text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-0.5">
              WE GOT A DEAL!
            </p>
            <p className="text-sm font-semibold text-gray-800 leading-snug">
              Alyssa just landed a{' '}
              <span className="text-brand-purple font-black">$2,400</span> collab with{' '}
              <span className="text-brand-pink font-bold">LUSH Cosmetics</span>
            </p>
          </div>

          {/* Live pulse indicator */}
          <div className="flex items-center gap-1.5 shrink-0 ml-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-green-600">Live</span>
          </div>
        </div>
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
