import styled from 'styled-components'

import { COLOURS } from '../constants'

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${COLOURS.BLACK};
  margin: 5px;
  width: 50px;
  height: 50px;
  line-height: 0;
  &:hover {
    background-color: ${COLOURS.CERISE};
    cursor: pointer;
  }
`

export const CircleButton = ({ link, children }) => {
  const openLink = () => {
    window.open(link, '_blank')
  }
  return <Circle onClick={openLink}>{children}</Circle>
}
