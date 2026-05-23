import { NextRequest, NextResponse } from 'next/server'
import { stripe, calculateDealFee } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const { dealId, amountCents, creatorId, brandId, dealTitle } =
      await req.json() as {
        dealId: string
        amountCents: number
        creatorId: string
        brandId: string
        dealTitle: string
      }

    if (!dealId || !amountCents || amountCents < 100) {
      return NextResponse.json({ error: 'Invalid deal payment request' }, { status: 400 })
    }

    const { fee, payout, feePercent } = calculateDealFee(amountCents)

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountCents,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
      metadata: {
        type: 'deal_payment',
        dealId,
        creatorId,
        brandId,
        platformFee: String(fee),
        creatorPayout: String(payout),
        feePercent: String(feePercent),
      },
      description: `brand2u deal payment — ${dealTitle}`,
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      breakdown: {
        total: amountCents,
        platformFee: fee,
        creatorPayout: payout,
        feePercent,
      },
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
