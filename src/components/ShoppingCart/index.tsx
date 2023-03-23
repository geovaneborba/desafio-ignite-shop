import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { Bag, Minus, Plus, X } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'
import {
  CartDetails,
  CartDetailsNumberItems,
  CartDetailsPrice,
  CartDetailsQuantity,
  CartDetailsTotal,
  CartItem,
  CartItemAction,
  CartItemDescriptionContainer,
  CartItemImageContainer,
  CartItemQuantityContainer,
  CartList,
  CheckoutButton,
  CloseModalButton,
  Content,
  ShoppingCartButton,
} from './styles'
import axios from 'axios'
import { useState } from 'react'

export function ShoppingCart() {
  const { clearCart } = useShoppingCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const {
    cartDetails,
    cartCount,
    removeItem,
    formattedTotalPrice,
    incrementItem,
    decrementItem,
  } = useShoppingCart()

  const items = Object.values(cartDetails ?? [])

  const checkoutItems = items.map((item) => {
    return {
      price: item.priceId.id,
      quantity: item.quantity,
    }
  })

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post(`/api/checkout`, {
        checkoutItems,
      })

      window.location.href = response.data
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ShoppingCartButton>
          {cartCount ? cartCount > 0 && <span>{cartCount ?? 0}</span> : ''}

          <Bag size={24} weight="bold" />
        </ShoppingCartButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Content>
          <Dialog.Close asChild>
            <CloseModalButton>
              <X size={24} />
            </CloseModalButton>
          </Dialog.Close>
          <h2>Sacola de compras</h2>

          <CartList>
            {items.length === 0 && <p>Sua sacola está vazia </p>}
            {items.map((item) => (
              <CartItem key={item.id}>
                <CartItemImageContainer>
                  <Image
                    src={item.image ?? ''}
                    width={480}
                    height={480}
                    alt=""
                  />
                </CartItemImageContainer>
                <CartItemDescriptionContainer>
                  <h3>{item.name}</h3>
                  <span>{item.formattedPrice}</span>

                  <CartItemAction>
                    <CartItemQuantityContainer>
                      <button
                        type="button"
                        title="Diminuir"
                        onClick={() => decrementItem(item.id)}
                      >
                        <Minus />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        title="Adicionar"
                        onClick={() => incrementItem(item.id)}
                      >
                        <Plus />
                      </button>
                    </CartItemQuantityContainer>

                    <button
                      type="button"
                      onClick={() => {
                        removeItem(item.id)
                      }}
                    >
                      Remover
                    </button>
                  </CartItemAction>
                </CartItemDescriptionContainer>
              </CartItem>
            ))}
          </CartList>

          <CartDetails>
            <CartDetailsQuantity>Quantidade</CartDetailsQuantity>
            <CartDetailsNumberItems>{cartCount} itens</CartDetailsNumberItems>
            <CartDetailsTotal>Valor total</CartDetailsTotal>
            <CartDetailsPrice>{formattedTotalPrice}</CartDetailsPrice>
          </CartDetails>

          <CheckoutButton
            onClick={handleBuyProduct}
            disabled={cartCount === 0 || isCreatingCheckoutSession}
          >
            Finalizar compra
          </CheckoutButton>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
