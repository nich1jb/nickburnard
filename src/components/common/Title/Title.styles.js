import styled from 'styled-components'

import { COLOURS } from '../constants'

const { STRATOS } = COLOURS

export const TitleContainer = styled.div`
  padding-top: 90px;
  font-size: 32px;
  padding-bottom: 20px;
`

export const Icon = styled.span`
  svg {
    width: 50px;
    height: 50px;
    color: #00000075;
  }
`

export const Text = styled.span`
  color: ${STRATOS};
  left: -20px;
`
