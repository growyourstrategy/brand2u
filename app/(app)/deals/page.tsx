'use client'

import { useState } from 'react'

const categories = ['All Deals', 'Beauty', 'Fitness', 'Fashion', 'Food & Drink', 'Tech', 'Lifestyle', 'Gaming']

const deals = [
  {
    id: 1,
    brand: 'LUSH Cosmetics',
    logo: '🌿',
    category: 'Beauty',
    type: 'UGC Video x2',
    budget: '$2,400',
    budgetNum: 2400,
    match: 98,
    followers: '10K–100K',
    deadline: 'Jun 3',
    description: 'We\'re looking for authentic creators to showcase our new summer bath collection. Needs to feel real, not scripted. You do you!',
    requirements: ['Lifestyle or Beauty niche', 'Min 10K followers', 'TikTok or Reels'],
    spots: 3,
    hot: true,
    new: false,
  },
  {
    id: 2,
    brand: 'Gymshark',
    logo: '💪',
    category: 'Fitness',
    type: 'Instagram Reels x3',
    budget: '$1,800',
    budgetNum: 1800,
    match: 94,
    followers: '25K+',
    deadline: 'Jun 6',
    description: 'Show us your workout routine in Gymshark gear. Raw, real, motivated energy only. No stiff, scripted content please.',
    requirements: ['Fitness niche', 'Min 25K followers', 'Strong engagement rate'],
    spots: 5,
    hot: false,
    new: true,
  },
  {
    id: 3,
    brand: 'Revolve',
    logo: '👗',
    category: 'Fashion',
    type: 'Haul Video + Story Series',
    budget: '$3,500',
    budgetNum: 3500,
    match: 91,
    followers: '50K+',
    deadline: 'Jun 8',
    description: 'Summer haul season is HERE. We want stylish creators to show off our new arrivals in their own way. Your aesthetic = our content.',
    requirements: ['Fashion/Lifestyle niche', 'Min 50K followers', 'Strong aesthetics feed'],
    spots: 8,
    hot: true,
    new: false,
  },
  {
    id: 4,
    brand: 'Sephora',
    logo: '💄',
    category: 'Beauty',
    type: 'Product Review Video',
    budget: '$2,000',
    budgetNum: 2000,
    match: 89,
    followers: '20K+',
    deadline: 'Jun 10',
    description: 'Honest reviews for our new skincare line. We want real reactions — good or bad (we\'re confident you\'ll love it 😉).',
    requirements: ['Beauty/Skincare niche', 'Min 20K followers', 'Honest content style'],
    spots: 10,
    hot: false,
    new: false,
  },
  {
    id: 5,
    brand: 'HelloFresh',
    logo: '🥗',
    category: 'Food & Drink',
    type: 'Recipe Reel',
    budget: '$1,200',
    budgetNum: 1200,
    match: 85,
    followers: '15K+',
    deadline: 'Jun 12',
    description: 'Cook one of our recipes and show us the magic. We love chaotic, real kitchen energy just as much as gorgeous plating.',
    requirements: ['Food/Lifestyle niche', 'Min 15K followers', 'Recipe/cooking content'],
    spots: 12,
    hot: false,
    new: true,
  },
  {
    id: 6,
    brand: 'Bumble',
    logo: '🐝',
    category: 'Lifestyle',
    type: 'Lifestyle Campaign',
    budget: '$3,500',
    budgetNum: 3500,
    match: 82,
    followers: '30K+',
    deadline: 'Jun 15',
    description: 'Tell your genuine story about connection, dating, or finding your people. Authentic storytelling gets big bonus points.',
    requirements: ['Lifestyle/Dating niche', 'Min 30K followers', 'Authentic voice'],
    spots: 6,
    hot: false,
    new: false,
  },
  {
    id: 7,
    brand: 'Razer',
    logo: '🎮',
    category: 'Gaming',
    type: 'Gaming Setup Tour',
    budget: '$4,200',
    budgetNum: 4200,
    match: 78,
    followers: '40K+',
    deadline: 'Jun 18',
    description: 'Show off your gaming setup featuring Razer gear. We love epic setups, we love chaotic setups — just make it YOURS.',
    requirements: ['Gaming niche', 'Min 40K followers', 'Setup/tech content'],
    spots: 4,
    hot: false,
    new: true,
  },
  {
    id: 8,
    brand: 'Fabletics',
    logo: '🏃',
    category: 'Fitness',
    type: 'Activewear Try-On',
    budget: '$950',
    budgetNum: 950,
    match: 76,
    followers: '10K+',
    deadline: 'Jun 20',
    description: 'Try on and style our newest activewear collection. GRWM format, get ready to work out, whatever feels natural to you.',
    requirements: ['Fitness/Fashion niche', 'Min 10K followers', 'Try-on content style'],
    spots: 15,
    hot: false,
    new: false,
  },
]

