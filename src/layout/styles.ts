import { styled } from '@/styles'

export const LayoutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',

  '@xs': {
    padding: '0 1rem',
    alignItems: 'flex-start',
  },
  '@sm': {
    padding: '0 1rem',
  },

  '@md': {
    padding: '0 1rem',
  },

  '@lg': {
    padding: '0 1rem',
  },
})
