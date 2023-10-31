import Entry from '../components/Entry'
import Header from '../components/Header'
import LeftMenu from '../components/LeftMenu'
import MainContent from '../components/MainContent'
import Text from '../components/Text'
import image from '../../../public/tree.png'
import Disclaimer from '../components/Disclaimer'

export default function Formater() {
  return (
    <>
      <LeftMenu current='formater' />
      <MainContent>
        <>
          <Header>Formater</Header>
          <Text>
            <>
              Det finnes mange måter å spille MTG på, disse måtene kalles
              formater. Formatet sier noe om hvilke kort man kan bruke, hvor
              mange man har i kortstokken, og hvordan kortstokken kan bygges.
              Formatet sier også noe om hvor mange spillere det passer for, og
              ca hvor lang tid det tar å spille ett spill.{' '}
            </>
          </Text>
          <Text>
            <>
              Formatene deles i to hovedgrupper, lukket (sealed) og konstruert
              (constructed). Lukkede formater starter med uåpnede pakker av
              kort, og inkluderer hvordan man får kort fra pakkene som åpnes til
              å bruke i sin kortstokk. Konstruerte formater åpner for å bruke
              kort man har samlet over tid. Formatet kan fortsatt si noe om
              hvilke kort som kan brukes, men her har man muligheten til å bruke
              samme kortstokk flere ganger, bli kjent med den over tid, og
              forbedre den litt etter litt.
            </>
          </Text>
          <Entry
            header='Commander'
            list={
              <ul>
                <li>Konstruert</li>
                <li>3-5 spillere</li>
                <li>~2 timer</li>
                <li>100 kort</li>
                <li>40 hp</li>
              </ul>
            }
          >
            <>
              <Text>
                <>
                  Commander er en av de mest populære formatene av MTG. Det er
                  to spesielle regler for dette formatet. For det første er det
                  en unikhetsregel, som sier at man bare kan ha ett eksemplar av
                  hvert kort, med mindre kortet spesifikt sier noe annet. Den
                  andre er kommandantregelen. Blandt de 100 kortene velger man
                  en som er kommandant for kortstokken. Kommandanten må være en
                  legendarisk skapning, eller være et kort som spesifikt sier at
                  det kan være kommandant. De andre kortene i kortstokken kan
                  bare ha farger som også er i kommandantens fargeidentitet. Det
                  introduseres også en egen kommandantsone i dette formatet.
                  Kommandantent starter i kommandantsonen, og kan spilles
                  derifra som om kortet var i hånden din. Hver gang kommandanten
                  ville byttet sone, f.eks. når den dør eller blir sendt i
                  eksil, kan man sende den til kommandantsonen i stedet. Når
                  kommandanten sendes tilbake til kommandantsonen iløpet av
                  spillet øker kostnaden for å spille kortet med to fargeløs
                  mana, denne regelen refereres til som kommandantskatt.
                </>
              </Text>
            </>
          </Entry>
          <Entry
            header='Standard'
            list={
              <ul>
                <li>Konstruert</li>
                <li>2 spillere</li>
                <li>20 minutter</li>
                <li>60+ kort</li>
                <li>20 hp</li>
              </ul>
            }
          >
            <>
              <Text>
                <>
                  Standard formatet spilles en mot en. Kortstokken lages med opp
                  til fire kopier av hvert kort, og man kan bare bruker kort fra
                  de siste 2-3 årene. I løpet av året legges det til nye sett
                  som kan brukes i standard, og når settet som slippes på høsten
                  kommer ut fjernes de fire eldste settene fra standard.
                </>
              </Text>
            </>
          </Entry>
          <Entry
            header='Jumpstart'
            list={
              <ul>
                <li>lukket</li>
                <li>2 spillere</li>
                <li>20 minutter</li>
                <li>40 kort</li>
                <li>20 hp</li>
              </ul>
            }
          >
            <>
              <Text>
                <>
                  Jumpstart formatet er en spesiell form for lukket format der
                  man bruker alle kortene fra to pakker. Pakkene som brukes i
                  jumpstart kommer fra egne sett som er laget for dette
                  formatet. De inneholder land, og andre kort som passer sammen.
                  Før man starter åpner man de to pakkene, fjerner kortet som
                  indikerer temaet for pakken, og stokker sammen resten av
                  kortene. Selve spillet spilles uten noen spesielle regler. Det
                  kan være lurt å se raskt gjennom kortene, spesielt om man er
                  ukjent med mtg.
                </>
              </Text>
            </>
          </Entry>
          <Disclaimer />
        </>
      </MainContent>
    </>
  )
}
