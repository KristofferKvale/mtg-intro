import Image from 'next/image'

type IconProps = {
  imageSrc: string
  alt: string
  size?: 'small' | 'medium' | 'large'
}

export default function Icon({ imageSrc, alt, size = 'medium' }: IconProps) {
  let sizeClasses: string
  let len = size === 'small' ? 8 : size === 'medium' ? 12 : 16
  if (size === 'small') {
    sizeClasses = 'w-8 h-8'
  } else if (size === 'large') {
    sizeClasses = 'w-16 h-16'
  } else {
    sizeClasses = 'w-12 h-12'
  }
  return (
    <Image
      alt={alt}
      height={len}
      width={len}
      className={sizeClasses}
      src={imageSrc}
    />
  )
}
