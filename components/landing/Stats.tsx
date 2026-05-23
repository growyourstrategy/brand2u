export default function Stats() {
  return (
    <section className="bg-[#0F0F1A] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-white/70 text-base font-semibold"
          style={{
            background: 'rgba(255,255,255,0.05)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          Now in private beta — accepting founding members
        </div>
      </div>
    </section>
  )
}
