import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2 ))',
  marginLeft: 'auto',
  minHeight: 656,
  paddingBottom: '4rem',

  '@xs': {
    minHeight: 350,
  },
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',

    '@xs': {
      width: 'auto',
      height: 'auto',
    },
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(0,0,0,0.6)',
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    '@xs': {
      padding: '1rem',
    },

    '@sm': {
      padding: '1rem',
    },

    '@md': {
      padding: '1rem',
    },

    '> div': {
      display: 'flex',
      flexDirection: 'column',
    },

    strong: {
      fontFamily: 'Roboto',
      fontSize: '$lg',
      color: '$white',

      '@xs': {
        fontSize: '$md',
      },
      '@sm': {
        fontSize: '$md',
      },
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
      fontFamily: 'Roboto',
    },

    button: {
      border: 0,
      borderRadius: 6,
      background: '$green500',
      padding: '0.75rem',
      cursor: 'pointer',
      transition: 'background 0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      svg: {
        color: '$white',
      },

      '&:hover': {
        background: '$green300',
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
