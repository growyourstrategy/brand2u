export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-gray-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="absolute -top-20 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
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

          {/* Placeholder */}
          <div className="mt-12 max-w-xl mx-auto border-2 border-dashed border-violet-200 rounded-3xl px-8 py-14 flex flex-col items-center gap-4 bg-white">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-100 to-pink-100 flex items-center justify-center text-3xl">
              💜
            </div>
            <p className="text-xl font-black text-gray-800">Founding cohort coming soon</p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              We&apos;re onboarding our first wave of creators. Be one of the first — your story goes here.
            </p>
            <a
              href="/dashboard"
              className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-bold"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}
            >
              Join the founding cohort ✨
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
