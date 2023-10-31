import Entry from '../components/Entry'
import Header from '../components/Header'
import LeftMenu from '../components/LeftMenu'
import MainContent from '../components/MainContent'
import Text from '../components/Text'
import W from '../../../public/mtg-assets/colored/White.jpg'
import U from '../../../public/mtg-assets/colored/Blue.jpg'
import B from '../../../public/mtg-assets/colored/Black.jpg'
import R from '../../../public/mtg-assets/colored/Red.jpg'
import G from '../../../public/mtg-assets/colored/Green.jpg'
import Disclaimer from '../components/Disclaimer'

export default function Mana() {
  return (
    <>
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
                iconImage={W}
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
                iconImage={U}
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
                iconImage={B}
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
                iconImage={R}
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
                iconImage={G}
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