import { Color } from '../types/types'

const lessThan600 = ['-50', '100', '200', '300', '400', '500']

export function getTextColor(backgroundColor: Color): Color {
  if (backgroundColor === 'black') {
    return 'white'
  }
  if (backgroundColor === 'white') {
    return 'black'
  }
  console.log(backgroundColor.substring(-3))
  if (lessThan600.includes(backgroundColor.substring(-3))) {
    return 'black'
  } else {
    return 'white'
  }
}
