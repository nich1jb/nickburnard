import { ParallaxBanner } from 'react-scroll-parallax'
import { SiLinkedin, SiInstagram, SiGithub } from 'react-icons/si'
import { CircleButton } from '../common'
import IconsOverlay from '../IconsOverlay'
import { BannerContainer, HeaderOverlay, ScrollDownIcon, HeaderText, SocialsContainer } from './Header.styles'

export const Header = ({ handleClick }) => {
  return (
    <BannerContainer>
      <ParallaxBanner
        style={{
          height: '100vh',
        }}
        className='banner-banner'
        layers={[
          {
            image: './images/background.jpg',
            amount: 0.4,
          },
        ]}
      />
      <IconsOverlay />
      <HeaderOverlay>
        <HeaderText>nick burnard</HeaderText>
        <HeaderText>front end developer</HeaderText>
        <SocialsContainer>
          <CircleButton link={'https://www.linkedin.com/in/nick-burnard/'}>
            <SiLinkedin />
          </CircleButton>
          <CircleButton link={'https://www.instagram.com/nich1jb/'}>
            <SiInstagram />
          </CircleButton>
          <CircleButton link={'https://github.com/nich1jb'}>
            <SiGithub />
          </CircleButton>
        </SocialsContainer>
        <ScrollDownIcon onClick={handleClick} />
      </HeaderOverlay>
    </BannerContainer>
  )
}
