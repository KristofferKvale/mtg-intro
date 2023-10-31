import Entry from '../components/Entry'
import Header from '../components/Header'
import LeftMenu from '../components/LeftMenu'
import MainContent from '../components/MainContent'
import Text from '../components/Text'
import Disclaimer from '../components/Disclaimer'
import Image from 'next/image'

export default function Mana() {
  return (
    <>
      <Image
        src='/generated/island.png'
        alt='Table of people with armor playing cards in a tavern'
        width={1000}
        height={1000}
        className='z-0 fixed top-0 left-0 w-full aspect-square'
      />
      <LeftMenu current='mana' />
      <MainContent>
        <>
          <Header>Mana og farger</Header>
          <Text>
            <>
              Mana er det man betaler for å spille kort. Den vanligste kilden
              til mana er land. Hver runde kan man spille ett landkort. Det
              finnes i tillegg kort som sier at man kan spille ekstra land, og
              andre kilder til mana. For å bruke mana fra land, og de fleste
              andre kilder til mana, så må man tappe dem. Dette markeres typisk
              med å snu kortet sidelengs. Det finnes fem farger av mana, i
              tillegg finnes det også fargeløs mana.
            </>
          </Text>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='col-span-1'>
              <Entry
                iconImageSrc='/mtg-assets/colored/White.jpg'
                iconImageAlt='Hvit mana symbol'
                header='Hvit mana'
                list={
                  <ul>
                    <li>Plains</li>
                    <li>Beskyttelse</li>
                    <li>Gi liv</li>
                  </ul>
                }
                whiteBackground
                imageIsCopyrighted
              >
                <Text>
                  <>
                    Dette symbolet betyr en hvit mana. Den vanlige typen land
                    som genererer denne typen mana heter Plains. Hvit forbindes
                    ofte med beskyttelse, og å gi liv til spillere og
                    skapninger.
                  </>
                </Text>
              </Entry>
            </div>
            <div className='col-span-1'>
              <Entry
                iconImageSrc='/mtg-assets/colored/Blue.jpg'
                iconImageAlt='Blått mana symbol'
                header='Blå mana'
                list={
                  <ul>
                    <li>Island</li>
                    <li>Trekke kort</li>
                    <li>Kontrollere</li>
                  </ul>
                }
                whiteBackground
                imageIsCopyrighted
              >
                <Text>
                  <>
                    Dette symbolet betyr blå mana. Den vanlige typen land som
                    genererer denne typen mana heter Island. Blå forbindes med
                    trekking av kort, kontroll over bordet ved å stoppe andre
                    fra å spille kort.
                  </>
                </Text>
              </Entry>
            </div>
            <div className='col-span-1'>
              <Entry
                iconImageSrc='/mtg-assets/colored/Black.jpg'
                iconImageAlt='Svart mana symbol'
                header='Svart mana'
                list={
                  <ul>
                    <li>Swamp</li>
                    <li>Fjerne skapninger</li>
                    <li>Liv som ressurs</li>
                  </ul>
                }
                whiteBackground
                imageIsCopyrighted
              >
                <Text>
                  <>
                    Dette symbolet betyr svart mana. Den vanlige typen land som
                    genererer denne typen mana heter Swamp. Svart forbindes med
                    å fjerne skapninger, både egne og andres, gjerne i bytte mot
                    en fordel, og å bruke egne livspoeng som ressurs for å få
                    fordeler.
                  </>
                </Text>
              </Entry>
            </div>
            <div className='col-span-1'>
              <Entry
                iconImageSrc='/mtg-assets/colored/Red.jpg'
                iconImageAlt='Rødt mana symbol'
                header='Rød mana'
                list={
                  <ul>
                    <li>Mountain</li>
                    <li>Aggressive skapninger</li>
                    <li>Direkte skade</li>
                  </ul>
                }
                whiteBackground
                imageIsCopyrighted
              >
                <Text>
                  <>
                    Dette symbolet betyr rød mana. Den vanlige typen land som
                    genererer denne typen mana heter Mountain. Rød forbindes med
                    aggressive skapninger som kan angripe med en gang, og
                    direkte skade til både skapninger og spillere.
                  </>
                </Text>
              </Entry>
            </div>
            <div className='col-span-1'>
              <Entry
                iconImageSrc='/mtg-assets/colored/Green.jpg'
                iconImageAlt='Grønt mana symbol'
                header='Grønn mana'
                list={
                  <ul>
                    <li>Forrest</li>
                    <li>Mer mana</li>
                    <li>Store skapninger</li>
                  </ul>
                }
                whiteBackground
                imageIsCopyrighted
              >
                <Text>
                  <>
                    Dette symbolet betyr grønn mana. Den vanlige typen land som
                    genererer denne typen mana heter Forrest. Grønn forbindes
                    med å få tilgang til mer mana raskere enn andre, og store
                    skapninger som også kan vokse og bli enda større, eller som
                    kan lage flere skapninger for deg.
                  </>
                </Text>
              </Entry>
            </div>
          </div>
          <Disclaimer />
        </>
      </MainContent>
    </>
  )
}
