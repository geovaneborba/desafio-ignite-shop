import { GetStaticProps } from 'next'
import { HomeContainer, Product } from '@/styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import { stripe } from '@/lib/stripe'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'
import { priceFormatted } from '@/utils/priceFormatter'
import Link from 'next/link'
import Head from 'next/head'

import { Bag } from 'phosphor-react'

interface Product {
  id: string
  name: string
  imgUrl: string
  formattedPrice: string
  price: number
  priceId: string
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      '(min-width: 320px)': {
        slides: {
          perView: 1,
          spacing: 16,
        },
      },
      '(min-width: 640px)': {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
      '(min-width: 1366px)': {
        slides: {
          perView: 3,
          spacing: 48,
        },
      },
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              <Image
                src={product.imgUrl}
                width={520}
                height={480}
                alt=""
                priority
              />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.formattedPrice ?? ''}</span>
                </div>

                <button title="Adicionar na sacola" type="button">
                  <Bag weight="bold" size={32} />
                </button>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data
    .filter((product) => product.active)
    .map((product) => {
      const price = product.default_price as Stripe.Price

      const formattedPrice = price.unit_amount
        ? priceFormatted.format(price.unit_amount / 100)
        : ''

      return {
        id: product.id,
        name: product.name,
        imgUrl: product.images[0],
        formattedPrice,
        price: price.unit_amount,
        priceId: product.default_price,
      }
    })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // A cada duas horas a página é recriada
  }
}
