import { BsPerson } from 'react-icons/bs'
import { ToWords } from 'to-words'
import FadeSection from '../common/FadeSection'
import { Title, Quote } from '../common'
import { Paragraph } from '../common/styles'
import { MainContainer, AboutContainer, ContentContainer, AboutText, ProfileImage, Image } from './About.styles'

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
