import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginTop: '3rem',
    marginBottom: '1.5rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,

    strong: {
      fontWeight: 'bold',
    },
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  display: 'flex',
  position: 'relative',

  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',

    background: '$green300',
    color: '$white',
    fontFamily: 'Roboto',
    borderRadius: '100%',
    width: '1.5rem',
    height: '1.5rem',
    padding: '1rem',
    fontSize: '0.75rem',
  },
})

export const ImageRoundedBackground = styled('div', {
  width: '8.75rem',
  height: '8.75rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '100%',
  padding: '0.25rem',
  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginLeft: '-2rem',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',

  img: {
    objectFit: 'cover',
  },
})
