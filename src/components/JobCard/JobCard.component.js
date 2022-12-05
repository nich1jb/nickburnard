import { JobCardContainer, Image, InnerTitle, Subtitle, TextContainer, Body } from './JobCard.styles'

export const JobCard = ({ logo, title, jobTitle, from, to, children }) => {
  return (
    <JobCardContainer>
      <Image src={logo} />
      <TextContainer>
        <InnerTitle>{title}</InnerTitle>
        <Subtitle>{jobTitle}</Subtitle>
        <Subtitle>
          <i>{`${from}${to ? ` - ${to}` : ''}`}</i>
        </Subtitle>
        <Body>{children}</Body>
      </TextContainer>
    </JobCardContainer>
  )
}
