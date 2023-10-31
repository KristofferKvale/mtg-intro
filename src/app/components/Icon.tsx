import Image from 'next/image'

type IconProps = {
  imageSrc: string
  alt: string
  size?: 'small' | 'medium' | 'large'
}

export default function Icon({ imageSrc, alt, size = 'medium' }: IconProps) {
  let sizeClasses: string
  if (size === 'small') {
    sizeClasses = 'w-8 h-8'
  } else if (size === 'large') {
    sizeClasses = 'w-16 h-16'
  } else {
    sizeClasses = 'w-12 h-12'
  }
  return <Image alt={alt} className={sizeClasses} src={imageSrc} />
}
