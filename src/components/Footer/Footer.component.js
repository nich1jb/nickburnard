import styled from 'styled-components'

import { COLOURS } from '../common/constants'

const Link = styled.a`
  color: ${COLOURS.ROSE};
`

const FooterContainer = styled.div`
  font-family: 'Kiwi Maru', serif;
  width: 100%;
  background: ${COLOURS.STRATOS};
  color: white;
  text-align: center;
  padding: 10px 0;
`

export const Footer = () => {
  return (
    <FooterContainer>
      Made with <Link href='https://reactjs.org/'>React</Link>. Background vector created by{' '}
      <Link href='https://www.freepik.com/vectors/background'>freepik</Link>
    </FooterContainer>
  )
}
