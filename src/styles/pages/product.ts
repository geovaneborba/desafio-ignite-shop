import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: '1180px',
  margin: '0 auto',
  paddingBottom: '4rem',

  '@xs': {
    display: 'flex',
    flexDirection: 'column',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  height: 656,
  maxWidth: 576,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@xs': {
    height: '100%',
    width: '100%',
  },

  '@sm': {
    height: '100%',
    width: '100%',
  },

  '@md': {
    height: '100%',
    width: '100%',
  },

  '@lg': {
    height: '100%',
    width: '100%',
  },

  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',

    '@sm': {
      objectFit: 'contain',
    },
    '@md': {
      objectFit: 'contain',
    },
    '@lg': {
      objectFit: 'contain',
    },
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',

    '@xs': {
      fontSize: '$xl',
    },
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green500',

    '@xs': {
      fontSize: '$lg',
    },
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: '1.6',
    color: '$gray300',

    '@xs': {
      fontSize: '$xs',
    },
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: 'background-color 0.3s',

    '@xs': {
      margin: '2rem 0',
    },
    '@sm': {
      margin: '2rem 0 0',
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
})
