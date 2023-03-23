import { stripe } from '@/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { checkoutItems } = req.body

      if (!checkoutItems) {
        return res.status(400).json({ error: 'Items not found' })
      }

      const successUrl = `${process.env.NEXT_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`
      const cancelUrl = `${process.env.NEXT_APP_URL}/`

      const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: checkoutItems,
      })

      return res.status(201).json(checkoutSession.url)
    } catch (err: any) {
      return res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    return res.status(405).json({ error: 'Method not Allowed' })
  }
}
