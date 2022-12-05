import { Circle } from './CircleButton.styles'

export const CircleButton = ({ link, children }) => {
  const openLink = () => {
    window.open(link, '_blank')
  }
  return <Circle onClick={openLink}>{children}</Circle>
}
