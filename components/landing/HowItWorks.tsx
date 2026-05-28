const steps = [
  {
    title: 'Create your brand profile',
    body: "Set up your brand page in minutes — add your product, what you're selling, what kind of creator you're looking for, and the campaign budget. No account manager needed. No approval process.",
    time: '⏱ 15 minutes',
    accentColor: '#FF4D6D',
    accentBg: 'rgba(255,77,109,0.15)',
    accentBorder: 'rgba(255,77,109,0.3)',
  },
  {
    title: 'Search and filter verified creators',
    body: "Browse by niche, platform, follower range, and — most importantly — engagement rate. Every profile shows real data pulled live from the creator's connected accounts. No guessing, no fakes.",
    time: '⏱ 30 minutes to find the right fit',
    accentColor: '#7B2FFF',
    accentBg: 'rgba(123,47,255,0.15)',
    accentBorder: 'rgba(123,47,255,0.3)',
  },
  {
    title: 'Send a contract offer',
    body: 'Use the built-in contract builder to set the deliverables, timeline, rate, and campaign length. The creator reviews and signs. Everything is documented, legally clear, and stored in the platform.',
    time: '⏱ 10 minutes per contract',
    accentColor: '#00C9A7',
    accentBg: 'rgba(0,201,167,0.15)',
    accentBorder: 'rgba(0,201,167,0.3)',
  },
  {
    title: 'Creator delivers, you confirm',
    body: "The creator posts the content. You review it. Once you confirm delivery, the escrow funds release automatically. If there's an issue, you have a 5-day dispute window — Brand2u mediates.",
    time: '⏱ Zero admin — fully automated',
    accentColor: '#FF4D6D',
    accentBg: 'rgba(255,77,109,0.15)',
    accentBorder: 'rgba(255,77,109,0.3)',
  },
  {
    title: 'Track results and scale',
    body: 'Your campaign dashboard shows performance across all active creator deals. See what\'s working, rate the creator, and either renew their contract or find your next one. The ROI compounds with every deal.',
    time: '⏱ Ongoing — always improving',
    accentColor: '#7B2FFF',
    accentBg: 'rgba(123,47,255,0.15)',
    accentBorder: 'rgba(123,47,255,0.3)',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: '#0A0A0F', padding: '6rem 2rem' }}>
      <div className="max-w-[1100px] mx-auto">
        <span
          className="block text-[11px] font-semibold tracking-[0.16em] uppercase mb-4"
          style={{ color: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
        >
          How it works
        </span>
        <h2
          className="font-black leading-[1.1] mb-4"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            letterSpacing: '-1px',
          }}
        >
          From sign-up to live campaign
          <br />in{' '}
          <em className="not-italic" style={{ color: '#FF4D6D' }}>under a day</em>
        </h2>
        <p
          className="text-base leading-relaxed mb-14 max-w-[540px]"
          style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}
        >
          Your team can have Brand2u set up, a campaign live, and creators responding before end of business on day one.
        </p>

        <div className="relative flex flex-col">
          {/* Vertical timeline line */}
          <div
            className="absolute hidden md:block"
            style={{
              left: '27px',
              top: '40px',
              bottom: '40px',
              width: '1px',
              background: 'linear-gradient(to bottom, #FF4D6D, #7B2FFF, #00C9A7)',
            }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div
              key={i}
              className="grid grid-cols-[56px_1fr] gap-8 py-8 items-start"
              style={{
                borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}
            >
              <div
                className="relative z-10 w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center font-black text-[1.1rem]"
                style={{
                  background: step.accentBg,
                  color: step.accentColor,
                  border: `1px solid ${step.accentBorder}`,
                  fontFamily: 'var(--font-syne)',
                }}
              >
                {i + 1}
              </div>

              <div className="pt-3">
                <h4
                  className="font-bold text-[1.15rem] mb-2"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {step.title}
                </h4>
                <p className="text-sm leading-relaxed max-w-[560px] mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {step.body}
                </p>
                <span
                  className="text-[0.78rem] font-semibold tracking-[0.06em] uppercase"
                  style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-syne)' }}
                >
                  {step.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
