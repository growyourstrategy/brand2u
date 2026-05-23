'use client'

import Link from 'next/link'

const checkIcon = (
  <svg
    className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
)

interface Plan {
  id: string
  name: string
  price: string
  period: string
  subtitle: string
  badge: string | null
  featured?: boolean
  outlined?: boolean
  features: string[]
  cta: string
  href: string
}

const plans: Plan[] = [
  {
    id: 'creator',
    name: 'Creator',
    price: '$10',
    period: '/mo',
    subtitle: 'For creators ready to monetize',
    badge: 'Most Popular',
    featured: true,
    features: [
      'Creator profile & portfolio',
      'Deal alerts & matching',
      'Messaging with brands',
      'Analytics dashboard',
      'Digital contracts',
      'Up to 5 active deals',
    ],
    cta: 'Start Creating',
    href: '/dashboard',
  },
  {
    id: 'business',
    name: 'Business',
    price: '$49',
    period: '/mo',
    subtitle: 'For brands serious about UGC',
    badge: null,
    featured: false,
    features: [
      'Post unlimited campaigns',
      'Creator discovery & search',
      'Advanced analytics & ROI tracking',
      'Dedicated account manager',
      'Contract templates',
      'Priority support',
    ],
    cta: 'Start Hiring Creators',
    href: '/dashboard?mode=brand',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    subtitle: 'For agencies & large brands',
    badge: null,
    featured: false,
    outlined: true,
    features: [
      'Everything in Business',
      'White-label option',
      'API access',
      'Custom integrations',
      'Dedicated success team',
      'SLA guarantee',
    ],
    cta: 'Talk to Sales',
    href: 'mailto:hello@brand2u.co',
  },
]

function FeaturedCard({ plan }: { plan: Plan }) {
  return (
    /* gradient-border is defined in globals.css using position:relative + ::before pseudo-element */
    <div className="gradient-border shadow-brand md:-mt-6 md:mb-6 z-10">
      <div className="rounded-2xl bg-white p-8 h-full flex flex-col relative overflow-hidden">
        {/* Soft inner glow */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl opacity-30"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse at top left, rgba(124,58,237,0.08) 0%, transparent 60%)',
          }}
        />

        {/* Badge */}
        {plan.badge && (
          <div className="self-start mb-5 relative z-10">
            <span
              className="text-xs font-black uppercase tracking-widest text-white px-3 py-1.5 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
              }}
            >
              {plan.badge}
            </span>
          </div>
        )}

        {/* Plan name */}
        <h3 className="text-2xl font-black text-gray-900 mb-1 relative z-10">{plan.name}</h3>
        <p className="text-sm text-gray-500 mb-6 relative z-10">{plan.subtitle}</p>

        {/* Price */}
        <div className="flex items-end gap-1 mb-8 relative z-10">
          <span
            className="text-6xl font-black leading-none"
            style={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-gray-400 text-lg font-semibold mb-2">{plan.period}</span>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3 flex-1 mb-8 relative z-10">
          {plan.features.map((feat) => (
            <li
              key={feat}
              className="flex items-start gap-3 text-sm text-gray-700 font-medium"
            >
              {checkIcon}
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={plan.href}
          className="relative z-10 w-full text-center px-6 py-3.5 rounded-full text-white text-sm font-black tracking-wide shadow-brand hover:shadow-brand-lg hover:scale-[1.03] transition-all duration-200 overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
          }}
        >
          <span className="relative z-10">{plan.cta}</span>
          {/* shimmer on hover */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)',
            }}
          />
        </Link>
      </div>
    </div>
  )
}

function BusinessCard({ plan }: { plan: Plan }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300">
      <h3 className="text-xl font-black text-gray-900 mb-1">{plan.name}</h3>
      <p className="text-sm text-gray-500 mb-6">{plan.subtitle}</p>

      <div className="flex items-end gap-1 mb-8">
        <span className="text-5xl font-black text-gray-900 leading-none">{plan.price}</span>
        {plan.period && (
          <span className="text-gray-400 text-lg font-semibold mb-1.5">{plan.period}</span>
        )}
      </div>

      <ul className="space-y-3 flex-1 mb-8">
        {plan.features.map((feat) => (
          <li
            key={feat}
            className="flex items-start gap-3 text-sm text-gray-700 font-medium"
          >
            {checkIcon}
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <Link
        href={plan.href}
        className="w-full text-center px-6 py-3.5 rounded-full bg-gray-900 text-white text-sm font-black tracking-wide hover:bg-violet-700 hover:scale-[1.02] transition-all duration-200"
      >
        {plan.cta}
      </Link>
    </div>
  )
}

function EnterpriseCard({ plan }: { plan: Plan }) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/60 p-8 flex flex-col hover:border-violet-300 hover:bg-violet-50/40 hover:-translate-y-1.5 transition-all duration-300">
      <h3 className="text-xl font-black text-gray-900 mb-1">{plan.name}</h3>
      <p className="text-sm text-gray-500 mb-6">{plan.subtitle}</p>

      <div className="flex items-end gap-1 mb-8">
        <span className="text-5xl font-black text-gray-800 leading-none">{plan.price}</span>
      </div>

      <ul className="space-y-3 flex-1 mb-8">
        {plan.features.map((feat) => (
          <li
            key={feat}
            className="flex items-start gap-3 text-sm text-gray-700 font-medium"
          >
            {checkIcon}
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <Link
        href={plan.href}
        className="w-full text-center px-6 py-3.5 rounded-full border-2 border-violet-600 text-violet-600 text-sm font-black tracking-wide hover:bg-violet-600 hover:text-white hover:scale-[1.02] transition-all duration-200"
      >
        {plan.cta}
      </Link>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-violet-100">
            💸 Simple &amp; Transparent
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Pricing That{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Makes Sense
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-lg mx-auto leading-relaxed">
            No hidden fees. No surprises. Just deals.
          </p>
        </div>

        {/* Pricing cards — Creator card is elevated on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {plans.map((plan) => {
            if (plan.featured) return <FeaturedCard key={plan.id} plan={plan} />
            if (plan.outlined) return <EnterpriseCard key={plan.id} plan={plan} />
            return <BusinessCard key={plan.id} plan={plan} />
          })}
        </div>

        {/* Platform fee note */}
        <div className="mt-14 text-center space-y-2">
          <p className="text-gray-600 text-base max-w-xl mx-auto leading-relaxed">
            Plus a small platform fee on completed paid deals —{' '}
            <span className="font-bold text-gray-800">we only win when you win. 🤝</span>
          </p>
          <p className="text-sm text-gray-400">
            Just{' '}
            <span className="font-bold text-gray-600">2.9%</span> on completed deal payouts.
            No other surprises.
          </p>
        </div>
      </div>
    </section>
  )
}
