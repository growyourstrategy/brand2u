interface Feature {
  icon: string
  title: string
  description: string
  gradient: string
  iconBg: string
}

const features: Feature[] = [
  {
    icon: '🔔',
    title: 'Smart Deal Alerts',
    description:
      'Get notified the moment a brand that matches your vibe posts a campaign. First in, first win.',
    gradient: 'from-violet-500 to-purple-600',
    iconBg: 'from-violet-50 to-purple-100',
  },
  {
    icon: '💬',
    title: 'Built-in Messaging',
    description:
      'Negotiate rates, ask questions, and close deals without ever leaving the platform.',
    gradient: 'from-pink-500 to-rose-500',
    iconBg: 'from-pink-50 to-rose-100',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description:
      'Track your earnings, deal pipeline, and engagement metrics in real time.',
    gradient: 'from-amber-400 to-orange-500',
    iconBg: 'from-amber-50 to-orange-100',
  },
  {
    icon: '✍️',
    title: 'Digital Contracts',
    description:
      'Sign legally-binding deal agreements in seconds. No more email chains.',
    gradient: 'from-emerald-400 to-teal-500',
    iconBg: 'from-emerald-50 to-teal-100',
  },
  {
    icon: '💳',
    title: 'Instant Payouts',
    description:
      'Get paid within 24 hours of content approval. Your money, on your timeline.',
    gradient: 'from-blue-500 to-indigo-500',
    iconBg: 'from-blue-50 to-indigo-100',
  },
  {
    icon: '⭐',
    title: 'Verified Reviews',
    description:
      'Build your rep with verified brand reviews. Stand out from the crowd.',
    gradient: 'from-fuchsia-500 to-violet-500',
    iconBg: 'from-fuchsia-50 to-violet-100',
  },
]

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="group bg-white rounded-2xl shadow-card p-6 flex flex-col gap-4 hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300 cursor-default">
      {/* Icon container */}
      <div
        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.iconBg} group-hover:scale-110 transition-transform duration-300`}
      >
        <span className="text-2xl leading-none">{feature.icon}</span>
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-1.5">{feature.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
      </div>

      {/* Bottom gradient accent bar */}
      <div
        className={`mt-auto h-1 w-10 rounded-full bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500`}
      />
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="bg-violet-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-100 to-pink-100 text-violet-700 text-sm font-semibold tracking-wide uppercase mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-violet-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
              Win
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            One platform. Every tool you need to find brands, close deals, and get paid — without the chaos.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
