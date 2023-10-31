'use client'
import Disclaimer from '../components/Disclaimer'
import Header from '../components/Header'
import LeftMenu from '../components/LeftMenu'
import MainContent from '../components/MainContent'
import SearchableList, { SearchableType } from '../components/SearchableList'
import { KEYWORDS, Keyword } from '../data/keywords'

const renderElement = (searchableItem: SearchableType<Keyword>) => {
  return (
    <>
      <h1>{searchableItem.item.name}</h1>
      <p>{searchableItem.item.description}</p>
    </>
  )
}

type SortFunction = (
  a: SearchableType<Keyword>,
  b: SearchableType<Keyword>
) => number

const sortFunction = (searchString: string): SortFunction => {
  const sortFunc = (a: SearchableType<Keyword>, b: SearchableType<Keyword>) => {
    if (
      a.item.name.includes(searchString) &&
      !b.item.name.includes(searchString)
    ) {
      return -1
    } else if (
      !a.item.name.includes(searchString) &&
      b.item.name.includes(searchString)
    ) {
      return 1
    } else {
      return 0
    }
  }
  return sortFunc
}

export default function Ordliste() {
  return (
    <>
      <LeftMenu current='ordliste' />
      <MainContent>
        <>
          <Header>Ordliste</Header>
          <SearchableList
            list={KEYWORDS}
            renderElement={renderElement}
            sortFunction={sortFunction}
          />
          <Disclaimer />
        </>
      </MainContent>
    </>
  )
}
