import styled, { keyframes } from 'styled-components'
import { ParallaxBanner } from 'react-scroll-parallax'
import { tada } from 'react-animations'
import { IoIosArrowDown } from 'react-icons/io'
import { SiLinkedin, SiInstagram, SiGithub } from 'react-icons/si'

import { COLOURS } from '../common/constants'
import { CircleButton } from '../common'
import IconsOverlay from './IconsOverlay'

const bounceAnimation = keyframes`${tada}`

const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

const ScrollDownIcon = styled(IoIosArrowDown)`
  animation: 2s ${bounceAnimation};
  animation-iteration-count: 2;
  color: ${COLOURS.WHITE};
  width: 5em;
  height: 5em;
  cursor: pointer;
  position: absolute; 
  bottom 0;
`

const HeaderText = styled.h1`
  color: ${COLOURS.WHITE};
  font-size: 2.5em;
  font-family: 'Kiwi Maru', serif;
  text-align: center;
`

const SocialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    color: ${COLOURS.WHITE};
    width: 30px;
    height: 30px;
  }
`

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
            amount: 0.1,
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
