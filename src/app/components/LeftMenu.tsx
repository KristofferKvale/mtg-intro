import MenuLink from './MenuLink'

type LeftMenuProps = {
  current?:
    | 'hjem'
    | 'formater'
    | 'tur'
    | 'mana'
    | 'kort'
    | 'ordliste'
    | 'cheatSheets'
}

export default function LeftMenu({ current }: LeftMenuProps) {
  return (
    <div className='z-10 h-fit col-span-1 flex flex-col justify-content-flex-start p-4 bg-opacity-80 bg-stone-800 rounded-lg border-solid border-2 border-blue-800'>
      <MenuLink text='Hjem' address='/' isCurrent={current === 'hjem'} />
      <MenuLink
        text='Formater'
        address='/formater'
        isCurrent={current === 'formater'}
      />
      <MenuLink text='Din tur' address='/tur' isCurrent={current === 'tur'} />
      <MenuLink
        text='Mana og farger'
        address='/mana'
        isCurrent={current === 'mana'}
      />
      <MenuLink
        text='Lese kort'
        address='/kort'
        isCurrent={current === 'kort'}
      />
      <MenuLink
        text='Liste med nøkkelord'
        address='/ordliste'
        isCurrent={current === 'ordliste'}
      />
      <MenuLink
        text='Cheat Sheets'
        address='/cheatSheets'
        isCurrent={current === 'cheatSheets'}
      />
    </div>
  )
}
