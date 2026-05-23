'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '🏠' },
  { href: '/deals', label: 'Deals', icon: '💼' },
  { href: '/notifications', label: 'Notifications', icon: '🔔', badge: 4 },
  { href: '/discover', label: 'Discover', icon: '🔍' },
  { href: '/profile', label: 'My Profile', icon: '👤' },
  { href: '/billing', label: 'Billing', icon: '💳' },
]

const bottomItems = [
  { href: '#', label: 'Settings', icon: '⚙️' },
  { href: '#', label: 'Help', icon: '💬' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-100 h-screen sticky top-0 z-30">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-white font-black text-base shadow-lg shadow-violet-200">
            ⚡
          </div>
          <span className="text-xl font-black bg-gradient-to-r from-violet-700 to-pink-600 bg-clip-text text-transparent">
            brand2u
          </span>
        </Link>
      </div>

      {/* Creator profile card */}
      <div className="mx-4 mt-4 p-3 rounded-2xl bg-gradient-to-br from-violet-50 to-pink-50 border border-violet-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-900 truncate">Alyssa M.</div>
            <div className="text-xs text-gray-500">Lifestyle Creator</div>
          </div>
          <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">Pro</div>
        </div>
        <div className="mt-2 pt-2 border-t border-violet-100 grid grid-cols-2 gap-2">
          <div className="text-center">
            <div className="text-sm font-bold text-gray-900">$4,280</div>
            <div className="text-xs text-gray-500">Earned</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-gray-900">5</div>
            <div className="text-xs text-gray-500">Active</div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 px-3 mb-2">Menu</div>
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-violet-100 to-pink-50 text-violet-700 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="text-lg leading-none">{item.icon}</span>
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {item.badge}
                </span>
              )}
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-4 border-t border-gray-100 pt-3 space-y-1">
        {bottomItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors"
          >
            <span className="text-lg leading-none">{item.icon}</span>
            {item.label}
          </Link>
        ))}
        <div className="mt-3 mx-1 p-3 rounded-xl bg-gradient-to-br from-violet-600 to-pink-500 text-white">
          <div className="text-xs font-semibold mb-1">Upgrade to Business</div>
          <div className="text-xs opacity-80 mb-2">Unlimited campaigns + creator search</div>
          <Link
            href="/billing"
            className="block w-full bg-white text-violet-700 text-xs font-bold py-1.5 rounded-lg hover:bg-violet-50 transition-colors text-center"
          >
            Upgrade $49/mo →
          </Link>
        </div>
      </div>
    </aside>
  )
}
