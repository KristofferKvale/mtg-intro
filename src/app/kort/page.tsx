import Disclaimer from '../components/Disclaimer'
import Entry from '../components/Entry'
import Header from '../components/Header'
import LeftMenu from '../components/LeftMenu'
import MainContent from '../components/MainContent'
import Text from '../components/Text'
import TextLink from '../components/TextLink'

export default function Kort() {
  return (
    <>
      <LeftMenu current='kort' />
      <MainContent>
        <>
          <Header>Lese kort</Header>
          <Text>
            <>
              Hvert kort har seks soner det kan være greit å vite om. Øverst på
              kortet finner man navnet på kortet. Til høyre for navnet vises
              hvor mye kortet koster. Under navnet har man en illustrasjon for
              kortet. Under illustrasjonen vises typene til kortet. Under typene
              har man beskrivelsen av hva kortet gjør. På skapningkort har man
              nederst til høyre tall som viser hvor mye kraft og maks liv
              skapningen har (kraft/liv).
            </>
          </Text>
          <Entry
            header='Hvor mye koster kortet?'
            list={
              <ul>
                <li>Fargede mana symboler</li>
                <li>Antall fargeløs mana</li>
              </ul>
            }
          >
            <Text>
              <>
                Øverst til høyre på hvert kort står det hvor mye kortet koster.
                Kostnaden vises med antall av symbolet til hver farge, og/eller
                en sirkel med et tall inni. Man må betale en mana av riktig
                farge for hvert symbol, i tillegg til antallet mana som står i
                sirkelen. Man kan bruke hvilken farge mana man vil for å betale
                for det som står i sirkelen, inkludert fargeløs mana.
                <br />
                Landkort koster ikke mana, og har ikke noen symboler øverst til
                høyre.
              </>
            </Text>
          </Entry>
          <Entry
            header='Hvilke typer kort finnes?'
            list={
              <ul>
                <li>Hovedtype</li>
                <li>Overtype</li>
                <li>Undertype</li>
              </ul>
            }
          >
            <Text>
              <>
                Det finnes veldig mange typer et kort kan ha. De kan deles inn i
                hovedtyper, overtyper og undertyper. Hovedtypen sier noe om hva
                man forventer at kortet gjør, en nærmere beskrivelse av hver
                kommer lenger nede. Av overtypene er det en som er viktigere enn
                de andre, det er legendarisk (Legendary). Legendariske kort kan
                man bare ha en versjon av i spill samtidig, med mindre et kort
                sier at man kan ignorere legenderegelen (the legend rule). Av
                typene er det undertyper det er flest av, de brukes stort sett
                bare i effekter. Effekten kan da typisk enten si at man velger
                et mål med en gitt type, eller gir en effekt til alle kort av en
                gitt type.
              </>
            </Text>
          </Entry>
          <Entry
            header='Hovedtypene'
            list={
              <ul>
                <li>Land</li>
                <li>Skapning (Creature)</li>
                <li>Trolldom (Sorcery)</li>
                <li>Umiddelbar (Instant)</li>
                <li>Gjenstand (Artifact)</li>
                <li>Utstyr (Equipment)</li>
                <li>Fortryllelse (Enchantment)</li>
                <li>Planeswalker</li>
              </ul>
            }
          >
            <Text>
              <>
                Listen viser de mest vanlige hovedtypene. Land brukes for å få
                mana, noen landkort har også andre effekter. Skapningkort gir
                skapninger som kan brukes til å angripe og blokkere. Kraften
                (power) for skapningen er hvor mye skade den gjør, liv(life) er
                hvor mye skade som skal til for at skapningen dør. Trolldomskort
                gir typisk en effekt som blir ferdig når kortet spilles.
                Umiddelbare kort ligner på trolldomskort, men kan spilles som
                svar på at noe skjer, f.eks. at en annen spiller spiller et
                kort. Gjenstandskort gir deg en gjenstand som ligger på bordet
                til den fjernes, disse har ofte effekter som kan brukes flere
                ganger. Utstyr ligner litt på gjenstander, men settes på en
                skapning og gir den skapningen en effekt. Fortryllelser er
                effekter som forblir i spill, typisk til den fjernes. Noen typer
                fortryllelser festes på andre kort. Planeswalker-e blir på
                brettet til lojalitetstelleren deres går ned til null. De kan
                angripes av andre spilleres skapninger, og skaden trekkes fra
                lojalitetstelleren om det ikke blokkeres. De har også effekter
                man kan bruke, som enten øker eller reduserer
                lojalitetstelleren.
              </>
            </Text>
          </Entry>
          <Entry
            header='Beskrivelsen av kortet'
            list={
              <ul>
                <li>Nøkkelord</li>
                <li>effekter</li>
              </ul>
            }
          >
            <Text>
              <>
                Det er i beskrivelsen av kortet man finner nøkkelordene, og
                effektene kortet gir. Nøkkelordene er beskrevet i{' '}
                <TextLink text='ordlisten' href='/ordliste' />. I tillegg kan
                kort ha en eller flere effekter. Disse kan i hovedsak deles i
                utløste (triggered) og aktiverte (activated) effekter. Utløste
                effekter skjer hver gang betingelsene blir oppfylt. Aktiverte
                effekter har en kostnad for å brukes. De vises som kostnaden, så
                en kolon, og deretter hva effekten er.
              </>
            </Text>
          </Entry>
          <Disclaimer />
        </>
      </MainContent>
    </>
  )
}
