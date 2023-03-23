import { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { CartProvider } from 'use-shopping-cart'
import { Layout } from '@/layout/default'

const stripeKey = process.env.STRIPE_PUBLIC_KEY ?? ''

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      shouldPersist
      currency="BRL"
      cartMode="checkout-session"
      stripe={stripeKey}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}
