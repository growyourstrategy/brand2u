'use client'

import { useState } from 'react'

const screens = [
  {
    id: 'dashboard',
    label: 'Creator Dashboard',
    emoji: '📊',
    description: 'Track your earnings, active deals, and performance all in one beautiful view.',
  },
  {
    id: 'deals',
    label: 'Deal Marketplace',
    emoji: '🎯',
    description: 'Browse hundreds of brand campaigns matched to your niche and audience.',
  },
  {
    id: 'notifications',
    label: 'Deal Alerts',
    emoji: '🔔',
    description: 'Get instant notifications when you land a deal or a brand wants to work with you.',
  },
]

function DashboardMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 w-full max-w-2xl mx-auto">
      {/* Top bar */}
      <div className="bg-[#0F0F1A] px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="flex-1 mx-4">
          <div className="bg-white/10 rounded-md px-3 py-1 text-xs text-gray-400 text-center">
            app.brand2u.co/dashboard
          </div>
        </div>
      </div>

      {/* App content */}
      <div className="flex h-72">
        {/* Sidebar mini */}
        <div className="w-14 bg-gray-50 border-r border-gray-100 flex flex-col items-center py-4 gap-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-white text-xs font-bold">b</div>
          {['🏠','💼','🔔','👤','🔍'].map((icon, i) => (
            <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${i === 0 ? 'bg-violet-100 text-violet-700' : 'text-gray-400 hover:bg-gray-200'}`}>
              {icon}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 bg-gray-50 overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-xs font-semibold text-gray-800">Good morning, Alyssa ✨</div>
              <div className="text-xs text-gray-500">You have 3 new deal alerts</div>
            </div>
            <div className="relative">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-white text-xs">A</div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-pink-500 rounded-full border border-white" />
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { label: 'Earnings', value: '$4,280', color: 'from-violet-500 to-purple-600', icon: '💰' },
              { label: 'Active Deals', value: '5', color: 'from-pink-500 to-rose-500', icon: '🤝' },
              { label: 'Avg Rating', value: '—', color: 'from-amber-400 to-orange-500', icon: '⭐' },
            ].map((stat) => (
              <div key={stat.label} className={`rounded-xl bg-gradient-to-br ${stat.color} p-2 text-white`}>
                <div className="text-sm">{stat.icon}</div>
                <div className="text-sm font-bold">{stat.value}</div>
                <div className="text-xs opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Deal cards */}
          <div className="text-xs font-semibold text-gray-600 mb-2">Active Deals</div>
          <div className="space-y-2">
            {[
              { brand: 'Beauty Brand Co.', type: 'UGC Video', value: '$2,400', status: 'In Progress', color: 'bg-violet-100 text-violet-700' },
              { brand: 'Fitness Apparel Co.', type: 'Reels x3', value: '$1,800', status: 'Review', color: 'bg-amber-100 text-amber-700' },
            ].map((deal) => (
              <div key={deal.brand} className="bg-white rounded-xl p-2.5 flex items-center gap-2 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-100 to-pink-100 flex items-center justify-center text-sm">🏷️</div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-gray-800 truncate">{deal.brand}</div>
                  <div className="text-xs text-gray-500">{deal.type}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-gray-800">{deal.value}</div>
                  <div className={`text-xs px-2 py-0.5 rounded-full font-medium ${deal.color}`}>{deal.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DealsMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 w-full max-w-2xl mx-auto">
      <div className="bg-[#0F0F1A] px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="flex-1 mx-4">
          <div className="bg-white/10 rounded-md px-3 py-1 text-xs text-gray-400 text-center">
            app.brand2u.co/deals
          </div>
        </div>
      </div>
      <div className="flex h-72">
        <div className="w-14 bg-gray-50 border-r border-gray-100 flex flex-col items-center py-4 gap-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-white text-xs font-bold">b</div>
          {['🏠','💼','🔔','👤','🔍'].map((icon, i) => (
            <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${i === 1 ? 'bg-violet-100 text-violet-700' : 'text-gray-400'}`}>
              {icon}
            </div>
          ))}
        </div>
        <div className="flex-1 p-4 bg-gray-50">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-1 bg-white rounded-xl px-3 py-1.5 text-xs text-gray-400 border border-gray-200 flex items-center gap-2">
              🔍 Search deals by brand, niche, budget...
            </div>
            <div className="bg-gradient-to-r from-violet-600 to-pink-500 text-white text-xs rounded-xl px-3 py-1.5 font-medium">Filter</div>
          </div>
          <div className="flex gap-2 mb-3 text-xs">
            {['All', 'Beauty', 'Fitness', 'Tech', 'Food'].map((tag, i) => (
              <span key={tag} className={`px-2.5 py-1 rounded-full font-medium ${i === 0 ? 'bg-violet-600 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}>{tag}</span>
            ))}
          </div>
          <div className="space-y-2">
            {[
              { brand: 'Fashion Brand Co.', budget: '$3,500', type: 'Fashion haul + Reel', match: '98%', niche: '👗 Fashion', hot: true },
              { brand: 'Beauty Brand Co.', budget: '$2,000', type: 'Product review video', match: '94%', niche: '💄 Beauty', hot: false },
              { brand: 'Fitness Apparel Co.', budget: '$1,800', type: '3x Instagram Reels', match: '91%', niche: '💪 Fitness', hot: false },
            ].map((deal) => (
              <div key={deal.brand} className="bg-white rounded-xl p-2.5 flex items-center gap-2 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-100 to-pink-100 flex items-center justify-center text-sm">{deal.niche.split(' ')[0]}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-semibold text-gray-800">{deal.brand}</span>
                    {deal.hot && <span className="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full font-medium">🔥 Hot</span>}
                  </div>
                  <div className="text-xs text-gray-500">{deal.type}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-gray-800">{deal.budget}</div>
                  <div className="text-xs text-emerald-600 font-medium">{deal.match} match</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function NotificationsMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 w-full max-w-2xl mx-auto">
      <div className="bg-[#0F0F1A] px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="flex-1 mx-4">
          <div className="bg-white/10 rounded-md px-3 py-1 text-xs text-gray-400 text-center">
            app.brand2u.co/notifications
          </div>
        </div>
      </div>
      <div className="flex h-72">
        <div className="w-14 bg-gray-50 border-r border-gray-100 flex flex-col items-center py-4 gap-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-white text-xs font-bold">b</div>
          {['🏠','💼','🔔','👤','🔍'].map((icon, i) => (
            <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${i === 2 ? 'bg-violet-100 text-violet-700' : 'text-gray-400'}`}>
              {icon}
            </div>
          ))}
        </div>
        <div className="flex-1 p-4 bg-gray-50">
          <div className="text-xs font-bold text-gray-800 mb-3 flex items-center gap-2">
            🔔 Notifications <span className="bg-pink-500 text-white text-xs rounded-full px-2 py-0.5">4 new</span>
          </div>
          <div className="space-y-2">
            {[
              { emoji: '🎉', title: 'WE GOT A DEAL!', body: 'Beauty Brand Co. just accepted your pitch. $2,400 incoming! 💰', time: '2m ago', type: 'deal', bg: 'bg-gradient-to-r from-violet-50 to-pink-50 border-violet-200' },
              { emoji: '💬', title: 'New message from a brand', body: 'Hey! We love your content. Can we hop on a quick call?', time: '18m ago', type: 'msg', bg: 'bg-white border-gray-200' },
              { emoji: '🎯', title: '3 new deals match your profile', body: 'Beauty, fashion, and wellness brands are looking for creators like you.', time: '1h ago', type: 'match', bg: 'bg-white border-gray-200' },
              { emoji: '💸', title: 'Payment received!', body: 'Wellness Brand Co. sent you $850. Way to keep growing! 🚀', time: '3h ago', type: 'pay', bg: 'bg-white border-gray-200' },
            ].map((n) => (
              <div key={n.title} className={`rounded-xl p-2.5 flex gap-2 border ${n.bg}`}>
                <div className="text-base leading-none mt-0.5">{n.emoji}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-gray-800">{n.title}</div>
                  <div className="text-xs text-gray-500 truncate">{n.body}</div>
                </div>
                <div className="text-xs text-gray-400 whitespace-nowrap">{n.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const mockups = [DashboardMockup, DealsMockup, NotificationsMockup]

export default function AppScreenshots() {
  const [active, setActive] = useState(0)
  const Mockup = mockups[active]

  return (
    <section className="py-24 bg-gradient-to-b from-violet-950 to-[#0F0F1A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 rounded-full px-4 py-2 text-sm font-medium mb-4 border border-white/20">
            📱 See It In Action
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Built for how{' '}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              creators actually work
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Clean. Fast. Zero learning curve. You focus on creating — we handle the business side.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {screens.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === i
                  ? 'bg-white text-violet-700 shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/20'
              }`}
            >
              <span>{s.emoji}</span>
              <span className="hidden sm:inline">{s.label}</span>
            </button>
          ))}
        </div>

        {/* Mockup display */}
        <div className="transition-all duration-300">
          <Mockup />
        </div>

        {/* Description */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          {screens[active].description}
        </p>
      </div>
    </section>
  )
}
