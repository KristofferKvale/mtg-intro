type TextLinkProps = {
  text: string
  href: string
}

export default function TextLink({ text, href }: TextLinkProps) {
  return (
    <a className='underline decoration-sky-500' href={href}>
      {text}
    </a>
  )
}
