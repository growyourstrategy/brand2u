'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
      style={{
        background: 'rgba(10,10,15,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5">
        <div
          className="flex items-center justify-center w-9 h-9 rounded-[9px] text-white text-[13px] font-black"
          style={{ background: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
        >
          b2u
        </div>
        <span
          className="text-white text-[18px] font-bold tracking-tight"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          brand<span style={{ color: '#FF4D6D' }}>2</span>u
        </span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#calculator" className="text-sm text-white/60 hover:text-white transition-colors">ROI Calculator</a>
        <a href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">How It Works</a>
        <a href="#pricing" className="text-sm text-white/60 hover:text-white transition-colors">Pricing</a>
        <Link
          href="/dashboard"
          className="text-white text-[13px] font-semibold px-5 py-2 rounded-lg transition-all hover:-translate-y-px"
          style={{ background: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
        >
          Start Free →
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden p-2 text-white"
        aria-label="Toggle menu"
      >
        <div className="w-5 h-0.5 bg-white mb-1.5" />
        <div className="w-5 h-0.5 bg-white mb-1.5" />
        <div className="w-5 h-0.5 bg-white" />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-4 p-6"
          style={{ background: '#14141C', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <a href="#calculator" className="text-sm text-white/70" onClick={() => setMobileOpen(false)}>ROI Calculator</a>
          <a href="#how-it-works" className="text-sm text-white/70" onClick={() => setMobileOpen(false)}>How It Works</a>
          <a href="#pricing" className="text-sm text-white/70" onClick={() => setMobileOpen(false)}>Pricing</a>
          <Link
            href="/dashboard"
            className="text-white text-sm font-semibold px-5 py-3 rounded-lg text-center"
            style={{ background: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
            onClick={() => setMobileOpen(false)}
          >
            Start Free →
          </Link>
        </div>
      )}
    </nav>
  )
}
