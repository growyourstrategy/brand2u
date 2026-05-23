'use client'

import Link from 'next/link'

interface FloatingEmoji {
  emoji: string
  className: string
  style?: React.CSSProperties
}

const floatingEmojis: FloatingEmoji[] = [
  {
    emoji: '🎉',
    className:
      'absolute top-8 left-[7%] text-4xl animate-float opacity-80 hidden sm:block select-none pointer-events-none',
    style: { animationDelay: '0s' },
  },
  {
    emoji: '💰',
    className:
      'absolute top-16 right-[9%] text-5xl animate-float opacity-75 hidden sm:block select-none pointer-events-none',
    style: { animationDelay: '1.2s' },
  },
  {
    emoji: '✨',
    className:
      'absolute bottom-14 left-[14%] text-3xl animate-float opacity-65 hidden md:block select-none pointer-events-none',
    style: { animationDelay: '0.6s' },
  },
  {
    emoji: '🚀',
    className:
      'absolute bottom-10 right-[16%] text-4xl animate-float opacity-70 hidden md:block select-none pointer-events-none',
    style: { animationDelay: '1.8s' },
  },
  {
    emoji: '🎯',
    className:
      'absolute top-1/2 left-[3%] -translate-y-1/2 text-3xl animate-float opacity-50 hidden lg:block select-none pointer-events-none',
    style: { animationDelay: '0.9s' },
  },
]


export default function CTA() {
  return (
    <section
      className="relative py-32 overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-pink-900"
    >
      {/* Layered radial glow accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at 25% 50%, rgba(124,58,237,0.40) 0%, transparent 55%), radial-gradient(ellipse at 78% 35%, rgba(236,72,153,0.30) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(245,158,11,0.10) 0%, transparent 50%)',
        }}
      />

      {/* Noise texture */}
      <div className="noise absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Floating emoji decorations */}
      {floatingEmojis.map(({ emoji, className, style }) => (
        <span key={emoji} className={className} style={style} aria-hidden="true">
          {emoji}
        </span>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-0">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold px-5 py-2 rounded-full mb-8 border border-white/20">
          ✨ Now in private beta — accepting founding members
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
          Ready to Land Your{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #F9A8D4 0%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Next Deal?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of creators making real money with real brands.{' '}
          <span className="text-white font-semibold">
            Your next brand deal is one click away.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mb-5">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-violet-700 font-black text-base sm:text-lg shadow-brand-lg hover:shadow-pink hover:scale-105 transition-all duration-200 tracking-wide"
          >
            Create My Free Profile
          </Link>
          <Link
            href="/dashboard?mode=brand"
            className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-white/50 text-white font-black text-base sm:text-lg hover:bg-white/10 hover:border-white transition-all duration-200 tracking-wide"
          >
            I&apos;m a Brand →
          </Link>
        </div>

        {/* Fine print */}
        <p className="text-purple-300/80 text-sm font-medium">
          Free to start. No credit card required. Cancel anytime.
        </p>

      </div>
    </section>
  )
}
