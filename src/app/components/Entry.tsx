import { StaticImageData } from 'next/image'
import Icon from './Icon'
import Header from './Header'
import { Color } from '../types/types'
import { getTextColor } from '../utils/colors'
import { copyright } from '../data/officialTexts'

type EntryProps = {
  iconImage?: StaticImageData
  header: string
  list: JSX.Element
  children: JSX.Element
  headerLevel?: 1 | 2 | 3 | 4
  whiteBackground: boolean
  imageIsCopyrighted?: boolean
}

export default function Entry({
  iconImage,
  header,
  list,
  children,
  headerLevel = 2,
  whiteBackground = false,
  imageIsCopyrighted = false,
}: EntryProps) {
  const bgColorClass = whiteBackground ? 'bg-white text-black' : ''
  return (
    <div
      className={
        'grid grid-cols-3 md:grid-cols-4 gap-4 rounded-md p-4 ' + bgColorClass
      }
    >
      <div className='col-span-1'>
        {iconImage ? (
          <>
            <Icon image={iconImage} />
            {imageIsCopyrighted ? (
              <p className='text-xs'>{copyright}</p>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
      <div className='col-span-2 md:col-span-3 align-center'>
        <Header level={headerLevel}>{header}</Header>
      </div>
      <div className='col-span-1'>{list}</div>
      <div className='col-span-2 md:col-span-3'>{children}</div>
    </div>
  )
}
