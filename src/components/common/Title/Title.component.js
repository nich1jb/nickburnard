import styled from 'styled-components'

import { COLOURS } from '../constants'

const TitleContainer = styled.div`
  padding-top: 90px;
  font-size: 32px;
  padding-bottom: 20px;
`

const Icon = styled.span`
  svg {
    width: 50px;
    height: 50px;
    color: #00000075;
  }
`

const Text = styled.span`
  color: ${COLOURS.STRATOS};
  left: -20px;
`

export const Title = ({ icon, children }) => {
  return (
    <TitleContainer>
      <Icon>{icon}</Icon>
      <Text>{children}</Text>
    </TitleContainer>
  )
}
