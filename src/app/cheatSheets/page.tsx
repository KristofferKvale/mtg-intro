import LeftMenu from '../components/LeftMenu'
import MainContent from '../components/MainContent'
import TextLink from '../components/TextLink'

export default function CheatSheets() {
  return (
    <>
      <LeftMenu current='cheatSheets' />
      <MainContent>
        <TextLink
          href='/documents/mtg-cheat-sheets.pdf'
          text='MTG Cheat Sheets'
        />
      </MainContent>
    </>
  )
}
