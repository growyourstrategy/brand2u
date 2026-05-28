const oldWayItems = [
  '$1,500–$2,000+/month platform fees before any creators are paid',
  'No way to verify creator engagement — follower counts are easily faked',
  'Manual contracts, invoice chasing, and payment disputes',
  'Months of onboarding before your first campaign goes live',
  'No self-serve option — you need an account manager for everything',
  'Built for enterprise clients, not startups or DTC brands',
]

const newWayItems = [
  '$49/month for full marketplace access — or $99 for unlimited campaigns',
  'Every creator\'s real engagement rate pulled live from their actual accounts',
  'Built-in contracts and escrow — funds release only when you confirm delivery',
  'Set up your brand profile and post your first campaign in under an hour',
  'Fully self-serve — you\'re in control of every deal and every dollar',
  'Purpose-built for startups, DTC brands, and small businesses',
]

export default function VSSection() {
  return (
    <section style={{ background: '#14141C', padding: '6rem 2rem' }}>
      <div className="max-w-[1100px] mx-auto">
        <span
          className="block text-[11px] font-semibold tracking-[0.16em] uppercase mb-4"
          style={{ color: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
        >
          The comparison
        </span>
        <h2
          className="font-black leading-[1.1] mb-4"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            letterSpacing: '-1px',
          }}
        >
          What you&apos;re{' '}
          <em className="not-italic" style={{ color: '#FF4D6D' }}>paying now</em>
          <br />vs. what you could be
        </h2>
        <p
          className="text-base leading-relaxed mb-14 max-w-[540px]"
          style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}
        >
          Traditional influencer marketing is built for Fortune 500 budgets. Brand2u is built for brands that are actually building something.
        </p>

        {/* VS grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 items-stretch">
          {/* Old way */}
          <div
            className="rounded-[20px] p-10"
            style={{
              border: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <span
              className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-6"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.4)',
                fontFamily: 'var(--font-syne)',
              }}
            >
              Traditional agencies / platforms
            </span>
            <h3
              className="font-bold text-xl mb-7"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              The old way
            </h3>
            {oldWayItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <div
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] mt-0.5"
                  style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}
                >
                  ✗
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* VS divider */}
          <div className="hidden md:flex items-center justify-center px-6">
            <span
              className="font-black text-lg tracking-[0.1em]"
              style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-syne)' }}
            >
              VS
            </span>
          </div>

          {/* Brand2u way */}
          <div
            className="rounded-[20px] p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(255,77,109,0.12), rgba(123,47,255,0.08))',
              border: '1px solid rgba(255,77,109,0.25)',
            }}
          >
            <span
              className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-6"
              style={{
                background: 'rgba(255,77,109,0.2)',
                color: '#FF4D6D',
                fontFamily: 'var(--font-syne)',
              }}
            >
              Brand2u
            </span>
            <h3
              className="font-bold text-xl mb-7"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              The Brand2u way
            </h3>
            {newWayItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                <div
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] mt-0.5"
                  style={{ background: 'rgba(0,201,167,0.2)', color: '#00C9A7' }}
                >
                  ✓
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
