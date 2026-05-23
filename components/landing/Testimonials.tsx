'use client'

interface Testimonial {
  id: number
  name: string
  role: string
  followers: string
  initials: string
  avatarGradient: string
  quote: string
  stars: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alyssa M.',
    role: 'Lifestyle Creator',
    followers: '45K followers',
    initials: 'AM',
    avatarGradient: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
    quote:
      "Landed my first $3K brand deal within 2 weeks. The platform makes it so easy to find brands that actually fit my vibe. WE GOT A DEAL bestie!",
    stars: 5,
  },
  {
    id: 2,
    name: 'Marcus T.',
    role: 'Tech Reviewer',
    followers: '128K followers',
    initials: 'MT',
    avatarGradient: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
    quote:
      "Went from $500/month in brand deals to $8K/month in 3 months. The matching is scary good.",
    stars: 5,
  },
  {
    id: 3,
    name: 'Sophie R.',
    role: 'Beauty & Skincare',
    followers: '67K followers',
    initials: 'SR',
    avatarGradient: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
    quote:
      "Finally a platform where brands take creators seriously. Got 4 deals in my first month.",
    stars: 5,
  },
  {
    id: 4,
    name: 'Jake B.',
    role: 'Fitness Creator',
    followers: '89K followers',
    initials: 'JB',
    avatarGradient: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
    quote:
      "The contract templates alone saved me hours. And getting paid in 24hrs? Game changer.",
    stars: 5,
  },
  {
    id: 5,
    name: 'Priya K.',
    role: 'Food & Lifestyle',
    followers: '34K followers',
    initials: 'PK',
    avatarGradient: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)',
    quote:
      "Even as a micro-creator I'm landing deals. brand2u gets it — engagement > follower count.",
    stars: 5,
  },
  {
    id: 6,
    name: 'Carlos D.',
    role: 'Gaming Creator',
    followers: '201K followers',
    initials: 'CD',
    avatarGradient: 'linear-gradient(135deg, #7C3AED 0%, #10B981 100%)',
    quote:
      "Closed a $12K deal with a gaming brand last week. This platform prints money lol.",
    stars: 5,
  },
]

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400 fill-current"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 p-6 flex flex-col gap-4 relative overflow-hidden h-full">
      {/* Decorative large open-quote mark */}
      <span
        className="absolute top-3 right-4 text-8xl font-black leading-none select-none pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          opacity: 0.1,
          fontFamily: 'Georgia, serif',
        }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Stars */}
      <StarRow count={t.stars} />

      {/* Quote body */}
      <p className="text-gray-700 text-sm leading-relaxed italic flex-1 relative z-10">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author row */}
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100 relative z-10">
        {/* Gradient initials avatar */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-black shrink-0 shadow-sm"
          style={{ background: t.avatarGradient }}
          aria-hidden="true"
        >
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900 leading-tight">{t.name}</p>
          <p className="text-xs text-gray-400 font-medium leading-tight mt-0.5">
            {t.role} &middot; {t.followers}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 3)
  const row2 = testimonials.slice(3, 6)

  return (
    <section id="testimonials" className="py-28 bg-gray-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="absolute -top-20 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-pink-100">
            ⭐ Creator Love
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
            Real Creators.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Real Deals.
            </span>{' '}
            Real Results.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t take our word for it — hear from creators who are actually making money.
          </p>
        </div>

        {/* Desktop: 3-column grid, 2 rows */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>

        {/* Mobile: two horizontal scroll rows */}
        <div className="md:hidden flex flex-col gap-4">
          {/* Row 1 */}
          <div
            className="flex gap-4 overflow-x-auto pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {row1.map((t) => (
              <div key={t.id} className="min-w-[300px] max-w-[300px] flex">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
          {/* Row 2 — offset for visual stagger */}
          <div
            className="flex gap-4 overflow-x-auto pb-2 pl-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {row2.map((t) => (
              <div key={t.id} className="min-w-[300px] max-w-[300px] flex">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stat bar */}
        <div className="mt-20 grid grid-cols-3 gap-6 sm:gap-10 max-w-2xl mx-auto text-center">
          {[
            { value: '10K+', label: 'Active Creators' },
            { value: '$2.4M+', label: 'Deals Closed' },
            { value: '4.9/5', label: 'Creator Rating' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <p
                className="text-3xl sm:text-4xl font-black leading-none"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
