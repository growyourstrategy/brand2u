'use client'

import Link from 'next/link'

const stats = [
  { label: 'Total Earned', value: '$4,280', change: '+$840 this month', icon: '💰', color: 'from-violet-500 to-purple-600', light: 'bg-violet-50', text: 'text-violet-700' },
  { label: 'Active Deals', value: '5', change: '2 awaiting review', icon: '🤝', color: 'from-pink-500 to-rose-500', light: 'bg-pink-50', text: 'text-pink-700' },
  { label: 'Deal Pipeline', value: '$8,400', change: 'Potential earnings', icon: '🎯', color: 'from-amber-400 to-orange-500', light: 'bg-amber-50', text: 'text-amber-700' },
  { label: 'Avg Rating', value: '4.9★', change: '47 brand reviews', icon: '⭐', color: 'from-emerald-400 to-teal-500', light: 'bg-emerald-50', text: 'text-emerald-700' },
]

const activeDeals = [
  { id: 1, brand: 'LUSH Cosmetics', logo: '🌿', type: 'UGC Video x2', value: '$2,400', status: 'In Progress', statusColor: 'bg-blue-100 text-blue-700', due: 'Due Jun 2', progress: 65 },
  { id: 2, brand: 'Gymshark', logo: '💪', type: 'Instagram Reels x3', value: '$1,800', status: 'Content Review', statusColor: 'bg-amber-100 text-amber-700', due: 'Due Jun 5', progress: 90 },
  { id: 3, brand: 'Revolve', logo: '👗', type: 'Haul Video + Story', value: '$3,200', status: 'Negotiating', statusColor: 'bg-violet-100 text-violet-700', due: 'Offer expires Jun 1', progress: 20 },
  { id: 4, brand: 'FabFitFun', logo: '🎁', type: 'Unboxing Reel', value: '$850', status: 'Completed', statusColor: 'bg-emerald-100 text-emerald-700', due: 'Paid ✓', progress: 100 },
]

const recentNotifications = [
  { emoji: '🎉', message: 'WE GOT A DEAL! LUSH Cosmetics accepted your pitch', time: '2m ago', hot: true },
  { emoji: '💬', message: 'Gymshark sent your content to review. Fingers crossed!', time: '30m ago', hot: false },
  { emoji: '🎯', message: '3 new campaigns match your profile today', time: '1h ago', hot: false },
  { emoji: '💸', message: 'FabFitFun sent $850 payment. Cha-ching! 🎊', time: '3h ago', hot: false },
]

const upcomingDeals = [
  { brand: 'Sephora', logo: '💄', budget: '$2,000', match: '96%', type: 'Beauty Review', deadline: 'Closes Jun 3' },
  { brand: 'HelloFresh', logo: '🥗', budget: '$1,200', match: '88%', type: 'Recipe Reel', deadline: 'Closes Jun 6' },
  { brand: 'Bumble', logo: '🐝', budget: '$3,500', match: '82%', type: 'Lifestyle Campaign', deadline: 'Closes Jun 8' },
]

export default function DashboardPage() {
  return (
    <div className="px-4 md:px-8 py-6 space-y-8">
      {/* Welcome banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 p-6 md:p-8 text-white">
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-violet-200 text-sm font-medium mb-1">Good morning ✨</p>
              <h2 className="text-2xl md:text-3xl font-black mb-2">Hey Alyssa, you're on fire! 🔥</h2>
              <p className="text-violet-100 text-sm max-w-md">
                You have 3 new deal alerts and 2 deals awaiting your action. Let's close some deals today!
              </p>
            </div>
            <div className="hidden md:flex flex-col items-center bg-white/20 rounded-2xl p-4 text-center min-w-[100px] border border-white/30">
              <div className="text-3xl font-black">5</div>
              <div className="text-xs text-violet-200">Active Deals</div>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <Link href="/deals" className="inline-flex items-center gap-2 bg-white text-violet-700 font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-violet-50 transition-colors shadow-lg">
              Browse New Deals 🎯
            </Link>
            <Link href="/notifications" className="inline-flex items-center gap-2 bg-white/20 text-white font-medium text-sm px-4 py-2.5 rounded-xl hover:bg-white/30 transition-colors border border-white/30">
              View Alerts 🔔
            </Link>
          </div>
        </div>
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-pink-400/30 rounded-full translate-y-1/2 blur-2xl pointer-events-none" />
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-4 md:p-5 shadow-card border border-gray-100 hover:shadow-card-hover transition-shadow duration-300 group">
            <div className={`w-10 h-10 rounded-xl ${stat.light} flex items-center justify-center text-xl mb-3`}>
              {stat.icon}
            </div>
            <div className="text-2xl font-black text-gray-900 mb-0.5">{stat.value}</div>
            <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            <div className={`text-xs mt-1 font-medium ${stat.text}`}>{stat.change}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Active deals */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Active Deals</h3>
            <Link href="/deals" className="text-sm text-violet-600 font-medium hover:text-violet-700">View all →</Link>
          </div>
          <div className="space-y-3">
            {activeDeals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-2xl p-4 shadow-card border border-gray-100 deal-card">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-100 to-pink-100 flex items-center justify-center text-xl flex-shrink-0">
                    {deal.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="font-semibold text-gray-900 text-sm">{deal.brand}</span>
                      <span className="text-sm font-bold text-gray-900">{deal.value}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs text-gray-500">{deal.type}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${deal.statusColor}`}>{deal.status}</span>
                    </div>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-400">{deal.due}</span>
                    <span className="text-xs font-medium text-gray-600">{deal.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-500"
                      style={{ width: `${deal.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Recent notifications */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
              <Link href="/notifications" className="text-sm text-violet-600 font-medium hover:text-violet-700">All →</Link>
            </div>
            <div className="space-y-3">
              {recentNotifications.map((n, i) => (
                <div key={i} className={`flex gap-3 p-3 rounded-xl border ${n.hot ? 'bg-gradient-to-r from-violet-50 to-pink-50 border-violet-100' : 'bg-white border-gray-100'} transition-all hover:shadow-sm`}>
                  <span className="text-lg leading-none flex-shrink-0">{n.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-700 leading-relaxed line-clamp-2">{n.message}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended deals */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Matched for You</h3>
              <Link href="/deals" className="text-sm text-violet-600 font-medium hover:text-violet-700">Browse →</Link>
            </div>
            <div className="space-y-3">
              {upcomingDeals.map((deal) => (
                <div key={deal.brand} className="bg-white rounded-xl p-3 border border-gray-100 shadow-card deal-card">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-100 to-pink-100 flex items-center justify-center text-lg flex-shrink-0">
                      {deal.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-900">{deal.brand}</span>
                        <span className="text-xs font-bold text-emerald-600">{deal.match}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{deal.type}</span>
                        <span className="text-xs font-semibold text-gray-800">{deal.budget}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{deal.deadline}</span>
                    <button className="text-xs bg-violet-600 text-white px-3 py-1 rounded-lg font-medium hover:bg-violet-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
