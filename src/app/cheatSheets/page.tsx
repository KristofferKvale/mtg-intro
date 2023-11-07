import LeftMenu from '../components/LeftMenu'
import MainContent from '../components/MainContent'

export default function CheatSheets() {
  return (
    <>
      <LeftMenu current='cheatSheets' />
      <MainContent>
        <iframe
          className='min-h-full min-w-full'
          src='/documents/mtg-cheat-sheets.pdf'
        />
      </MainContent>
    </>
  )
}
