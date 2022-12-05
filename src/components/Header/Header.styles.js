import styled, { keyframes } from 'styled-components'
import { tada } from 'react-animations'
import { IoIosArrowDown } from 'react-icons/io'
import { COLOURS } from '../common/constants'

const bounceAnimation = keyframes`${tada}`

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const HeaderOverlay = styled.div`
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

export const ScrollDownIcon = styled(IoIosArrowDown)`
  animation: 2s ${bounceAnimation};
  animation-iteration-count: 2;
  color: ${COLOURS.WHITE};
  width: 5em;
  height: 5em;
  cursor: pointer;
  position: absolute; 
  bottom 0;
`

export const HeaderText = styled.h1`
  color: ${COLOURS.WHITE};
  font-size: 2.5em;
  font-family: 'Kiwi Maru', serif;
  text-align: center;
`

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    color: ${COLOURS.WHITE};
    width: 30px;
    height: 30px;
  }
`
