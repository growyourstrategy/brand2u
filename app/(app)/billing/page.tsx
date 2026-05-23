'use client'

import { useState } from 'react'
import Link from 'next/link'

const currentPlan = {
  name: 'Creator',
  price: '$10',
  interval: 'month',
  status: 'active',
  trialEnds: null as string | null,
  nextBilling: 'June 23, 2025',
  amount: 10,
  cardLast4: '4242',
  cardBrand: 'Visa',
}

const invoices = [
  { id: 'inv_001', date: 'May 23, 2025', amount: '$10.00', status: 'Paid', plan: 'Creator Monthly' },
  { id: 'inv_002', date: 'Apr 23, 2025', amount: '$10.00', status: 'Paid', plan: 'Creator Monthly' },
  { id: 'inv_003', date: 'Mar 23, 2025', amount: '$10.00', status: 'Paid', plan: 'Creator Monthly' },
]

const dealFees = [
  { deal: 'LUSH Cosmetics — UGC Video x2', date: 'May 18, 2025', total: '$2,400', fee: '$69.60', payout: '$2,330.40' },
  { deal: 'FabFitFun — Unboxing Reel', date: 'Apr 30, 2025', total: '$850', fee: '$24.65', payout: '$825.35' },
  { deal: 'HelloFresh — Recipe Reel', date: 'Mar 22, 2025', total: '$1,200', fee: '$34.80', payout: '$1,165.20' },
]

export default function BillingPage() {
  const [loading, setLoading] = useState(false)
  const [upgrading, setUpgrading] = useState(false)

  async function openPortal() {
    setLoading(true)
    try {
      const res = await fetch('/api/stripe/portal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customerId: 'cus_placeholder' }),
      })
      const { url } = await res.json()
      if (url) window.location.href = url
    } finally {
      setLoading(false)
    }
  }

  async function upgradeToBusiness() {
    setUpgrading(true)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: 'business' }),
      })
      const { url } = await res.json()
      if (url) window.location.href = url
    } finally {
      setUpgrading(false)
    }
  }

  return (
    <div className="px-4 md:px-8 py-6 max-w-3xl space-y-6">

      {/* Current plan card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
        <div className="bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-violet-200 text-xs font-medium uppercase tracking-wider">Current Plan</p>
            <h2 className="text-white text-xl font-black">{currentPlan.name}</h2>
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-white">{currentPlan.price}</div>
            <div className="text-violet-200 text-xs">per {currentPlan.interval}</div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-500 mb-0.5">Status</div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-sm font-semibold text-gray-900 capitalize">{currentPlan.status}</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-500 mb-0.5">Next billing</div>
              <div className="text-sm font-semibold text-gray-900">{currentPlan.nextBilling}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-500 mb-0.5">Payment method</div>
              <div className="text-sm font-semibold text-gray-900">{currentPlan.cardBrand} ····{currentPlan.cardLast4}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={openPortal}
              disabled={loading}
              className="flex-1 border border-gray-200 text-gray-700 font-semibold text-sm py-2.5 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-60"
            >
              {loading ? 'Opening portal...' : '⚙️ Manage Billing'}
            </button>
            <button
              onClick={upgradeToBusiness}
              disabled={upgrading}
              className="flex-1 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold text-sm py-2.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 shadow-lg shadow-violet-200"
            >
              {upgrading ? 'Redirecting...' : '🚀 Upgrade to Business — $49/mo'}
            </button>
          </div>
        </div>
      </div>

      {/* Upgrade card */}
      <div className="bg-gradient-to-br from-violet-50 to-pink-50 rounded-2xl border border-violet-100 p-6">
        <div className="flex items-start gap-4">
          <div className="text-3xl">💼</div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-1">Upgrade to Business</h3>
            <p className="text-sm text-gray-600 mb-3">
              Post unlimited campaigns, search the full creator marketplace, get advanced analytics, and a dedicated account manager.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Unlimited campaigns', 'Creator search', 'Advanced analytics', 'Account manager', 'Priority support'].map((f) => (
                <span key={f} className="text-xs bg-white text-violet-700 border border-violet-100 px-2.5 py-1 rounded-full font-medium">✓ {f}</span>
              ))}
            </div>
            <button
              onClick={upgradeToBusiness}
              disabled={upgrading}
              className="bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {upgrading ? 'Redirecting...' : 'Upgrade for $49/mo →'}
            </button>
          </div>
        </div>
      </div>

      {/* Platform fee explanation */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6">
        <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
          🤝 Platform Deal Fee
          <span className="text-xs bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full font-semibold">2.9%</span>
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          A 2.9% fee is taken on each completed paid brand deal. We only win when you win.
        </p>

        <div className="space-y-3">
          <div className="grid grid-cols-4 text-xs font-semibold uppercase tracking-wide text-gray-400 pb-2 border-b border-gray-100">
            <span className="col-span-2">Deal</span>
            <span className="text-right">Platform fee</span>
            <span className="text-right">Your payout</span>
          </div>
          {dealFees.map((d) => (
            <div key={d.deal} className="grid grid-cols-4 items-center">
              <div className="col-span-2">
                <div className="text-sm font-medium text-gray-800 truncate pr-2">{d.deal}</div>
                <div className="text-xs text-gray-400">{d.date} · {d.total}</div>
              </div>
              <div className="text-sm text-right text-gray-500 font-medium">{d.fee}</div>
              <div className="text-sm text-right font-bold text-emerald-600">{d.payout}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription invoices */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Invoice History</h3>
          <button
            onClick={openPortal}
            className="text-sm text-violet-600 font-medium hover:text-violet-700"
          >
            View all in portal →
          </button>
        </div>
        <div className="space-y-3">
          {invoices.map((inv) => (
            <div key={inv.id} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
              <div>
                <div className="text-sm font-medium text-gray-800">{inv.plan}</div>
                <div className="text-xs text-gray-400">{inv.date}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-800">{inv.amount}</span>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">{inv.status}</span>
                <button className="text-xs text-violet-500 hover:text-violet-700">PDF</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cancel */}
      <div className="text-center">
        <button
          onClick={openPortal}
          className="text-sm text-gray-400 hover:text-red-500 transition-colors"
        >
          Cancel subscription
        </button>
        <p className="text-xs text-gray-400 mt-1">You keep access until the end of your billing period.</p>
      </div>
    </div>
  )
}
