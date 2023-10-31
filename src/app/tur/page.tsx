import Disclaimer from '../components/Disclaimer'
import Entry from '../components/Entry'
import LeftMenu from '../components/LeftMenu'
import MainContent from '../components/MainContent'
import Text from '../components/Text'
import Image from 'next/image'

export default function Tur() {
  return (
    <>
      <Image
        src='/generated/forrest.png'
        alt='Table of people with armor playing cards in a tavern'
        width={1000}
        height={1000}
        className='z-0 fixed top-0 left-0 w-full aspect-square'
      />
      <LeftMenu current='tur' />
      <MainContent>
        <>
          <Entry
            header='Din tur'
            list={
              <>
                <Text>
                  <>Turen din er delt inn i flere steg og faser.</>
                </Text>
                <ul>
                  <li>Untap</li>
                  <li>Upkeep</li>
                  <li>Trekke kort</li>
                  <hr />
                  <li>Første hovedfase</li>
                  <hr />
                  <li>Kampfase</li>
                  <li>
                    <ul className='pl-5 list-disc'>
                      <li>Erklære angripere</li>
                      <li>Erklære blokkere</li>
                      <li>Løs resultatet</li>
                    </ul>
                  </li>
                  <hr />
                  <li>Andre hovedfase</li>
                  <hr />
                  <li>Slutten av turen</li>
                  <li>Kaste kort</li>
                </ul>
              </>
            }
          >
            <Text>
              <>
                Untap, upkeep og trekk kort stegene er det første som skjer på
                turen din, i den rekkefølgen.
                <br />
                Untap steget betyr at alle kortene du kontrollerer som har blitt
                tappet, ikke lenger er det.
                <br />
                Under upkeep steget sjekker du om du kontrollerer noen kort som
                har evner som skjer under upkeep steget.
                <br />
                Det siste steget på starten av turen din er å trekke et kort.
                <br />
                <br />
                Første og andre hovedfase er like. I hovedfasene kan man spille
                de kortene man har i hånden, uansett hvor raske de er. Det er
                viktig å nevne at skapninger du får iløpet av turen din ikke kan
                angripe samme tur med mindre de har haste. Denne regelen kalles
                Summoning Sickness.
                <br />
                <br />
                Kampfasen starter når du velger det. Du starter med å si hvilke
                av skapningene du kontrollerer som skal angripe, og hvem de
                angriper. Dette kan være enten spillere eller noe som kalles
                Plainswalker-e. Når er ferdig med å erklære angripere går man
                med klokken rundt bordet og spillerene erklærer blokkere. Dersom
                ingen andre nøkkelord sier noe annet kan man velge så mange
                blokkere mot hver angripende skapning som man vil, også ingen.
                Den som blir angrepet velger også rekkefølgen på de som
                blokkerer, om det har noe å si. Det er spilleren som
                kontrollerer Plainswalker-en som velger blokkere for den. Dersom
                ikke nøkkelord sier noe annet, så holder det at én skapning
                blokkerer for at målet ikke tar noe skade. Skapningen som
                blokkerer trenger ikke å ha nok liv til å ta all skaden, eller
                drepe skapningen som angriper. Når alle spillere som blir
                angrepet har erklært blokkere går man videre til å løse
                resultatet. Da finner man ut hvilke skapninger som dør, og
                legger disse i gravplassen til eieren. Spillere mister også liv
                på dette steget om de ble angrepet.
                <br />
                <br />
                På slutten av turen steget slutter de effektene som sier on your
                turn, eller untill end of turn å gjelde. Alle skapninger som
                fortsatt er i live går tilbake til maks liv, både dine og andre
                spillere sine.
                <br />
                Helt til slutt så må man kaste kort ned til sin maksimale
                håndstørrelse, den er 7 med mindre en effekt sier noe annet. Man
                velger selv hvilke kort fra hånden man kaster, de legges i din
                gravplass.
              </>
            </Text>
          </Entry>
          <Disclaimer />
        </>
      </MainContent>
    </>
  )
}