export default function DealsPage() {
  const [activeCategory, setActiveCategory] = useState('All Deals')
  const [sortBy, setSortBy] = useState('match')
  const [selectedDeal, setSelectedDeal] = useState<typeof deals[0] | null>(null)

  const filtered = deals
    .filter((d) => activeCategory === 'All Deals' || d.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'match') return b.match - a.match
      if (sortBy === 'budget') return b.budgetNum - a.budgetNum
      return 0
    })

  return (
    <div className="px-4 md:px-8 py-6">
      {/* Page header */}
      <div className="mb-6">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Brand Deal Marketplace</h2>
            <p className="text-sm text-gray-500">{filtered.length} campaigns matched to your profile</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm bg-white border border-gray-200 rounded-xl px-3 py-1.5 text-gray-700 outline-none focus:border-violet-300"
            >
              <option value="match">Best Match</option>
              <option value="budget">Highest Budget</option>
            </select>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 border border-gray-200 shadow-sm mb-4">
          <span className="text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search brands, campaign types, niches..."
            className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
          />
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-lg shadow-violet-200'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-violet-300 hover:text-violet-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Deals grid */}
      <div className={`grid gap-4 ${selectedDeal ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
        {filtered.map((deal) => (
          <button
            key={deal.id}
            onClick={() => setSelectedDeal(selectedDeal?.id === deal.id ? null : deal)}
            className={`text-left bg-white rounded-2xl p-5 border transition-all duration-200 deal-card ${
              selectedDeal?.id === deal.id
                ? 'border-violet-400 shadow-brand ring-2 ring-violet-200'
                : 'border-gray-100 shadow-card hover:border-violet-200'
            }`}
          >
            {/* Card header */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-100 to-pink-100 flex items-center justify-center text-2xl flex-shrink-0">
                {deal.logo}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <span className="font-bold text-gray-900">{deal.brand}</span>
                  {deal.hot && <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-semibold">🔥 Hot</span>}
                  {deal.new && <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full font-semibold">✨ New</span>}
                </div>
                <div className="text-sm text-gray-500">{deal.type}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-lg font-black text-gray-900">{deal.budget}</div>
                <div className="text-xs text-emerald-600 font-semibold">{deal.match}% match</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">{deal.description}</p>

            {/* Meta */}
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">👥 {deal.followers}</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">📅 Closes {deal.deadline}</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">🎯 {deal.spots} spots left</span>
            </div>

            {/* Match bar */}
            <div className="mb-3">
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
                  style={{ width: `${deal.match}%` }}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); }}
                className="flex-1 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm font-semibold py-2.5 rounded-xl hover:opacity-90 transition-opacity"
              >
                Apply Now ✨
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); }}
                className="px-3 py-2.5 rounded-xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition-colors"
              >
                🔖
              </button>
            </div>
          </button>
        ))}
      </div>

      {/* Deal detail panel */}
      {selectedDeal && (
        <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl z-40 overflow-y-auto border-l border-gray-100">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setSelectedDeal(null)}
                className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
              >
                ✕
              </button>
              <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
                {selectedDeal.match}% match for you
              </span>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-pink-100 flex items-center justify-center text-3xl mb-4">
              {selectedDeal.logo}
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-1">{selectedDeal.brand}</h3>
            <p className="text-gray-500 mb-4">{selectedDeal.type}</p>

            <div className="bg-gradient-to-r from-violet-50 to-pink-50 rounded-2xl p-4 mb-6 border border-violet-100">
              <div className="text-3xl font-black text-violet-700 mb-1">{selectedDeal.budget}</div>
              <div className="text-sm text-gray-600">Estimated payout for this campaign</div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-2">About this campaign</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{selectedDeal.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-3">Requirements</h4>
              <div className="space-y-2">
                {selectedDeal.requirements.map((req, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs flex-shrink-0">✓</span>
                    {req}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6 text-center">
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-sm font-bold text-gray-900">{selectedDeal.spots}</div>
                <div className="text-xs text-gray-500">Spots left</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-sm font-bold text-gray-900">Jun {selectedDeal.deadline}</div>
                <div className="text-xs text-gray-500">Deadline</div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg shadow-lg shadow-violet-200">
              Apply Now ✨
            </button>
            <p className="text-center text-xs text-gray-400 mt-2">You can include a personalized pitch message</p>
          </div>
        </div>
      )}
    </div>
  )
}
