'use client'

import { useState } from 'react'

type NotifType = 'deal' | 'payment' | 'message' | 'match' | 'review' | 'system'

interface Notification {
  id: number
  type: NotifType
  emoji: string
  title: string
  body: string
  time: string
  read: boolean
  celebration?: boolean
  action?: string
  actionLabel?: string
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: 'deal',
    emoji: '🎉',
    title: 'WE GOT A DEAL, BESTIE!!',
    body: 'LUSH Cosmetics just accepted your pitch! $2,400 is coming your way. You are literally crushing it! Time to create some magic. ✨',
    time: '2 minutes ago',
    read: false,
    celebration: true,
    action: '/deals',
    actionLabel: 'View Deal →',
  },
  {
    id: 2,
    type: 'payment',
    emoji: '💸',
    title: 'Ka-ching! Payment received!',
    body: 'FabFitFun sent you $850 for your Unboxing Reel collab. It\'s officially in your account. Go treat yourself — you earned it! 🎊',
    time: '3 hours ago',
    read: false,
    celebration: false,
    action: '/dashboard',
    actionLabel: 'View Earnings',
  },
  {
    id: 3,
    type: 'match',
    emoji: '🎯',
    title: 'Hot new campaigns just for you!',
    body: 'Sephora, Revolve, and Gymshark all posted campaigns that are a 90%+ match for your profile. First in, first win — go get it! 🏃',
    time: '1 hour ago',
    read: false,
    celebration: false,
    action: '/deals',
    actionLabel: 'See Matches',
  },
  {
    id: 4,
    type: 'message',
    emoji: '💬',
    title: 'Gymshark slid into your DMs',
    body: '"Hey Alyssa! We LOVE your content and we think you\'d be perfect for our Summer campaign. Can we hop on a quick 15-min call?" — Gymshark Brand Team',
    time: '4 hours ago',
    read: false,
    celebration: false,
    action: '/deals',
    actionLabel: 'Reply Now',
  },
  {
    id: 5,
    type: 'review',
    emoji: '⭐',
    title: 'New 5-star review!',
    body: 'Revolve left you a glowing review: "Alyssa delivered beyond expectations. Content quality was incredible. Already planning round 2!" Your rep is GLOWING. 🌟',
    time: '6 hours ago',
    read: true,
    celebration: false,
    action: '/profile',
    actionLabel: 'View Profile',
  },
  {
    id: 6,
    type: 'deal',
    emoji: '🤝',
    title: 'Congrats on your new brand deal!',
    body: 'Your collab with HelloFresh is officially confirmed! $1,200 and a free meal kit delivery. Way to keep growing and stacking those wins! 🥗',
    time: 'Yesterday',
    read: true,
    celebration: false,
    action: '/deals',
    actionLabel: 'View Contract',
  },
  {
    id: 7,
    type: 'system',
    emoji: '🚀',
    title: 'Your profile hit a new milestone!',
    body: 'You\'ve completed 10 brand deals on brand2u! You\'ve unlocked the "Deal Closer" badge and boosted your visibility in search results. Keep going! 🏆',
    time: 'Yesterday',
    read: true,
    celebration: false,
  },
  {
    id: 8,
    type: 'match',
    emoji: '✨',
    title: 'Exclusive deal invite — just for you',
    body: 'Bumble specifically requested your profile for their upcoming lifestyle campaign. This isn\'t a general posting — they picked YOU. Budget: $3,500. 🐝',
    time: '2 days ago',
    read: true,
    celebration: false,
    action: '/deals',
    actionLabel: 'Accept Invite',
  },
  {
    id: 9,
    type: 'payment',
    emoji: '💰',
    title: 'Payout initiated!',
    body: 'Your $2,400 payment from LUSH Cosmetics is on its way. Expected in your account within 24 hours. That\'s what we\'re talking about! 💳',
    time: '3 days ago',
    read: true,
    celebration: false,
  },
  {
    id: 10,
    type: 'deal',
    emoji: '🎊',
    title: 'Content approved — and they loved it!',
    body: 'Gymshark reviewed your Reels and approved all 3 with zero revisions! They said "10/10, exactly the energy we wanted." You\'re a pro! 🔥',
    time: '4 days ago',
    read: true,
    celebration: false,
  },
]

