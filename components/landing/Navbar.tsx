'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-purple-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <span
              className="text-2xl leading-none select-none group-hover:scale-110 transition-transform duration-200"
              aria-hidden="true"
            >
              ⚡
            </span>
            <span
              className="text-2xl font-black tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 60%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              brand2u
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-gray-600 hover:text-brand-purple transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/dashboard"
              className="px-4 py-2 text-sm font-bold rounded-full border-2 border-brand-purple text-brand-purple hover:bg-purple-50 transition-colors duration-200"
            >
              For Creators
            </Link>
            <Link
              href="/dashboard?mode=brand"
              className="px-4 py-2 text-sm font-bold rounded-full text-white shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
              }}
            >
              For Brands
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl hover:bg-purple-50 transition-colors duration-200 gap-1.5"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-80 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-brand-purple hover:bg-purple-50 rounded-xl transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 px-2 pt-3 border-t border-purple-100 mt-2">
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center px-4 py-2.5 text-sm font-bold rounded-full border-2 border-brand-purple text-brand-purple hover:bg-purple-50 transition-colors duration-200"
            >
              For Creators
            </Link>
            <Link
              href="/dashboard?mode=brand"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center px-4 py-2.5 text-sm font-bold rounded-full text-white shadow-brand"
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
              }}
            >
              For Brands
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
