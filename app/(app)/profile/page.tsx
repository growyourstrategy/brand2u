'use client'

import { useState } from 'react'

const platforms = [
  { name: 'TikTok', handle: '@alyssacreates', followers: '45.2K', icon: '🎵', color: 'bg-gray-900 text-white' },
  { name: 'Instagram', handle: '@alyssacreates', followers: '38.7K', icon: '📸', color: 'bg-gradient-to-br from-pink-500 to-violet-600 text-white' },
  { name: 'YouTube', handle: 'AlyssaCreates', followers: '12.1K', icon: '▶️', color: 'bg-red-600 text-white' },
]

const completedDeals = [
  { brand: 'LUSH Cosmetics', logo: '🌿', value: '$2,400', type: 'UGC Video', date: 'May 2025', rating: 5, review: 'Absolutely incredible content. Alyssa understood the brief perfectly and delivered something even better than we imagined.' },
  { brand: 'FabFitFun', logo: '🎁', value: '$850', type: 'Unboxing Reel', date: 'Apr 2025', rating: 5, review: 'So easy to work with! High quality content, delivered on time. Will definitely work with her again.' },
  { brand: 'Revolve', logo: '👗', value: '$3,200', type: 'Haul + Stories', date: 'Mar 2025', rating: 5, review: 'Alyssa\'s haul content went viral with 2.8M views. Best ROI we\'ve ever gotten from a creator partnership.' },
  { brand: 'HelloFresh', logo: '🥗', value: '$1,200', type: 'Recipe Reel', date: 'Feb 2025', rating: 4, review: 'Great content and super professional. Slight delay but communicated well throughout.' },
]

const skills = ['UGC Video', 'Instagram Reels', 'TikTok', 'Lifestyle', 'Beauty', 'Unboxing', 'GRWM', 'Storytelling', 'Product Review', 'Day-in-the-Life']

