const brandItems = [
  'Access to a creator\'s existing, loyal audience — pre-built trust you can\'t buy with an ad',
  'Authentic content produced by someone who genuinely fits your product niche',
  'A trackable affiliate structure — you see what\'s working, deal by deal',
  'Creators with good results become repeat partners, reducing your sourcing effort over time',
  'Full payment protection — you only release funds when you\'re satisfied',
]

const creatorItems = [
  'Their reputation score on Brand2u is built deal by deal — every brand review matters to their career',
  'They only take deals that match their niche — your product fits their content naturally',
  'Transparent contracts mean they know exactly what\'s expected and what they\'ll earn',
  'Strong performance leads to more deal offers — their financial incentive aligns with yours',
  'They\'re building a business, not just posting for a one-time fee',
]

export default function MutualValue() {
  return (
    <section style={{ background: '#14141C', padding: '6rem 2rem' }}>
      <div className="max-w-[1100px] mx-auto">
        <span
          className="block text-[11px] font-semibold tracking-[0.16em] uppercase mb-4"
          style={{ color: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
        >
          Mutual &amp; positive
        </span>
        <h2
          className="font-black leading-[1.1] mb-4"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            letterSpacing: '-1px',
          }}
        >
          Both sides win.
          <br />
          <em className="not-italic" style={{ color: '#FF4D6D' }}>That&apos;s the model.</em>
        </h2>
        <p
          className="text-base leading-relaxed mb-14 max-w-[540px]"
          style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}
        >
          Brand2u is designed so that every successful deal makes both the brand and the creator want to do it again. Aligned incentives drive better outcomes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* For your brand */}
          <div
            className="rounded-[20px] p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(255,77,109,0.1), rgba(255,77,109,0.04))',
              border: '1px solid rgba(255,77,109,0.2)',
            }}
          >
            <div
              className="font-bold text-xl mb-1"
              style={{ fontFamily: 'var(--font-syne)', color: '#FF4D6D' }}
            >
              For your brand
            </div>
            <div className="text-sm mb-7" style={{ color: 'rgba(255,255,255,0.4)' }}>
              What you get from every successful collaboration
            </div>
            {brandItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                <div
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                  style={{ background: '#FF4D6D' }}
                />
                <span>{item}</span>
              </div>
            ))}
            <div
              className="mt-7 pt-6 text-sm leading-relaxed italic"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              &ldquo;The most expensive creator deal is one that doesn&apos;t perform. Brand2u verifies engagement upfront so you&apos;re not guessing.&rdquo;
            </div>
          </div>

          {/* For the creator */}
          <div
            className="rounded-[20px] p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(123,47,255,0.1), rgba(123,47,255,0.04))',
              border: '1px solid rgba(123,47,255,0.2)',
            }}
          >
            <div
              className="font-bold text-xl mb-1"
              style={{ fontFamily: 'var(--font-syne)', color: '#7B2FFF' }}
            >
              For the creator
            </div>
            <div className="text-sm mb-7" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Why creators are motivated to deliver for your brand
            </div>
            {creatorItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                <div
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                  style={{ background: '#7B2FFF' }}
                />
                <span>{item}</span>
              </div>
            ))}
            <div
              className="mt-7 pt-6 text-sm leading-relaxed italic"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              &ldquo;A motivated creator who actually uses products like yours outperforms a paid placement every time.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
