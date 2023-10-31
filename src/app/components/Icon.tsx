import { StaticImageData } from 'next/image'

type IconProps = {
  image: StaticImageData
  size?: 'small' | 'medium' | 'large'
}

export default function Icon({ image, size = 'medium' }: IconProps) {
  let sizeClasses: string
  if (size === 'small') {
    sizeClasses = 'w-8 h-8'
  } else if (size === 'large') {
    sizeClasses = 'w-16 h-16'
  } else {
    sizeClasses = 'w-12 h-12'
  }
  return <img className={sizeClasses} src={image.src} />
}
