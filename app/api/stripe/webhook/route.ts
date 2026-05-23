import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import type Stripe from 'stripe'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

async function getRawBody(req: NextRequest): Promise<Buffer> {
  const chunks: Uint8Array[] = []
  const reader = req.body?.getReader()
  if (!reader) return Buffer.alloc(0)
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    if (value) chunks.push(value)
  }
  return Buffer.concat(chunks)
}

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature')
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: 'Missing signature or secret' }, { status: 400 })
  }
  let event: Stripe.Event
  try {
    const rawBody = await getRawBody(req)
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Webhook error'
    console.error('Webhook signature verification failed:', message)
    return NextResponse.json({ error: `Webhook error: ${message}` }, { status: 400 })
  }
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const plan = session.metadata?.plan
        const customerId = session.customer as string
        const subscriptionId = session.subscription as string
        console.log(`✅ New subscription: plan=${plan}, customer=${customerId}, sub=${subscriptionId}`)
        // TODO: Save subscription to your database
        // await db.user.update({ where: { stripeCustomerId: customerId }, data: { plan, subscriptionId } })
        break
      }
      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription
        const plan = sub.metadata?.plan
        const status = sub.status
        console.log(`🔄 Subscription updated: plan=${plan}, status=${status}`)
        // TODO: Update subscription status in your database
        break
      }
      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription
        const customerId = sub.customer as string
        console.log(`❌ Subscription cancelled: customer=${customerId}`)
        // TODO: Downgrade user in your database
        break
      }
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice
        console.log(`💸 Payment succeeded: invoice=${invoice.id}, amount=${invoice.amount_paid}`)
        // TODO: Log payment, send receipt email
        break
      }
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const customerId = invoice.customer as string
        console.log(`⚠️ Payment failed: customer=${customerId}`)
        // TODO: Email user about failed payment, flag account
        break
      }
      case 'payment_intent.succeeded': {
        const pi = event.data.object as Stripe.PaymentIntent
        if (pi.metadata?.type === 'deal_payment') {
          const dealId = pi.metadata.dealId
          const creatorId = pi.metadata.creatorId
          const fee = pi.metadata.platformFee
          console.log(`🤝 Deal payment succeeded: deal=${dealId}, creator=${creatorId}, fee=${fee}`)
          // TODO: Mark deal as paid, release payout to creator (minus platform fee)
        }
        break
      }
      default:
        console.log(`Unhandled event type: ${event.type}`)
    }
  } catch (err) {
    console.error('Webhook handler error:', err)
    return NextResponse.json({ error: 'Handler error' }, { status: 500 })
  }
  return NextResponse.json({ received: true })
}
