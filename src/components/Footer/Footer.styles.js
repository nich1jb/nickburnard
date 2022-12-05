import styled from 'styled-components'

import { COLOURS } from '../common/constants'

const { ROSE, STRATOS } = COLOURS

export const Link = styled.a`
  color: ${ROSE};
`

export const FooterContainer = styled.div`
  font-family: 'Kiwi Maru', serif;
  width: 100%;
  background: ${STRATOS};
  color: white;
  text-align: center;
  padding: 10px 0;
`
