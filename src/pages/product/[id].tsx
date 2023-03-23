import { Skeleton } from '@/components/Skeleton'
import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { priceFormatted } from '@/utils/priceFormatter'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'

interface Product {
  id: string
  name: string
  imgUrl: string
  formattedPrice: string
  price: number
  priceId: string
  description: string
}

interface ProductProps {
  product: Product
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart()

  const { isFallback } = useRouter()

  if (isFallback) {
    return <Skeleton />
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imgUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.formattedPrice}</span>

          <p>{product.description}</p>

          <button
            type="button"
            onClick={() => {
              addItem(
                {
                  id: product.id,
                  priceId: product.priceId,
                  name: product.name,
                  price: product.price,
                  image: product.imgUrl,
                  currency: 'brl',
                },
                { count: 1 }
              )
            }}
          >
            Adicionar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params?.id)

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  const priceUnit = price.unit_amount
    ? priceFormatted.format(price.unit_amount / 100)
    : ''

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imgUrl: product.images[0],
        formattedPrice: priceUnit,
        price: price.unit_amount,
        priceId: product.default_price,
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  }
}