export default function ProfilePage() {
  const [editMode, setEditMode] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'portfolio' | 'reviews'>('overview')

  const totalEarned = completedDeals.reduce((sum, d) => sum + parseInt(d.value.replace(/[$,]/g, '')), 0)
  const avgRating = completedDeals.reduce((s, d) => s + d.rating, 0) / completedDeals.length

  return (
    <div className="px-4 md:px-8 py-6 max-w-4xl">
      {/* Profile header */}
      <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 rounded-3xl p-6 md:p-8 text-white mb-6 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-pink-400/30 rounded-full translate-y-1/2 blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row gap-5">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center text-4xl font-black text-white shadow-xl">
                A
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-400 rounded-full border-2 border-white flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <h2 className="text-2xl font-black">Alyssa M.</h2>
                  <p className="text-violet-200 font-medium">@alyssacreates</p>
                  <p className="text-violet-100 text-sm mt-1">Lifestyle & Beauty Creator · Los Angeles, CA 📍</p>
                </div>
                <button
                  onClick={() => setEditMode(!editMode)}
                  className="bg-white/20 hover:bg-white/30 border border-white/30 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors flex-shrink-0"
                >
                  {editMode ? 'Save Profile ✓' : '✏️ Edit Profile'}
                </button>
              </div>

              <p className="text-violet-100 text-sm mt-3 leading-relaxed max-w-xl">
                Lifestyle creator obsessed with all things beauty, travel, and real talk. I make content that actually converts because I only partner with brands I genuinely love. ✨
              </p>

              {/* Quick stats */}
              <div className="flex gap-6 mt-4">
                <div>
                  <div className="text-xl font-black">${totalEarned.toLocaleString()}</div>
                  <div className="text-xs text-violet-200">Total Earned</div>
                </div>
                <div>
                  <div className="text-xl font-black">{completedDeals.length}</div>
                  <div className="text-xs text-violet-200">Deals Done</div>
                </div>
                <div>
                  <div className="text-xl font-black">{avgRating.toFixed(1)}★</div>
                  <div className="text-xs text-violet-200">Avg Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-6 w-fit">
        {(['overview', 'portfolio', 'reviews'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${
              activeTab === tab
                ? 'bg-white text-violet-700 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Platforms */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card">
            <h3 className="font-bold text-gray-900 mb-4">Connected Platforms</h3>
            <div className="space-y-3">
              {platforms.map((p) => (
                <div key={p.name} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${p.color} flex items-center justify-center text-lg flex-shrink-0`}>
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900">{p.name}</div>
                    <div className="text-xs text-gray-500">{p.handle}</div>
                  </div>
                  <div className="text-sm font-bold text-gray-800">{p.followers}</div>
                </div>
              ))}
              <button className="w-full mt-2 border-2 border-dashed border-gray-200 text-gray-400 text-sm font-medium py-2.5 rounded-xl hover:border-violet-300 hover:text-violet-600 transition-colors">
                + Connect Platform
              </button>
            </div>
          </div>

          {/* Rate card */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card">
            <h3 className="font-bold text-gray-900 mb-4">My Rate Card</h3>
            <div className="space-y-3">
              {[
                { type: 'TikTok Video (60s)', rate: '$800–$1,200' },
                { type: 'Instagram Reel', rate: '$600–$1,000' },
                { type: 'Instagram Story (5 slides)', rate: '$300–$500' },
                { type: 'YouTube Integration', rate: '$2,000–$4,000' },
                { type: 'UGC Package (no posting)', rate: '$400–$800' },
              ].map((item) => (
                <div key={item.type} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <span className="text-sm text-gray-700">{item.type}</span>
                  <span className="text-sm font-bold text-violet-700">{item.rate}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 p-3 bg-violet-50 rounded-xl text-xs text-violet-700 font-medium">
              💡 Rates are negotiable. Custom packages available for ongoing partnerships.
            </div>
          </div>

          {/* Content categories */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card">
            <h3 className="font-bold text-gray-900 mb-4">Content Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="text-sm bg-gradient-to-r from-violet-50 to-pink-50 text-violet-700 px-3 py-1.5 rounded-full font-medium border border-violet-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Profile strength */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card">
            <h3 className="font-bold text-gray-900 mb-4">Profile Strength</h3>
            <div className="mb-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-gray-600">Overall completeness</span>
                <span className="text-sm font-bold text-violet-700">85%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
              </div>
            </div>
            <div className="space-y-2">
              {[
                { label: 'Profile photo', done: true },
                { label: 'Bio & niche', done: true },
                { label: 'Rate card', done: true },
                { label: 'Portfolio samples', done: true },
                { label: 'Social accounts linked', done: true },
                { label: 'Audience demographics', done: false },
                { label: 'Case study video', done: false },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${item.done ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-400'}`}>
                    {item.done ? '✓' : '○'}
                  </span>
                  <span className={item.done ? 'text-gray-700' : 'text-gray-400'}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'portfolio' && (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-2xl bg-gradient-to-br from-violet-100 via-pink-100 to-amber-100 flex flex-col items-center justify-center gap-2 border border-violet-100 hover:border-violet-300 transition-colors cursor-pointer group relative overflow-hidden">
                <div className="text-4xl">{['💄', '🌿', '👗', '🎁', '✨', '🤝'][i]}</div>
                <div className="text-xs font-medium text-gray-600 text-center px-2">
                  {['LUSH Collab', 'Beauty GRWM', 'Revolve Haul', 'FabFitFun Box', 'Day in My Life', 'Brand Review'][i]}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/80 to-pink-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">View Content ↗</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full border-2 border-dashed border-gray-200 text-gray-400 text-sm font-medium py-4 rounded-2xl hover:border-violet-300 hover:text-violet-600 transition-colors">
            + Add Content to Portfolio
          </button>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-violet-50 to-pink-50 rounded-2xl p-4 border border-violet-100 flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-4xl font-black text-violet-700">{avgRating.toFixed(1)}</div>
              <div className="text-amber-400 text-lg">{'★'.repeat(Math.round(avgRating))}</div>
              <div className="text-xs text-gray-500">{completedDeals.length} reviews</div>
            </div>
            <div className="flex-1">
              {[5, 4, 3].map((stars) => {
                const count = completedDeals.filter((d) => d.rating === stars).length
                return (
                  <div key={stars} className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500 w-4">{stars}★</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-violet-400 to-pink-400 rounded-full"
                        style={{ width: `${(count / completedDeals.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-4">{count}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {completedDeals.map((deal, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-100 to-pink-100 flex items-center justify-center text-xl flex-shrink-0">
                  {deal.logo}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-bold text-gray-900">{deal.brand}</span>
                    <span className="text-xs text-gray-400">{deal.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">{'★'.repeat(deal.rating)}{'☆'.repeat(5 - deal.rating)}</span>
                    <span className="text-xs font-semibold text-violet-700">{deal.value} · {deal.type}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic leading-relaxed">"{deal.review}"</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
