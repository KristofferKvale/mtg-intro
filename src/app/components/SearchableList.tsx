'use client'

import { useState } from 'react'

export type SearchableType<T> = {
  searchableString: string
  item: T
}

type SearchableListProps<T> = {
  list: SearchableType<T>[]
  renderElement: (item: SearchableType<T>) => JSX.Element
  sortFunction: (
    searchString: string
  ) => (a: SearchableType<T>, b: SearchableType<T>) => number
}

export default function SearchableList<T>({
  list,
  renderElement,
  sortFunction,
}: SearchableListProps<T>) {
  const [searchString, setSearchString] = useState<string>('')

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchString(e.currentTarget.value)
  }

  return (
    <>
      <input
        className='bg-stone-800 p-2 border-2 border-sky-500'
        name='Keyword Search'
        type='search'
        onChange={handleOnChange}
      />
      {
        <>
          {list
            .filter((value) => {
              return value.searchableString
                .toLowerCase()
                .includes(searchString.toLowerCase())
            })
            .sort(sortFunction(searchString))
            .map((value) => {
              return renderElement(value)
            })}
        </>
      }
    </>
  )
}
