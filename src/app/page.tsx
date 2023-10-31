import Disclaimer from './components/Disclaimer'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import MainContent from './components/MainContent'
import Text from './components/Text'
import TextLink from './components/TextLink'

export default function Home() {
  return (
    <>
      <LeftMenu current='hjem' />
      <MainContent>
        <>
          <Header>Introduksjon til MTG</Header>
          <Text>
            <>
              Magic: the Gathering(mtg) er et samlekortspill av Wizards of the
              Coast(WotC). Denne siden gir en rask introduksjon til hvordan du
              spiller mtg. Dersom det er noe du ikke finner her kan du sjekke{' '}
              <TextLink
                text='de offisielle mtg sidene'
                href='https://magic.wizards.com/en/intro'
              />
              , eller{' '}
              <TextLink
                text='WotC sin how to play guide'
                href='https://magic.wizards.com/en/how-to-play'
              />
              .
            </>
          </Text>
          <Text>
            <>
              Før du begynner å lese på resten av siden kan det være greit å
              nevne to generelle regler for MTG. Den første er at det som står
              på et kort overstyrer de generelle reglene for spillet, for
              eksempel hva som skjer på din tur. Her kan det også være lurt å
              søke opp "rulings" for kortet, om man er usikker hvordan det som
              står på kortet skal skje. Jeg har forsøkt å påpeke dette de
              stedene det er veldig vanlig at kort endrer hva som skjer, men det
              vil også være veldig mange steder jeg ikke har påpekt denne
              muligheten.
              <br />
              Den andre regel jeg vil nevne er "can't always wins", som jeg har
              hørt Gavin Verhey (en av designerene av MTG) beskrive den som.
              Denne regelen sier "helt enkelt" at om det er to ulike effekt som
              er gjeldene, og den ene sier man skal gjøre noe mens den andre
              sier man ikke kan gjøre det, så er det den effekten som sier man
              ikke kan gjøre det som vinner. Et enkelt eksempel vil være om noen
              har et kort i spill som sier at ingen kan få mer liv, og du har et
              kort i spill som sier at du får ett liv på starten av hver tur, så
              får du ikke ett liv allikevel.
            </>
          </Text>
          <Text>
            <>
              Noen seksjonene av siden er ment å leses før du starter å spille,
              mens andre seksjoner er mer lagt opp til å sjekkes underveis.
            </>
          </Text>
          <Text>
            <>
              Før du spiller for aller første gang kan det være lurt å lese om{' '}
              <TextLink href='/format' text='formatet du skal spille' />,{' '}
              <TextLink href='/tur' text='hva som skjer på turen din' />,{' '}
              <TextLink href='/mana' text='hvordan mana og land funger' />, og{' '}
              <TextLink href='/kort' text='hvordan man leser et kort' />.
            </>
          </Text>
          <Text>
            <>
              Hvis du har spilt før, men skal spille et nytt format, kan det
              være fint med en rask{' '}
              <TextLink href='/format' text='introduksjon i formatet' />.
            </>
          </Text>
          <Text>
            <>
              <TextLink href='/ordliste' text='Ordlisten' /> er laget for å
              kunne slå opp nøkkelord på kort mens man spiller. Det kan både
              være nyttig om man ikke har sett ordet før, eller om man bare ikke
              husker helt hva det gjør.
            </>
          </Text>
          <Disclaimer />
        </>
      </MainContent>
    </>
  )
}
