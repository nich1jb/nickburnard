import styled from 'styled-components'
import { BsPerson } from 'react-icons/bs'
import { ToWords } from 'to-words'

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
  width: 100%;
  max-width: 1200px;
  padding: 0 30px 50px;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  padding-bottom: 40px;
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

const Image = styled.img`
  box-sizing: border-box;
  width: 23%;
  border-radius: 20%;
  margin: 10px;
  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
    margin-right: 0;
  }
  @media (max-width: 420px) {
    height: 70vw;
    width: 70vw;
    margin-right: 0;
  }
`

export const About = ({ scrollToRef }) => {
  const calculateAge = () => {
    var birthDate = new Date('1994-03-18')
    var ageDifMs = Date.now() - birthDate
    var ageDate = new Date(ageDifMs) // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  const toWords = new ToWords()
  const age = calculateAge()
  const yearsInIndustry = toWords.convert(new Date().getFullYear() - 2016).toLowerCase()

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
                  Parker/Spider-Man
                </Quote>
              </Paragraph>
              <Paragraph>
                Hi I'm Nick (he/him), a {age} year old software engineer with around {yearsInIndustry} years of industry
                experience. I like Front End so much that I made this website for you to see. How about that?
              </Paragraph>
              <Paragraph>
                Over the years, I have developed strong engineering skills and practices and pride myself on producing
                large-scale solutions from the ground up and, in more recent years, have been mentoring juniors and
                leading technical decisions. I have always loved working with great engineers and people who have a
                clear vision and see it through.
              </Paragraph>
              <Paragraph>
                Outside of work, I enjoy painting Warhammer while watching trashy tv, playing video games, and spending
                time with my friends. Here's some photos for proof:
              </Paragraph>
            </AboutText>
          </ContentContainer>
          <FadeSection>
            <ContentContainer>
              <Image src='./images/about01_400.png' />
              <Image src='./images/about02_400.png' />
              <Image src='./images/about03_400.png' />
              <Image src='./images/about04_400.png' />
            </ContentContainer>
          </FadeSection>
        </FadeSection>
      </AboutContainer>
    </MainContainer>
  )
}
