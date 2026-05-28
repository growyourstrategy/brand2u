const cards = [
  {
    icon: '💸',
    title: 'Direct cost savings',
    body: 'Platform fees of $49–$99/month replace $1,500–$2,000+/month agency retainers. A brand running 5 creators/month at $500 each saves over $2,700 every month compared to going through a traditional platform.',
    metric: 'Up to 97%',
    metricLabel: 'reduction in platform fees',
    accent: '#FF4D6D',
    accentBg: 'rgba(255,77,109,0.15)',
    topBar: '#FF4D6D',
  },
  {
    icon: '🎯',
    title: 'Better audience targeting',
    body: 'Every creator on Brand2u is sorted by niche and verified engagement rate — not just follower count. You reach the exact audience that buys your product, through creators your audience already trusts.',
    metric: 'Real engagement',
    metricLabel: 'not inflated follower counts',
    accent: '#7B2FFF',
    accentBg: 'rgba(123,47,255,0.15)',
    topBar: '#7B2FFF',
  },
  {
    icon: '🔄',
    title: 'New audiences, mutual growth',
    body: 'Each creator brings their own established community — audiences you wouldn\'t reach through ads. As creators succeed with your brand, they share results and repeat. It\'s a positive loop: their growth is your growth.',
    metric: 'Compounding',
    metricLabel: 'audience reach over time',
    accent: '#00C9A7',
    accentBg: 'rgba(0,201,167,0.15)',
    topBar: '#00C9A7',
  },
]

export default function ROIBreakdown() {
  return (
    <section style={{ background: '#14141C', padding: '6rem 2rem' }}>
      <div className="max-w-[1100px] mx-auto">
        <span
          className="block text-[11px] font-semibold tracking-[0.16em] uppercase mb-4"
          style={{ color: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
        >
          Why it works
        </span>
        <h2
          className="font-black leading-[1.1] mb-4"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            letterSpacing: '-1px',
          }}
        >
          Three types of{' '}
          <em className="not-italic" style={{ color: '#FF4D6D' }}>ROI</em>
          <br />in one platform
        </h2>
        <p
          className="text-base leading-relaxed mb-14 max-w-[540px]"
          style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}
        >
          Brand2u doesn&apos;t just save you money on fees — it unlocks returns that agencies can&apos;t offer you at any price.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-[18px] p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,77,109,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: card.topBar }}
              />

              <div className="text-[1.8rem] mb-4">{card.icon}</div>
              <h4
                className="font-bold text-[1.05rem] mb-2"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {card.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {card.body}
              </p>

              <div
                className="mt-5 pt-5"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="font-bold text-[1.4rem]"
                  style={{ fontFamily: 'var(--font-syne)', color: card.accent }}
                >
                  {card.metric}
                </div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {card.metricLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
