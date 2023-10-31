import Image from 'next/image'

export default function Background({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1000}
      height={1000}
      className='z-0 fixed top-0 place-self-center min-w-full min-h-full aspect-square'
    />
  )
}
