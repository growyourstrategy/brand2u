import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2026-04-22.dahlia',
  typescript: true,
})

export const PLANS = {
  creator: {
    name: 'Creator',
    price: '$10',
    interval: 'month',
    priceId: process.env.STRIPE_PRICE_CREATOR_MONTHLY!,
    description: 'For creators ready to monetize',
  },
  business: {
    name: 'Business',
    price: '$49',
    interval: 'month',
    priceId: process.env.STRIPE_PRICE_BUSINESS_MONTHLY!,
    description: 'For brands serious about UGC',
  },
} as const

export type PlanKey = keyof typeof PLANS

export const PLATFORM_FEE_PERCENT = Number(process.env.NEXT_PUBLIC_PLATFORM_FEE ?? 0.029)

export function calculateDealFee(dealAmountCents: number) {
  const fee = Math.round(dealAmountCents * PLATFORM_FEE_PERCENT)
  const payout = dealAmountCents - fee
  return { fee, payout, feePercent: PLATFORM_FEE_PERCENT * 100 }
}
