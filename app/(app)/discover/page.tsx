'use client'

import { useState } from 'react'

const creators = [
  {
    id: 1,
    name: 'Alyssa M.',
    handle: '@alyssacreates',
    niche: 'Lifestyle & Beauty',
    emoji: '💄',
    followers: '45K',
    engagement: '6.2%',
    avgViews: '180K',
    deals: 23,
    rating: 4.9,
    location: 'Los Angeles, CA',
    platforms: ['TikTok', 'Instagram'],
    rate: '$800–$2,000',
    tags: ['Authentic', 'High-engagement', 'UGC Queen'],
    topBrands: ['LUSH', 'Sephora', 'FabFitFun'],
    badge: 'Top Creator',
    badgeColor: 'bg-violet-100 text-violet-700',
    available: true,
  },
  {
    id: 2,
    name: 'Marcus T.',
    handle: '@martech_reviews',
    niche: 'Tech & Gadgets',
    emoji: '📱',
    followers: '128K',
    engagement: '4.8%',
    avgViews: '340K',
    deals: 47,
    rating: 5.0,
    location: 'New York, NY',
    platforms: ['YouTube', 'TikTok'],
    rate: '$2,000–$5,000',
    tags: ['In-depth Reviews', 'Trust Builder', 'High Conversion'],
    topBrands: ['Razer', 'Samsung', 'Anker'],
    badge: 'Verified Pro',
    badgeColor: 'bg-blue-100 text-blue-700',
    available: true,
  },
  {
    id: 3,
    name: 'Sophie R.',
    handle: '@sophieglow',
    niche: 'Skincare & Wellness',
    emoji: '🌿',
    followers: '67K',
    engagement: '7.1%',
    avgViews: '220K',
    deals: 31,
    rating: 4.8,
    location: 'Austin, TX',
    platforms: ['Instagram', 'TikTok'],
    rate: '$1,200–$3,000',
    tags: ['Clean Beauty', 'Storyteller', 'Loyal Audience'],
    topBrands: ['Glossier', 'The Ordinary', 'LUSH'],
    badge: 'Rising Star',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    available: false,
  },
  {
    id: 4,
    name: 'Jake B.',
    handle: '@jakefitlife',
    niche: 'Fitness & Health',
    emoji: '💪',
    followers: '89K',
    engagement: '5.4%',
    avgViews: '280K',
    deals: 38,
    rating: 4.9,
    location: 'Miami, FL',
    platforms: ['Instagram', 'YouTube'],
    rate: '$1,500–$3,500',
    tags: ['Motivation', 'Real Results', 'High Energy'],
    topBrands: ['Gymshark', 'MyProtein', 'Fabletics'],
    badge: 'Top Creator',
    badgeColor: 'bg-violet-100 text-violet-700',
    available: true,
  },
  {
    id: 5,
    name: 'Priya K.',
    handle: '@priyaeats',
    niche: 'Food & Lifestyle',
    emoji: '🍜',
    followers: '34K',
    engagement: '8.9%',
    avgViews: '95K',
    deals: 15,
    rating: 4.7,
    location: 'Chicago, IL',
    platforms: ['TikTok', 'Instagram'],
    rate: '$500–$1,500',
    tags: ['Micro-influencer', 'Ultra-engaged', 'Foodie Expert'],
    topBrands: ['HelloFresh', 'Eataly', 'Instacart'],
    badge: 'Micro Star',
    badgeColor: 'bg-amber-100 text-amber-700',
    available: true,
  },
  {
    id: 6,
    name: 'Carlos D.',
    handle: '@carlosgaming_',
    niche: 'Gaming & Entertainment',
    emoji: '🎮',
    followers: '201K',
    engagement: '4.1%',
    avgViews: '620K',
    deals: 52,
    rating: 4.8,
    location: 'Dallas, TX',
    platforms: ['Twitch', 'YouTube', 'TikTok'],
    rate: '$3,000–$8,000',
    tags: ['Big Reach', 'Authentic Reactions', 'Community Builder'],
    topBrands: ['Razer', 'NordVPN', 'G-Fuel'],
    badge: 'Verified Pro',
    badgeColor: 'bg-blue-100 text-blue-700',
    available: true,
  },
]

const niches = ['All Niches', 'Beauty', 'Fitness', 'Tech', 'Food', 'Gaming', 'Lifestyle', 'Fashion']

