import { TitleContainer, Icon, Text } from './Title.styles'

export const Title = ({ icon, children }) => {
  return (
    <TitleContainer>
      <Icon>{icon}</Icon>
      <Text>{children}</Text>
    </TitleContainer>
  )
}
