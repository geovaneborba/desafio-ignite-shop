import { stripe } from '@/lib/stripe'
import {
  SuccessContainer,
  ImageContainer,
  ImageRoundedBackground,
} from '@/styles/pages/success'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import { useShoppingCart } from 'use-shopping-cart'

interface SuccessProps {
  products: {
    id: string
    images: string[] | ''
    name: string
  }[]
  customer: {
    name: string
  }
  quantityProductsPurchased: number
}

export default function Success({
  products,
  customer,
  quantityProductsPurchased,
}: SuccessProps) {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <>
      <Head>
        <title>Success | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ImageContainer>
          {products.slice(0, 3).map((product) => (
            <ImageRoundedBackground key={product.id}>
              <Image src={product.images[0]} width={120} height={110} alt="" />
            </ImageRoundedBackground>
          ))}

          {products.length > 2 && (
            <span>
              +{quantityProductsPurchased}
              <div></div>
            </span>
          )}
        </ImageContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul! <strong>{customer.name}</strong>, sua compra de{' '}
          <strong>{quantityProductsPurchased}</strong> camisetas já está a
          caminho da sua casa!
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
    String(query.session_id),
    {
      expand: ['line_items', 'line_items.data.price.product'],
    }
  )

  const products = sessionWithLineItems.line_items?.data.map(
    (item) => item.price?.product
  )

  const quantityProductsPurchased =
    sessionWithLineItems.line_items?.data.reduce((acc, currentValue) => {
      return (acc += currentValue.quantity ? currentValue.quantity : 0)
    }, 0)

  const customer = sessionWithLineItems.customer_details

  return {
    props: {
      products,
      customer,
      quantityProductsPurchased,
    },
  }
}
