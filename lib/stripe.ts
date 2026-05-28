import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? 'sk_test_placeholder', {
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
    name: 'Brand Standard',
    price: '$49',
    interval: 'month',
    priceId: process.env.STRIPE_PRICE_BUSINESS_MONTHLY!,
    description: 'Full marketplace access for brands',
  },
  brand_pro: {
    name: 'Brand Pro',
    price: '$99',
    interval: 'month',
    priceId: process.env.STRIPE_PRICE_BRAND_PRO_MONTHLY!,
    description: 'Unlimited campaigns + AI matching',
  },
} as const

export type PlanKey = keyof typeof PLANS

export const PLATFORM_FEE_PERCENT = Number(process.env.NEXT_PUBLIC_PLATFORM_FEE ?? 0.09)

export function calculateDealFee(dealAmountCents: number) {
  const fee = Math.round(dealAmountCents * PLATFORM_FEE_PERCENT)
  const payout = dealAmountCents - fee
  return { fee, payout, feePercent: PLATFORM_FEE_PERCENT * 100 }
}
