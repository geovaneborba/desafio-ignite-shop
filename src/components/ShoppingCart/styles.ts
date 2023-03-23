import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const ShoppingCartButton = styled('button', {
  padding: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 48,
  widows: 48,
  background: '$gray800',
  border: 0,
  borderRadius: 6,
  cursor: 'pointer',
  position: 'relative',

  span: {
    position: 'absolute',
    background: '$green500',
    height: '1.5rem',
    width: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    top: -5,
    right: -5,
    color: '$white',
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontWeight: 'bold',
  },

  svg: {
    color: '$grayIcon',
  },
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  background: '$gray800',
  padding: '3rem',
  width: '480px',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',

  '@xs': {
    padding: '1rem',
    width: '100%',
  },

  h2: {
    marginTop: '1.5rem',
    marginBottom: '2rem',
    color: '$gray100',
    fontSize: '$lg',
    fontWeight: 'bold',
  },
})

export const CloseModalButton = styled(Dialog.Close, {
  border: 0,
  background: 'transparent',
  cursor: 'pointer',
  alignSelf: 'end',

  svg: {
    color: '$grayIcon',
  },
})

export const CartList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  flex: 1,
})

export const CartItem = styled('div', {
  display: 'flex',
  gap: '1.25rem',
})

export const CartItemImageContainer = styled('div', {
  padding: '1rem',
  borderRadius: 8,
  width: 101,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  img: {
    width: 'auto',
    height: '100%',
    objectFit: 'cover',
  },
})

export const CartItemDescriptionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  h3: {
    color: '$gray300',
    lineHeight: '1.6',
    fontSize: '$xs',
  },

  span: {
    color: '$gray100',
    fontWeight: 'bold',
    lineHeight: '1.6',
    fontSize: '$md',
  },
})

export const CartItemAction = styled('div', {
  display: 'flex',
  width: '100%',

  button: {
    marginTop: '0.5rem',
    border: 0,
    background: 'transparent',
    cursor: 'pointer',
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 'bold',
    lineHeight: '1.6',
    transition: 'color 0.3s',
    width: 'fit-content',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const CartItemQuantityContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  flex: 1,

  button: {
    border: '1px solid $green500',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    padding: '0.25rem',
    transition: 'border 0.3s',

    '&:hover': {
      borderColor: '$green300',
    },

    svg: {
      color: '$green500',
      transition: 'color 0.3s',

      '&:hover': {
        color: '$green300',
      },
    },
  },

  span: {
    fontFamily: 'Roboto',
  },
})

export const CartDetails = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, max-content)',
  rowGap: '.5rem',
  width: '100%',
  justifyContent: 'space-between',
  marginTop: '2rem',

  '@xs': {
    marginTop: '2rem',
  },
})

export const CartDetailsQuantity = styled('h3', {
  fontSize: '1rem',
  fontWeight: '400',
  color: '$gray100',
})

export const CartDetailsNumberItems = styled('span', {
  fontSize: '$md',
  fontWeight: '400',
  color: '$gray300',
})

export const CartDetailsTotal = styled('h3', {
  fontSize: '$md',
  fontWeight: '700',
  color: '$gray100',
})

export const CartDetailsPrice = styled('span', {
  fontSize: '$xl',
  fontWeight: '700',
  color: '$gray100',
})

export const CheckoutButton = styled('button', {
  marginTop: '4rem',
  background: '$green500',
  transition: 'background 0.3s',
  border: 0,
  padding: '1.5rem 2rem',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '$md',
  borderRadius: 8,

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.8,
  },

  '&:not(:disabled):hover': {
    background: '$green300',
  },
})
