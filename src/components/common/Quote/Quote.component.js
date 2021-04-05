import styled from 'styled-components'

import { COLOURS } from '../constants'

const MainContainer = styled.span`
  color: ${COLOURS.SCORPION};
`

export const Quote = ({ children }) => {
  return <MainContainer>{children}</MainContainer>
}