export default function DiscoverPage() {
  const [activeNiche, setActiveNiche] = useState('All Niches')
  const [selectedCreator, setSelectedCreator] = useState<typeof creators[0] | null>(null)
  const [searchQ, setSearchQ] = useState('')

  const filtered = creators.filter((c) => {
    const matchNiche = activeNiche === 'All Niches' || c.niche.toLowerCase().includes(activeNiche.toLowerCase())
    const matchSearch = !searchQ || c.name.toLowerCase().includes(searchQ.toLowerCase()) || c.niche.toLowerCase().includes(searchQ.toLowerCase())
    return matchNiche && matchSearch
  })

  return (
    <div className="px-4 md:px-8 py-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Discover Creators</h2>
        <p className="text-sm text-gray-500">Find vetted UGC creators that match your brand vibe 🎯</p>

        <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 border border-gray-200 shadow-sm my-4">
          <span className="text-gray-400">🔍</span>
          <input
            type="text"
            value={searchQ}
            onChange={(e) => setSearchQ(e.target.value)}
            placeholder="Search creators by name, niche, platform..."
            className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {niches.map((n) => (
            <button
              key={n}
              onClick={() => setActiveNiche(n)}
              className={`flex-shrink-0 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                activeNiche === n
                  ? 'bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-lg shadow-violet-200'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-violet-300 hover:text-violet-600'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((creator) => (
          <div
            key={creator.id}
            onClick={() => setSelectedCreator(creator)}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card deal-card cursor-pointer hover:border-violet-200"
          >
            {/* Avatar + badge */}
            <div className="flex items-start gap-3 mb-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-black text-xl">
                  {creator.name[0]}
                </div>
                {creator.available && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  <span className="font-bold text-gray-900">{creator.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${creator.badgeColor}`}>
                    {creator.badge}
                  </span>
                </div>
                <div className="text-xs text-violet-600 font-medium">{creator.handle}</div>
                <div className="text-xs text-gray-500">{creator.niche} {creator.emoji}</div>
              </div>
              <div className="text-2xl">{creator.emoji}</div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: 'Followers', value: creator.followers },
                { label: 'Engagement', value: creator.engagement },
                { label: 'Avg Views', value: creator.avgViews },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-xl p-2.5 text-center">
                  <div className="text-sm font-bold text-gray-900">{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {creator.tags.map((tag) => (
                <span key={tag} className="text-xs bg-violet-50 text-violet-700 px-2.5 py-1 rounded-full font-medium border border-violet-100">
                  {tag}
                </span>
              ))}
            </div>

            {/* Platforms */}
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                {creator.platforms.map((p) => (
                  <span key={p} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg font-medium">
                    {p}
                  </span>
                ))}
              </div>
              <div className="text-right">
                <div className="text-xs font-semibold text-gray-800">{creator.rate}</div>
                <div className="text-xs text-amber-500 font-medium">★ {creator.rating}</div>
              </div>
            </div>

            <button className="mt-4 w-full bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm font-semibold py-2.5 rounded-xl hover:opacity-90 transition-opacity">
              Invite to Campaign ✨
            </button>
          </div>
        ))}
      </div>

      {/* Creator detail panel */}
      {selectedCreator && (
        <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl z-40 overflow-y-auto border-l border-gray-100">
          <div className="p-6">
            <button
              onClick={() => setSelectedCreator(null)}
              className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 mb-6"
            >
              ✕
            </button>

            {/* Profile */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-black text-3xl mx-auto mb-3">
                {selectedCreator.name[0]}
              </div>
              <h3 className="text-2xl font-black text-gray-900">{selectedCreator.name}</h3>
              <p className="text-violet-600 font-medium">{selectedCreator.handle}</p>
              <p className="text-sm text-gray-500">{selectedCreator.niche} · {selectedCreator.location}</p>
              <div className={`inline-flex mt-2 text-xs font-semibold px-3 py-1 rounded-full ${selectedCreator.badgeColor}`}>
                {selectedCreator.badge}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: 'Followers', value: selectedCreator.followers, icon: '👥' },
                { label: 'Engagement', value: selectedCreator.engagement, icon: '💥' },
                { label: 'Avg Views', value: selectedCreator.avgViews, icon: '👁️' },
                { label: 'Deals Completed', value: String(selectedCreator.deals), icon: '🤝' },
              ].map((s) => (
                <div key={s.label} className="bg-gradient-to-br from-violet-50 to-pink-50 rounded-2xl p-3 text-center border border-violet-100">
                  <div className="text-lg mb-1">{s.icon}</div>
                  <div className="text-lg font-black text-gray-900">{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Rate */}
            <div className="bg-gradient-to-r from-violet-600 to-pink-500 rounded-2xl p-4 mb-6 text-white text-center">
              <div className="text-2xl font-black mb-0.5">{selectedCreator.rate}</div>
              <div className="text-violet-200 text-sm">Per campaign estimate</div>
            </div>

            {/* Platforms */}
            <div className="mb-4">
              <h4 className="font-bold text-gray-900 mb-2 text-sm">Platforms</h4>
              <div className="flex gap-2">
                {selectedCreator.platforms.map((p) => (
                  <span key={p} className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-xl font-medium">{p}</span>
                ))}
              </div>
            </div>

            {/* Past brands */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-2 text-sm">Has Worked With</h4>
              <div className="flex gap-2">
                {selectedCreator.topBrands.map((b) => (
                  <span key={b} className="text-xs bg-violet-50 text-violet-700 px-3 py-1.5 rounded-xl font-medium border border-violet-100">{b}</span>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold py-3.5 rounded-2xl hover:opacity-90 transition-opacity shadow-lg shadow-violet-200">
                Invite to Campaign
              </button>
              <button className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">
                💬
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
