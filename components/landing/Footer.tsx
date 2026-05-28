export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between flex-wrap gap-4 px-8 md:px-12 py-12"
      style={{
        background: '#14141C',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div>
        <div
          className="font-bold text-[1.1rem] text-white"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          brand<span style={{ color: '#FF4D6D' }}>2</span>u
        </div>
        <div className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Where Influence Meets Opportunity.
        </div>
      </div>

      <div className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
        © {new Date().getFullYear()} Brand2u · hello@brand2u.com
      </div>
    </footer>
  )
}
