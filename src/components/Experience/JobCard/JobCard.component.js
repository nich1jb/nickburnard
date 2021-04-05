import styled from 'styled-components'

import { COLOURS } from '../../common/constants'

const MainContainer = styled.div`
  border: 1px solid ${COLOURS.BLACK_40};
  border-radius: 5px;
  background: ${COLOURS.WHITE_40};
  padding: 10px;
  display: flex;
  margin-top: 20px;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

const Image = styled.img`
  width: 200px;
  height: 200px;
`

const InnerTitle = styled.div`
  color: ${COLOURS.COLBALT};
  font-size: 1.5em;
  @media (max-width: 480px) {
    text-align: center;
  }
`

const Subtitle = styled.div`
  color: ${COLOURS.ST_TROPAZ};
  @media (max-width: 480px) {
    text-align: center;
  }
`

const TextContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`

const Body = styled.div`
  color: ${COLOURS.TUNDURA};
`

export const JobCard = ({ logo, title, jobTitle, from, to, children }) => {
  return (
    <MainContainer>
      <Image src={logo} />
      <TextContainer>
        <InnerTitle>{title}</InnerTitle>
        <Subtitle>{jobTitle}</Subtitle>
        <Subtitle>
          <i>{`${from}${to ? ` - ${to}` : ''}`}</i>
        </Subtitle>
        <Body>{children}</Body>
      </TextContainer>
    </MainContainer>
  )
}
