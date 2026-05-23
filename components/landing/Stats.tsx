const stats = [
  {
    value: '$2.4M+',
    label: 'Paid to Creators',
    gradient: 'from-violet-400 to-purple-500',
  },
  {
    value: '18,000+',
    label: 'Deals Closed',
    gradient: 'from-pink-400 to-rose-500',
  },
  {
    value: '1,500+',
    label: 'Active Brands',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    value: '4.9★',
    label: 'Creator Rating',
    gradient: 'from-emerald-400 to-teal-500',
  },
]

export default function Stats() {
  return (
    <section className="bg-[#0F0F1A] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative flex flex-col items-center text-center px-6 py-8">
              {/* Vertical divider — hidden on mobile, shown between items on desktop */}
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              )}
              {/* Mobile divider between first two and second two */}
              {index === 2 && (
                <div className="lg:hidden absolute left-1/2 -translate-x-1/2 -top-px w-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              )}

              {/* Big stat value */}
              <span
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}
              >
                {stat.value}
              </span>

              {/* Label */}
              <span className="mt-2 text-sm sm:text-base font-medium text-white/60 tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