const typeColors: Record<NotifType, string> = {
  deal: 'from-violet-50 to-pink-50 border-violet-200',
  payment: 'from-emerald-50 to-teal-50 border-emerald-200',
  message: 'from-blue-50 to-indigo-50 border-blue-200',
  match: 'from-amber-50 to-orange-50 border-amber-200',
  review: 'from-yellow-50 to-amber-50 border-yellow-200',
  system: 'from-gray-50 to-slate-50 border-gray-200',
}

const typeLabels: Record<NotifType, string> = {
  deal: '🤝 Deal',
  payment: '💸 Payment',
  message: '💬 Message',
  match: '🎯 Match',
  review: '⭐ Review',
  system: '🚀 Update',
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [filter, setFilter] = useState<'all' | 'unread'>('all')

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const markRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    )
  }

  const displayed = notifications.filter((n) => filter === 'all' || !n.read)

  return (
    <div className="px-4 md:px-8 py-6 max-w-3xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
            {unreadCount > 0 && (
              <span className="bg-gradient-to-r from-violet-600 to-pink-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                {unreadCount} new
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-0.5">All the good news, right here ✨</p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="text-sm text-violet-600 font-medium hover:text-violet-700 transition-colors"
          >
            Mark all read
          </button>
        )}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6">
        {(['all', 'unread'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              filter === f
                ? 'bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-lg shadow-violet-200'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-violet-200'
            }`}
          >
            {f === 'all' ? 'All' : `Unread (${unreadCount})`}
          </button>
        ))}
      </div>

      {/* Notifications list */}
      <div className="space-y-3">
        {displayed.map((n) => (
          <div
            key={n.id}
            onClick={() => markRead(n.id)}
            className={`relative rounded-2xl p-4 border transition-all duration-200 cursor-pointer hover:shadow-md ${
              n.celebration
                ? 'bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 border-transparent text-white shadow-brand'
                : `bg-gradient-to-br ${typeColors[n.type]}`
            } ${!n.read && !n.celebration ? 'ring-1 ring-violet-200' : ''}`}
          >
            {/* Unread dot */}
            {!n.read && !n.celebration && (
              <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-pink-500 rounded-full" />
            )}

            <div className="flex gap-4">
              <div className={`text-2xl leading-none flex-shrink-0 ${n.celebration ? '' : ''}`}>
                {n.emoji}
              </div>
              <div className="flex-1 min-w-0">
                {/* Type badge */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    n.celebration
                      ? 'bg-white/20 text-white'
                      : 'bg-white text-gray-500 border border-gray-200'
                  }`}>
                    {typeLabels[n.type]}
                  </span>
                  <span className={`text-xs ${n.celebration ? 'text-violet-200' : 'text-gray-400'}`}>
                    {n.time}
                  </span>
                </div>

                <h4 className={`font-bold text-sm mb-1 ${n.celebration ? 'text-white text-base' : 'text-gray-900'}`}>
                  {n.title}
                </h4>
                <p className={`text-sm leading-relaxed ${n.celebration ? 'text-violet-100' : 'text-gray-600'}`}>
                  {n.body}
                </p>

                {n.action && n.actionLabel && (
                  <div className="mt-3">
                    <a
                      href={n.action}
                      onClick={(e) => e.stopPropagation()}
                      className={`inline-flex items-center text-sm font-semibold px-4 py-2 rounded-xl transition-colors ${
                        n.celebration
                          ? 'bg-white text-violet-700 hover:bg-violet-50'
                          : 'bg-white border border-gray-200 text-violet-600 hover:bg-violet-50 hover:border-violet-200'
                      }`}
                    >
                      {n.actionLabel}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Celebration confetti decoration */}
            {n.celebration && (
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                {['🎊', '⭐', '✨', '🎉', '💜'].map((emoji, i) => (
                  <span
                    key={i}
                    className="absolute text-lg opacity-20"
                    style={{
                      top: `${[10, 80, 20, 60, 40][i]}%`,
                      right: `${[5, 15, 10, 8, 20][i]}%`,
                      transform: `rotate(${[15, -20, 10, -15, 25][i]}deg)`,
                    }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {displayed.length === 0 && (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔔</div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">All caught up!</h3>
          <p className="text-gray-400 text-sm">No unread notifications. Go land a deal! 🎯</p>
        </div>
      )}
    </div>
  )
}
