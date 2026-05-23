'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const titles: Record<string, { title: string; subtitle: string }> = {
  '/dashboard': { title: 'Dashboard', subtitle: 'Your creator HQ 🚀' },
  '/deals': { title: 'Deal Marketplace', subtitle: 'Your next big collab is in here 🎯' },
  '/notifications': { title: 'Notifications', subtitle: 'All the good stuff happening for you 🔔' },
  '/discover': { title: 'Discover', subtitle: 'Find brands that match your vibe ✨' },
  '/profile': { title: 'My Profile', subtitle: 'Make brands swipe right 💜' },
}

const mobileNav = [
  { href: '/dashboard', icon: '🏠' },
  { href: '/deals', icon: '💼' },
  { href: '/notifications', icon: '🔔', badge: true },
  { href: '/discover', icon: '🔍' },
  { href: '/profile', icon: '👤' },
]

export default function Header() {
  const pathname = usePathname()
  const page = titles[pathname] ?? { title: 'brand2u', subtitle: 'Creator marketplace' }

  return (
    <>
      {/* Desktop header */}
      <header className="hidden md:flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-20">
        <div>
          <h1 className="text-xl font-bold text-gray-900">{page.title}</h1>
          <p className="text-sm text-gray-500">{page.subtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2.5 border border-gray-200 w-64">
            <span className="text-gray-400 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search deals, brands..."
              className="bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none flex-1"
            />
          </div>

          {/* Notification bell */}
          <Link
            href="/notifications"
            className="relative w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <span className="text-lg">🔔</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full" />
          </Link>

          {/* Post deal button */}
          <button className="bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-violet-200">
            + New Deal
          </button>

          {/* Avatar */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold cursor-pointer">
            A
          </div>
        </div>
      </header>

      {/* Mobile header */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-white text-sm">⚡</div>
          <span className="text-lg font-black bg-gradient-to-r from-violet-700 to-pink-600 bg-clip-text text-transparent">brand2u</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/notifications" className="relative w-9 h-9 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center">
            <span>🔔</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full" />
          </Link>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">A</div>
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-30 flex items-center justify-around px-2 py-2">
        {mobileNav.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex flex-col items-center px-3 py-1.5 rounded-xl transition-colors ${isActive ? 'text-violet-700' : 'text-gray-400'}`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.badge && (
                <span className="absolute top-0.5 right-1 w-2 h-2 bg-pink-500 rounded-full" />
              )}
              {isActive && <div className="w-1 h-1 rounded-full bg-violet-600 mt-0.5" />}
            </Link>
          )
        })}
      </nav>
    </>
  )
}
