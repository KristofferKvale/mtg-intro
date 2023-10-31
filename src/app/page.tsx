import Disclaimer from './components/Disclaimer'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import MainContent from './components/MainContent'
import Text from './components/Text'
import TextLink from './components/TextLink'
import { firstPageFirstPart, firstPageSecondPart } from './data/officialTexts'

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
              {firstPageFirstPart}
              <br />
              {firstPageSecondPart}
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
