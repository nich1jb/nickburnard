import { COLOURS } from '../constants'

export const CrossIcon = () => {
  return (
    <svg height='50' width='50'>
      <line x1='-25' y1='25' x2='50' y2='25' stroke={'#053178'} strokeWidth={15} />
      <line x1='25' y1='0' x2='25' y2='50' stroke={'#053178'} strokeWidth={15} />
    </svg>
  )
}
