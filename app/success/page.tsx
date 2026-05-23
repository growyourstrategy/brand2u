'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

const planDetails: Record<string, { name: string; emoji: string; headline: string; sub: string }> = {
  creator: {
    name: 'Creator',
    emoji: '🎨',
    headline: "You're officially a brand2u Creator!",
    sub: "Your profile is live. Brands are already searching. Go land your first deal.",
  },
  business: {
    name: 'Business',
    emoji: '🚀',
    headline: "Your brand account is live!",
    sub: "Post your first campaign and start discovering UGC creators in minutes.",
  },
}

function SuccessContent() {
  const params = useSearchParams()
  const plan = params.get('plan') ?? 'creator'
  const details = planDetails[plan] ?? planDetails.creator

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating confetti */}
      {['🎉', '⭐', '✨', '🎊', '💜', '🌟', '💰', '🎯'].map((emoji, i) => (
        <span
          key={i}
          className="absolute text-3xl animate-float opacity-40 pointer-events-none select-none"
          style={{
            top: `${[10, 20, 70, 80, 15, 65, 40, 85][i]}%`,
            left: `${[8, 85, 6, 88, 45, 50, 20, 70][i]}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${4 + (i % 3)}s`,
          }}
        >
          {emoji}
        </span>
      ))}

      <div className="relative z-10 text-center max-w-lg w-full">
        {/* Success card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
          {/* Icon */}
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-5xl mx-auto mb-6 shadow-xl shadow-violet-900/50 animate-bounce-in">
            {details.emoji}
          </div>

          {/* Headline */}
          <div className="inline-flex items-center gap-2 bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            ✓ Payment confirmed
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
            {details.headline} 🎉
          </h1>
          <p className="text-violet-200 text-lg leading-relaxed mb-8">
            {details.sub}
          </p>

          {/* 14-day trial note */}
          <div className="bg-white/10 rounded-2xl p-4 border border-white/10 mb-8 text-sm text-violet-200">
            🎁 Your <strong className="text-white">14-day free trial</strong> is active. No charge until it ends.
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/dashboard"
              className="flex-1 bg-white text-violet-700 font-bold py-3.5 px-6 rounded-2xl hover:bg-violet-50 transition-colors shadow-lg text-base"
            >
              Go to Dashboard 🚀
            </Link>
            <Link
              href={plan === 'business' ? '/discover' : '/deals'}
              className="flex-1 bg-white/10 text-white font-semibold py-3.5 px-6 rounded-2xl hover:bg-white/20 transition-colors border border-white/20 text-base"
            >
              {plan === 'business' ? 'Find Creators ✨' : 'Browse Deals 🎯'}
            </Link>
          </div>
        </div>

        <p className="text-violet-400 text-sm mt-6">
          A confirmation email is on its way. Questions?{' '}
          <a href="mailto:hello@brand2u.co" className="text-violet-300 underline underline-offset-2 hover:text-white">
            hello@brand2u.co
          </a>
        </p>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-violet-950 flex items-center justify-center"><div className="text-white text-xl">Loading...</div></div>}>
      <SuccessContent />
    </Suspense>
  )
}
