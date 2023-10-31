import { createElement } from 'react'

type HeaderProps = {
  level?: 1 | 2 | 3 | 4
  children: string
}

export default function Header({ level = 1, children }: HeaderProps) {
  if (level === 1) {
    return <h1 className='mb-4 text-2xl text-center'>{children}</h1>
  } else if (level === 2) {
    return <h2 className='mb-4 text-2xl text-center'>{children}</h2>
  } else if (level === 3) {
    return <h3 className='mb-4 text-2xl text-center'>{children}</h3>
  } else if (level === 4) {
    return <h4 className='mb-4 text-2xl text-center'>{children}</h4>
  }
}
