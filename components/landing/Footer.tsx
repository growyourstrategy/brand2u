import Link from 'next/link'

// ─── Social icon SVGs ─────────────────────────────────────────────────────────

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconTikTok() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04Z" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  heading: string
  links: FooterLink[]
}

const footerColumns: FooterColumn[] = [
  {
    heading: 'Product',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Dashboard', href: '/dashboard' },
    ],
  },
  {
    heading: 'For Creators',
    links: [
      { label: 'Get Started', href: '/dashboard' },
      { label: 'Find Brands', href: '/dashboard' },
      { label: 'Creator Tips', href: '/blog' },
      { label: 'Success Stories', href: '#testimonials' },
    ],
  },
  {
    heading: 'For Brands',
    links: [
      { label: 'Post a Campaign', href: '/dashboard?mode=brand' },
      { label: 'Find Creators', href: '/dashboard?mode=brand' },
      { label: 'Brand Resources', href: '/blog' },
      { label: 'Case Studies', href: '/blog' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Contact', href: 'mailto:hello@brand2u.co' },
    ],
  },
]

const socialLinks = [
  { label: 'Twitter / X', href: 'https://twitter.com/brand2u', Icon: IconX },
  { label: 'Instagram', href: 'https://instagram.com/brand2u', Icon: IconInstagram },
  { label: 'TikTok', href: 'https://tiktok.com/@brand2u', Icon: IconTikTok },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/brand2u', Icon: IconLinkedIn },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-[#0F0F1A] text-white">
      {/* Gradient top edge */}
      <div
        className="h-px w-full opacity-30"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #7C3AED 30%, #EC4899 60%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Main grid: brand col + 4 link cols */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand / logo column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            {/* Logo wordmark */}
            <Link href="/" className="inline-block w-fit group">
              <span
                className="text-2xl font-black tracking-tight transition-opacity duration-200 group-hover:opacity-80"
                style={{
                  background: 'linear-gradient(135deg, #A78BFA 0%, #EC4899 50%, #F59E0B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                brand2u
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
              Where creators &amp; brands fall in love 💜
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-violet-500/40 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500 mb-4">
                  {col.heading}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-150 font-medium"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px bg-white/[0.07]" />

        {/* Bottom bar */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 font-medium order-2 sm:order-1">
            &copy; 2025 brand2u. Made with 💜 for creators everywhere.
          </p>

          <div className="flex items-center gap-5 order-1 sm:order-2">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-150 font-medium"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-700 text-xs select-none" aria-hidden="true">
              ·
            </span>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-150 font-medium"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
