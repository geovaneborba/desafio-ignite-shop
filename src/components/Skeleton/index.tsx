import {
  SkeletonBuyButton,
  SkeletonContainer,
  SkeletonDescription,
  SkeletonImage,
  SkeletonPrice,
  SkeletonProductDetails,
  SkeletonTitle,
} from './styles'

export function Skeleton() {
  return (
    <SkeletonContainer>
      <SkeletonImage />

      <SkeletonProductDetails>
        <SkeletonTitle />
        <SkeletonPrice />
        <SkeletonDescription />
        <SkeletonBuyButton />
      </SkeletonProductDetails>
    </SkeletonContainer>
  )
}
