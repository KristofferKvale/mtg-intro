import { SearchableType } from '../components/SearchableList'

export type Keyword = {
  name: string
  description: string
}

const KEYWORD_ITEMS: Keyword[] = [
  {
    name: 'Aura',
    description:
      'Aura er en undertype for fortryllelser (Enchantment). Dette nøkkelordet betyr at fortryllelsen kan festes på en skapning (Creature). Se også attach.',
  },
  {
    name: 'Attach',
    description:
      'Attach brukes på auraer (Aura), utstyr (Equipment) og forsterkninger (Fortifications). Dette nøkkelordet brukes for å si at kortet skal knyttes til et annet kort, ofte av en gitt type. Når dette skjer er det vanlig å legge kortet med attach skrevet på bak kortet det knyttes til.',
  },
  {
    name: 'Counter',
    description:
      'Dette nøkkelordet brukes i to sammenhenger. 1) Kontre (Counter), å stoppe et kort fra å bli spilt. Da vil det typisk stå "Counter target" etterfulgt av type kort, kan også være spell som betyr alle kort som ikke er land. 2) Teller (counter) er en modifikasjon av et kort, og disse kommer i mange typer. En av de vanligste er +1/+1 tellere, for hver av disse en skapning (Creature) har får en en ekstra kraft (power) og liv (life). Tellere representeres ofte med terninger på det kortet den gjelder for.',
  },
  {
    name: 'Deathtouch',
    description:
      'Deathtouch betyr at dersom skapningen (Creature) som har dette, får gjort minst ett poeng med skade (damage) mot en annen skapning, så vil skapningen som blir angrepet dø. Dette blir stoppet dersom skapningen som blir angrepet har Indestructible.',
  },
  {
    name: 'Double Strike',
    description:
      'Skapninger med dette nøkkelordet gir skade både som First Strike og ved vanlig skade. Gitt at den ikke dør ved First Strike skade gjør den altså dobbel skade.',
  },
  {
    name: 'First Strike',
    description:
      'First Strike er et nøkkelord som sier at skapningen (Creature) gir skade først. Det vil si at om bare én av angriper eller blokker har First Strike, og kan gjøre nok skade på den andre til at den dør, så tar ikke skapningen (Creature) med First Strike skade.',
  },
  {
    name: 'Flying',
    description:
      'Flyr (Flying) nøkkelordet betyr at bare andre skapninger med nøkkelordet Flying eller Reach kan blokkere angrep fra skapningen (Creature). Skapninger med Flyr kan fortsatt blokkere andre skapninger som ikke har nøkkelordet.',
  },
  {
    name: 'Haste',
    description:
      'Hast (Haste) nøkkelordet betyr at skapningen kan angripe samme turen den kommer til slagmarken. Den slipper altså unna Summoning Sickness. Du kan også bruke effekter på kortet der kostnaden inkluderer å tappe kortet samme turen det kommer på slagmarken.',
  },
  {
    name: 'Indestructible',
    description:
      'Indestructable betyr at skapningen ikke kan dø av skade eller effekter som bruker ordet Destroy. Skapningen kan fortsatt sendes til gravplassen, for eksempel om maks liv (Thoughness) reduseres til 0.',
  },
  {
    name: 'Lifelink',
    description:
      'Lifelink betyr at spilleren som kontrollerer skapningen får liv tilsvarende det skapningen gir i skade når den gjør dette. Dette inkluderer om skapningen som blokkerer har Indestrucktable, siden den tar skade selv om den ikke kan dø av skaden.',
  },
  {
    name: 'Reach',
    description:
      'Reach betyr at skapningen kan blokkere skapninger med Flying, selv om den ikke selv har Flying.',
  },
  {
    name: 'Trample',
    description:
      'Skapninger som har nøkkelordet Trample gjør skade som er til overs etter blokkere til spilleren (om en spiller var målet). Trample fungerer ikke på Planeswalkers med mindre kortet har "Trample over Planeswalkers"',
  },
  {
    name: 'Tap',
    description:
      'Å tappe (To tap) er en måte å vise at kortet har blitt brukt, dette vises vanligvis ved å snu kortet sidelengs. Kortet vil typisk forbli tappet til din neste turs untap steg.',
  },
  {
    name: 'Additional Cost',
    description:
      'Noen kort har i beskrivelsen en tillegskostnad (Additional Cost), for å spille kortet må spilleren både betale mana kostnaden og denne kostnaden.',
  },
  {
    name: 'Basic Land',
    description:
      'Grunnlegende land (Basic Land) er den enkleste kilden til mana. Det finnes én type for hver farge mana, og ved å tappe landet får man én av den gitte fargen. Du kan sjekke hvilken type som hører til hvilken farge under "Mana og Farger".',
  },
  {
    name: 'Color',
    description:
      'Fargen til et kort er gitt av fargene det koster å kaste den. Det finnes fem farger i mtg; hvit, blå, svart, rød og grønn. Sier en effekt at du skal velge en farge, må du velge en av de fem.',
  },
  {
    name: 'Colorless',
    description:
      'Land og de fleste gjenstander (Artifacts) har ikke en farge. Dette er fordi fargen til kortet er gitt av kostnaden til kortet. Ingen landkort har en mana-kostnad, og mange gjenstander (Artifacts) har bare fargeløs kostnad.',
  },
  {
    name: 'Combat Damage',
    description:
      'Combat Damage refererer til skade som blir gitt fra skapninger under angrep og blokkering fra kortets Power. All annen skade, også under Løs Resultat steget (Resolve Combat step), teller IKKE som Combat Damage.',
  },
  {
    name: 'Control',
    description:
      'Du har kontroll over (Control) kort du spiller, og deres effekter. Andre spillere kan ikke gjøre valg eller bruke effekter på kort du kontrollerer, med mindre effekten eksplisitt sier det. Noen effekter inkluderer at du overtar kontrollen (gain control) på et kort, det vil da typisk flyttes til den spilleren sitt område.',
  },
  {
    name: 'Controller',
    description:
      'Controller refererer til spilleren som har kontroll over kortet, dette er typisk spilleren som spilte kortet, med mindre en effekt har endret dette.',
  },
  {
    name: 'Cost',
    description:
      'Kostnaden (Cost) er det man må betale for å spille et kort eller aktivere en effekt. Kostnaden kan inkludere mana, ofring av skapninger, tapping og annet.',
  },
  {
    name: 'Damage',
    description:
      'Skade (Damage) reduserer livet til en spiller, skapning (Creature) eller Planeswalker.',
  },
  {
    name: 'Defender',
    description:
      'Beskytter (Defender) er et nøkkelord som brukes på skapninger (Creatures). Det betyr at skapningen bare kan blokkere angrep, men ikke angripe selv.',
  },
  {
    name: 'Destroy',
    description:
      'Ødelegg (Destroy) skjer med skapninger som tar mer skade enn de har liv, om de ikke har nøkkelordet Indestructable. Det brukes også i noen effekter for å si at man skal ødelegge et mål, også her stoppes det om målet har eller får Indestructable før effekten slår til. Når et kort blir ødelagt flyttes det til gravplassen',
  },
  {
    name: 'Discard',
    description:
      'Discard nøkkelordet betyr å legge bort kort, altså å ta et kort fra hånden din og flytte det til gravplassen din.',
  },
  {
    name: 'Enchant',
    description:
      'Dette nøkkelordet brukes på Aura kort. Det følges opp med typen man kan gi effekten til, f.eks. Creature eller Land.',
  },
  {
    name: 'Enters the Battlefield',
    description:
      'Noen kort inkluderer i beskrivelsen en effekt som skjer når kortet kommer i spill (Enters the Battlefield). Denne effekten skjer med en gang kortet kommer i spill, altså etter at eventuelle direkte reaksjoner på å spille kortet er over.',
  },
  {
    name: 'Equipment',
    description:
      'Utstyr (Equipment) er en undertype av gjenstander (Artifacts) som kan festes på skapninger (Creatures). Se også Attach.',
  },
  {
    name: 'Exile',
    description:
      'Bannlys (Exile) betyr vanligvis å sende et kort ut av spillet, men i noen tilfeller inkluderer effekten at kortet som bannlyses kan spilles i en gitt periode. Det at et kort er bannlyst vises ofte ved å legge det sidelengs i gravplassen, eller i en egen bunke på bordet.',
  },
  {
    name: 'Flash',
    description:
      'Flash betyr at kortet kan spilles på samme tidspunkt som man kan spille et øyeblikkelig (Instant) kort. Dette kan f.eks. være som en reaksjon på at en annen spiller spiller et kort.',
  },
  {
    name: 'Flashback',
    description:
      'Trolldom- (Sorcery) og øyeblikkelige- (Instant) kort kan ha dette nøkkelordet. Det betyr at kortet kan spilles fra gravplassen for den gitte kostnaden. Kortet vil bli bannlyst (Exiled) etterpå, enten effekten skjer eller blir kontret (Countered 1)',
  },
  {
    name: 'Goad',
    description:
      'Det at en skapning har blitt Goaded betyr at den må angripe under kampfasen til kontrollørens (Controller) neste tur, om den kan, og den må angripe en annen spiller. Dersom alle andre spillere har Goaded en skapning når kontrolløren skal annonsere angripere, kan kontrolløren velge selv hvilken spiller den skal angripe.',
  },
  {
    name: 'Hexproof',
    description:
      'Nøkkelordet Hexproof betyr at spilleren eller kortet som har det ikke kan være målet av en motstanders effekt. Skapningen eller spilleren kan fortsatt bli påvirket av andre spillere sine effekter.',
  },
  {
    name: 'Leaves the Battlefield',
    description:
      'Et kort forlater slagmarken (Leaves the Battlefield) når det går fra slagmarken til et annet sted.',
  },
  {
    name: 'Legendary',
    description:
      'Legendarisk (Legendary) er en overtype for kort. Dersom det ikke er noe som gjør at man ignorerer Legend Rule, så kan man bare ha ett legendarisk kort med samme navn i spill. Dersom du prøver å få flere legendariske kort i spill med samme navn, må du velge en av dem å beholde. Resten går rett til gravplassen din. Legg merke til at kortene må være i spill for at Legend Rule skal slå inn, altså vil Enters the Battlefield effekter skje for kopien(e).',
  },
  {
    name: 'Mana',
    description:
      'Mana er en ressurs som brukes for å spille kort, eller betale for effekter. Mana finnes i fem farger, i tillegg til fargeløs. Du kan lese mer om mana under "Mana og Farger".',
  },
  {
    name: 'Mana Ability',
    description:
      'Mana effekter (Mana Abilities) er effekter som gir deg mana. De går ikke på Stack-en, og kan derfor ikke besvares. Spilleren får mana-en umiddelbart.',
  },
  {
    name: 'Mana Value',
    description:
      'Mana verdien (Mana Value) til et kort er den totale kostnaden i mana for å spille et kort. Dette betyr f.eks. at et kort som koster en grønn mana og en blå mana, og en fargeløs mana har mana verdien 2.',
  },
  {
    name: 'Menace',
    description:
      'Menace er et nøkkelord for skapninger (Creature). En skapning som har Menace kan bare blokkes om den blokkes av mer enn én skapning.',
  },
  {
    name: 'Mulligan',
    description:
      'Mulligan er noe som skjer før spillet starter. Det er muligheten til å bytte ut hånden man starter spillet med. Typisk må man gi fra seg ett kort for hver gang man tar en Muligan. Dette skjer ved å legge kortet(ene) på bunn av kortstokken sin. I noen formater har man en gratis Muligan, da trenger man ikke å gi fra seg kort for den.',
  },
  {
    name: 'Opponent',
    description:
      'En motstander (Opponent) refererer til en annen spiller enn den som kontrollerer kortet.',
  },
  {
    name: 'Owner',
    description:
      'Eieren (Owner) til et er den spilleren som hadde kortet i kortstokken sin før spillet startet. Dette blir ikke overskrevet om en annen spiller overtar kontrollen til et kort. Et token er eid av den spilleren som kontrollerte det når det kom i spill. Dette betyr at om spilleren som overtok kontrollen av et kort klarte å bytte det ut mot en kopi, så er kopien den spilleren sitt.',
  },
  {
    name: 'Permanent',
    description:
      'Et parmanent kort er et kort eller et token som er i spill. Dette er typisk enten en skapning (Creature), gjenstand (Artifact), fortryllelse (Enchantment) eller land. De må aktivt fjernes som en del av spillet, og kan ikke bare tas ut av spill.',
  },
  {
    name: 'Planeswalker',
    description:
      'Planeswalker er en type kort. Når de kommer i spill starter de med en Loyalty Counter på seg. Den initielle verdien til telleren (Counter 2) er vist nederst til høyre på kortet. Den har effekter som betales for ved å øke eller minke verdien til telleren. Planeswalker kort kan være målet for angrep fra andre spilleres skapninger (Creatures). Når Loyalty Counter-en til en Planeswalker når 0 blir den sendt til gravplassen.',
  },
  {
    name: 'Player',
    description:
      'En spiller (Player) er en hvilken som helst spiller, inkludert deg selv.',
  },
  {
    name: 'Put onto the Battlefield',
    description:
      'Når noe legges på slagmarken (Put on the Battlefield) så blir det lagt rett på slagmarken. Kortet blir altså ikke spilt, og man betaler ikke kostnaden for å spille kortet.',
  },
  {
    name: 'Sacrifice',
    description:
      'Å ofre (Sacrifice) et kort betyr å flytte det fra din slagmark til eierens gravplass. Dette er ikke det samme som å ødelegge (Destroy) et kort, og blir ikke stoppet av f.eks. Indestructable.',
  },
  {
    name: 'Scry',
    description:
      'Scry betyr å se på det øverste kortet eller kortene i kortstokken din. Det følges typisk opp med et tall som sier antall kort du kan se på. For hvert av kortene du ser på kan du velge å legge det tilbake på toppen av kortstokken din, eller på bunnen. Du kan også velge rekkefølgen de legges tilbake i.',
  },
  {
    name: 'Shuffle',
    description:
      'Å stokke (Shuffle) betyr å stokke kortstokken din, det kan også brukes om å stokke et kort tilbake i kortstokken din.',
  },
  {
    name: 'Source',
    description:
      'Effekter og skade har en kilde (Source). Kilden er det kortet skaden eller effekten kommer fra.',
  },
  {
    name: 'Spell',
    description:
      'Alle kort som ikke er land er spells når de blir spilt. Spells som ikke er øyeblikkelige (Instant), eller har Flash, kan bare spilles i din hovedfase. F.eks. når en gjenstand (Artifact) blir spilt er det en spell, men om effekten får skje blir det en gjenstand på slagmarken.',
  },
  {
    name: 'Token',
    description:
      'Token finnes i flere typer. Noen av de vanlige er Tresure, Clue, Blood, kopi (Copy) og skapning (Creature). Tokens er alltid Permanente. Når et token forlater slagmarken går det først til det nye stedet (f.eks. hånden din), før det umiddelbart etterpå forsvinner fra spillet.',
  },
  {
    name: 'Vigilance',
    description:
      'Nøkkelordet Vigilance betyr at skapningen ikke blir tappet av å angripe. Det betyr IKKE at et kort som allerede er tappet kan angripe.',
  },
  {
    name: 'X',
    description:
      'X er en verdi du selv velger. Dette kan f.eks. være i kostnaden til et kort, og blir typisk referert til i effekten eller beskrivelsen av kortet som har det som kostnad. Dette kan f.eks. være et kort som koster en hvit mana og X fargeløs, og som i beskrivelsen genererer X 1/1 skapning- (Creature) tokener.',
  },
  {
    name: 'Creature',
    description:
      'En skapning (Creature) er en type for kort. Det refererer vanligvis til skapninger som er på slagmarken. Når man spiller et kort som gir deg en skapning blir det referert til som en Creature Spell frem til effekten får skje.',
  },
]

export const KEYWORDS: SearchableType<Keyword>[] = KEYWORD_ITEMS.map(
  (keyword) => {
    return {
      item: keyword,
      searchableString: `${keyword.name.toLowerCase()} ${keyword.description.toLowerCase()}`,
    }
  }
)
