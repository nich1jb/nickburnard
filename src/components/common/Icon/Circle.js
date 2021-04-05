import { COLOURS } from '../constants'

export const CircleIcon = () => {
  return (
    <svg height='100' width='100'>
      <circle cx='50' cy='50' r='40' stroke={COLOURS.ROSE} strokeWidth={7} fill={'none'} />
    </svg>
  )
}
