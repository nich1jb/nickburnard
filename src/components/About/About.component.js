import styled from 'styled-components'
import { BsPerson } from 'react-icons/bs'

import FadeSection from '../FadeSection'
import { Title, Quote } from '../common'

const AboutContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  @media (max-width: 768px) {
    height: 100vh;
  }
  @media (max-width: 480px) {
    height: 150vh;
  }
  @media (max-width: 320px) {
    height: 200vh;
  }
  width: 100%;
  max-width: 1200px;
  padding: 0 30px 90px;
`

const ContentContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
`

const Paragraph = styled.p`
  font-size: 16px;
`

const ProfileImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin-right: 30px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`

export const About = ({ scrollToRef }) => {
  return (
    <AboutContainer ref={scrollToRef}>
      <FadeSection>
        <Title icon={<BsPerson />}>Who am I?</Title>
        <ContentContainer>
          <ProfileImage src='./images/itsme.jpg' />
          <AboutText>
            <Paragraph>
              <Quote>
                "Who am I? You sure you want to know? The story of my life is not for the faint of heart. If somebody
                told you I was just your average, ordinary guy, not a care in the world, then somebody lied." - Peter
                Parker
              </Quote>
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper, est in placerat ornare, ligula tellus
              vestibulum quam, in pulvinar urna lorem eu nisl. Sed vitae nisi orci. Nulla at libero urna. Sed et sem
              eget massa pulvinar auctor eget eget eros. Nam blandit blandit dolor, in pellentesque odio consequat
              vitae. Nulla facilisi. In dui ligula, dapibus quis urna elementum, semper viverra nulla. Nulla
              pellentesque augue sit amet ultrices accumsan. Aliquam erat volutpat. Donec vitae nibh aliquet nisl
              scelerisque tincidunt. Aliquam in dapibus enim.
            </Paragraph>
          </AboutText>
        </ContentContainer>
      </FadeSection>
    </AboutContainer>
  )
}
