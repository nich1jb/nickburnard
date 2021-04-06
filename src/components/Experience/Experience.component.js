import styled from 'styled-components'
import { GiBroadsword } from 'react-icons/gi'

import FadeSection from '../FadeSection'
import { Title, Quote } from '../common'
import { COLOURS } from '../common/constants'
import JobCard from './JobCard'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: radial-gradient(${COLOURS.LIGHT_ORCHID} 3px, transparent 4px),
    radial-gradient(${COLOURS.LIGHT_ORCHID} 3px, transparent 4px),
    linear-gradient(${COLOURS.COTTON_CANDY} 4px, transparent 0),
    linear-gradient(
      45deg,
      transparent 74px,
      transparent 75px,
      ${COLOURS.LIGHT_ORCHID} 75px,
      ${COLOURS.LIGHT_ORCHID} 76px,
      transparent 77px,
      transparent 109px
    ),
    linear-gradient(
      -45deg,
      transparent 75px,
      transparent 76px,
      ${COLOURS.LIGHT_ORCHID} 76px,
      ${COLOURS.LIGHT_ORCHID} 77px,
      transparent 78px,
      transparent 109px
    ),
    ${COLOURS.COTTON_CANDY};
  background-size: 109px 109px, 109px 109px, 100% 6px, 109px 109px, 109px 109px;
  background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
`

const ExperienceContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  padding: 0 30px 90px;
`

const Paragraph = styled.p`
  font-size: 16px;
`

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
        <FadeSection>
          <JobCard
            logo={'./images/annalise.png'}
            title={'annalise.ai'}
            jobTitle={'Software Engineer'}
            from={'2020'}
            to={'Present'}
          >
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rhoncus magna. Maecenas ultrices,
              ligula ut faucibus vehicula, elit velit rhoncus ligula, non euismod erat risus imperdiet lorem. Donec leo
              augue, auctor eu pellentesque eget, sollicitudin a tellus. Duis condimentum, augue et gravida elementum,
              dolor risus suscipit tortor, non pretium nibh urna sed urna. Nunc auctor ipsum magna, sed maximus ligula
              maximus eget.
            </Paragraph>
          </JobCard>
        </FadeSection>
        <FadeSection>
          <JobCard logo={'./images/digio.jpeg'} title={'DigIO'} jobTitle={'Software Engineer'} from={'2018'} to={'2020'}>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rhoncus magna. Maecenas ultrices,
              ligula ut faucibus vehicula, elit velit rhoncus ligula, non euismod erat risus imperdiet lorem. Donec leo
              augue, auctor eu pellentesque eget, sollicitudin a tellus. Duis condimentum, augue et gravida elementum,
              dolor risus suscipit tortor, non pretium nibh urna sed urna. Nunc auctor ipsum magna, sed maximus ligula
              maximus eget.
            </Paragraph>
          </JobCard>
        </FadeSection>
        <FadeSection>
          <JobCard
            logo={'./images/odecee.png'}
            title={'Odecee'}
            jobTitle={'Associate Software Engineer'}
            from={'2016'}
            to={'2018'}
          >
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rhoncus magna. Maecenas ultrices,
              ligula ut faucibus vehicula, elit velit rhoncus ligula, non euismod erat risus imperdiet lorem. Donec leo
              augue, auctor eu pellentesque eget, sollicitudin a tellus. Duis condimentum, augue et gravida elementum,
              dolor risus suscipit tortor, non pretium nibh urna sed urna. Nunc auctor ipsum magna, sed maximus ligula
              maximus eget.
            </Paragraph>
          </JobCard>
        </FadeSection>
        <FadeSection>
          <JobCard logo={'./images/nab.png'} title={'nab'} jobTitle={'IBL Student'} from={'2015'}>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rhoncus magna. Maecenas ultrices,
              ligula ut faucibus vehicula, elit velit rhoncus ligula, non euismod erat risus imperdiet lorem. Donec leo
              augue, auctor eu pellentesque eget, sollicitudin a tellus. Duis condimentum, augue et gravida elementum,
              dolor risus suscipit tortor, non pretium nibh urna sed urna. Nunc auctor ipsum magna, sed maximus ligula
              maximus eget.
            </Paragraph>
          </JobCard>
        </FadeSection>
        <FadeSection>
          <JobCard
            logo={'./images/monash.png'}
            title={'Monash University'}
            jobTitle={'Bachelor of Computer Science'}
            from={'2013'}
            to={'2015'}
          >
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rhoncus magna. Maecenas ultrices,
              ligula ut faucibus vehicula, elit velit rhoncus ligula, non euismod erat risus imperdiet lorem. Donec leo
              augue, auctor eu pellentesque eget, sollicitudin a tellus. Duis condimentum, augue et gravida elementum,
              dolor risus suscipit tortor, non pretium nibh urna sed urna. Nunc auctor ipsum magna, sed maximus ligula
              maximus eget.
            </Paragraph>
          </JobCard>
        </FadeSection>
      </ExperienceContainer>
    </MainContainer>
  )
}
