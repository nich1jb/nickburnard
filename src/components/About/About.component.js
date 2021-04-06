import styled from 'styled-components'
import { BsPerson } from 'react-icons/bs'

import FadeSection from '../FadeSection'
import { Title, Quote } from '../common'
import { COLOURS } from '../common/constants'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background: radial-gradient(
      circle,
      transparent 20%,
      ${COLOURS.ANAKIWA} 20%,
      ${COLOURS.ANAKIWA} 80%,
      transparent 80%,
      transparent
    ),
    radial-gradient(
        circle,
        transparent 20%,
        ${COLOURS.ANAKIWA} 20%,
        ${COLOURS.ANAKIWA} 80%,
        transparent 80%,
        transparent
      )
      50px 50px,
    linear-gradient(${COLOURS.PERANO} 8px, transparent 8px) 0 -4px,
    linear-gradient(90deg, ${COLOURS.PERANO} 8px, transparent 8px) -4px 0;
  background-color: ${COLOURS.ANAKIWA};
  background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;
`

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
    <MainContainer>
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
                A Software Engineer who loves all things React (though I also have worked with Angular and
                Vue). With four years of frontend experience, I have developed strong engineering skills and
                practices and pride myself on producing large-scale solutions from the ground up. Now a
                Senior, I have been mentoring juniors and leading technical decisions in more recent years. I
                have always loved working with great engineers and people who have a clear vision and see it
                through.
              </Paragraph>
            </AboutText>
          </ContentContainer>
        </FadeSection>
      </AboutContainer>
    </MainContainer>
  )
}
