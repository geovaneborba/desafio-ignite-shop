import { keyframes, styled } from '@/styles'

const skeletonLoading = keyframes({
  '0%': {
    background: 'rgb(32,32,36)',
  },
  '100%': {
    background: 'rgba(32,32,36, 0.5)',
  },
})

export const SkeletonContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: '1180px',
  margin: '0 auto',

  width: '100%',
})

export const SkeletonImage = styled('div', {
  width: '100%',
  height: 656,
  maxWidth: 576,
  background: '$gray800',
  borderRadius: 8,

  animation: `${skeletonLoading} 0.5s linear infinite alternate`,
})

export const SkeletonProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const SkeletonTitle = styled('div', {
  height: 32,
  borderRadius: 8,

  animation: `${skeletonLoading} 0.5s linear infinite alternate`,
})

export const SkeletonPrice = styled('div', {
  marginTop: '1rem',
  height: 32,
  width: 124,
  borderRadius: 8,

  animation: `${skeletonLoading} 0.5s linear infinite alternate`,
})

export const SkeletonDescription = styled('div', {
  marginTop: '2.5rem',
  height: 174,
  borderRadius: 8,

  animation: `${skeletonLoading} 0.5s linear infinite alternate`,
})

export const SkeletonBuyButton = styled('div', {
  marginTop: 'auto',
  height: 69,
  borderRadius: 8,

  animation: `${skeletonLoading} 0.5s linear infinite alternate`,
})
