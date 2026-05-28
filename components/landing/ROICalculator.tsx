'use client'

import { useState, useCallback } from 'react'

function fmt(n: number) {
  return '$' + Math.round(n).toLocaleString()
}

export default function ROICalculator() {
  const [creators, setCreators] = useState(5)
  const [contract, setContract] = useState(500)
  const [current, setCurrent] = useState(3000)
  const [plan, setPlan] = useState(49)

  const creatorSpend = creators * contract
  const platformFee = creatorSpend * 0.09
  const totalBrand2u = plan + creatorSpend + platformFee
  const agencyEquiv = 1500 + creators * contract * 1.15
  const savings = Math.max(0, agencyEquiv - totalBrand2u)
  const roiPct = Math.max(0, Math.round((savings / agencyEquiv) * 100))
  const annualSavings = Math.max(0, savings * 12)

  return (
    <section id="calculator" style={{ background: '#0A0A0F', padding: '6rem 2rem' }}>
      <div className="max-w-[1100px] mx-auto">
        <span
          className="block text-[11px] font-semibold tracking-[0.16em] uppercase mb-4"
          style={{ color: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
        >
          ROI calculator
        </span>
        <h2
          className="font-black leading-[1.1] mb-4"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            letterSpacing: '-1px',
          }}
        >
          See your numbers{' '}
          <em className="not-italic" style={{ color: '#FF4D6D' }}>before</em>
          <br />you commit to anything
        </h2>
        <p
          className="text-base leading-relaxed mb-12 max-w-[540px]"
          style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}
        >
          Adjust the inputs to match your situation. The math speaks for itself.
        </p>

        {/* Calculator wrapper */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: '#14141C',
            border: '1px solid rgba(255,77,109,0.2)',
          }}
        >
          {/* Header */}
          <div
            className="px-10 py-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255,77,109,0.15), rgba(123,47,255,0.1))',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <h3 className="font-bold text-xl mb-1" style={{ fontFamily: 'var(--font-syne)' }}>
              Your Brand2u ROI Estimator
            </h3>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Based on average deal sizes and conversion rates on the platform
            </p>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
            {/* Inputs */}
            <div className="flex flex-col gap-6">
              {/* Creators slider */}
              <div>
                <label
                  className="block text-xs font-semibold tracking-[0.08em] uppercase mb-2"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-syne)' }}
                >
                  Creators you plan to work with per month
                </label>
                <div className="relative pt-6">
                  <span
                    className="absolute right-0 top-0 text-sm font-bold"
                    style={{ color: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
                  >
                    {creators}
                  </span>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={creators}
                    onChange={e => setCreators(+e.target.value)}
                    className="w-full h-1 rounded cursor-pointer appearance-none"
                    style={{ background: 'rgba(255,255,255,0.1)', accentColor: '#FF4D6D' }}
                  />
                </div>
              </div>

              {/* Contract value slider */}
              <div>
                <label
                  className="block text-xs font-semibold tracking-[0.08em] uppercase mb-2"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-syne)' }}
                >
                  Average contract value per creator ($)
                </label>
                <div className="relative pt-6">
                  <span
                    className="absolute right-0 top-0 text-sm font-bold"
                    style={{ color: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
                  >
                    {fmt(contract)}
                  </span>
                  <input
                    type="range"
                    min={100}
                    max={5000}
                    step={50}
                    value={contract}
                    onChange={e => setContract(+e.target.value)}
                    className="w-full h-1 rounded cursor-pointer appearance-none"
                    style={{ background: 'rgba(255,255,255,0.1)', accentColor: '#FF4D6D' }}
                  />
                </div>
              </div>

              {/* Current spend slider */}
              <div>
                <label
                  className="block text-xs font-semibold tracking-[0.08em] uppercase mb-2"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-syne)' }}
                >
                  Your current monthly marketing spend
                </label>
                <div className="relative pt-6">
                  <span
                    className="absolute right-0 top-0 text-sm font-bold"
                    style={{ color: '#FF4D6D', fontFamily: 'var(--font-syne)' }}
                  >
                    {fmt(current)}
                  </span>
                  <input
                    type="range"
                    min={500}
                    max={20000}
                    step={500}
                    value={current}
                    onChange={e => setCurrent(+e.target.value)}
                    className="w-full h-1 rounded cursor-pointer appearance-none"
                    style={{ background: 'rgba(255,255,255,0.1)', accentColor: '#FF4D6D' }}
                  />
                </div>
              </div>

              {/* Plan selector */}
              <div>
                <label
                  className="block text-xs font-semibold tracking-[0.08em] uppercase mb-2"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-syne)' }}
                >
                  Brand plan
                </label>
                <select
                  value={plan}
                  onChange={e => setPlan(+e.target.value)}
                  className="w-full rounded-[10px] px-4 py-3 text-white text-base outline-none transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontFamily: 'var(--font-dm-sans)',
                  }}
                >
                  <option value={49} style={{ background: '#1a1a22' }}>Brand Standard — $49/month</option>
                  <option value={99} style={{ background: '#1a1a22' }}>Brand Pro — $99/month</option>
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-3">
              <ResultCard label="Monthly creator spend (contracts)" value={fmt(creatorSpend)} note="Creator contracts + 9% platform fee" />
              <ResultCard label="Total monthly cost on Brand2u" value={fmt(totalBrand2u)} valueColor="#FF4D6D" note="Subscription + contract fees combined" />
              <ResultCard label="vs. agency equivalent cost" value={fmt(agencyEquiv)} note="Agency avg: $1,500/mo platform + per-creator fees" />
              <ResultCard
                label="Your monthly savings"
                value={fmt(savings)}
                valueColor="#00C9A7"
                note={`That's ${roiPct}% savings vs traditional approach`}
                highlight
              />
              <ResultCard label="Annual savings" value={fmt(annualSavings)} valueColor="#FF4D6D" note="Redirectable to more creator campaigns" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResultCard({
  label,
  value,
  valueColor,
  note,
  highlight,
}: {
  label: string
  value: string
  valueColor?: string
  note: string
  highlight?: boolean
}) {
  return (
    <div
      className="rounded-2xl px-6 py-5"
      style={{
        background: highlight
          ? 'linear-gradient(135deg, rgba(255,77,109,0.12), rgba(123,47,255,0.08))'
          : 'rgba(255,255,255,0.04)',
        border: highlight ? '1px solid rgba(255,77,109,0.3)' : '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div
        className="text-[11px] uppercase tracking-[0.08em] mb-1 font-semibold"
        style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-syne)' }}
      >
        {label}
      </div>
      <div
        className="font-black text-[1.9rem] leading-none"
        style={{ fontFamily: 'var(--font-syne)', color: valueColor ?? '#ffffff' }}
      >
        {value}
      </div>
      <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
        {note}
      </div>
    </div>
  )
}
