import { GiBroadsword } from 'react-icons/gi'
import FadeSection from '../common/FadeSection'
import { Title, Quote } from '../common'
import { Paragraph } from '../common/styles'
import JobCard from '../JobCard'
import { jobCards } from './utils/constants'
import { MainContainer, ExperienceContainer } from './Experience.styles'

export const Experience = () => {
  return (
    <MainContainer>
      <ExperienceContainer>
        <FadeSection>
          <Title icon={<GiBroadsword />}>My Journey</Title>
          <Paragraph>
            <Quote>"Do you know how much I've sacrificed!? " - Norman Osborn/Green Goblin</Quote>
          </Paragraph>
        </FadeSection>
        {jobCards.map(({ logo, title, jobTitle, from, to, description }) => (
          <FadeSection>
            <JobCard logo={logo} title={title} jobTitle={jobTitle} from={from} to={from !== to ? to : null}>
              {description.map((descriptionParagraph) => (
                <Paragraph>{descriptionParagraph}</Paragraph>
              ))}
            </JobCard>
          </FadeSection>
        ))}
      </ExperienceContainer>
    </MainContainer>
  )
}
