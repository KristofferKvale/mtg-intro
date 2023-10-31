type MenuLinkProps = {
  text: string
  address: string
  isCurrent?: boolean
}

export default function MenuLink({
  text,
  address,
  isCurrent = false,
}: MenuLinkProps) {
  return (
    <div
      className={`mb-2 rounded-sm p-2 ${
        isCurrent ? 'bg-stone-500' : 'bg-stone-200'
      }`}
    >
      <a href={address}>
        <p className='font-bold text-blue-800'>{text}</p>
      </a>
    </div>
  )
}
