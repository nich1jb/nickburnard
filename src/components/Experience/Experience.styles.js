import styled from 'styled-components'
import { COLOURS } from '../common/constants'

const { LIGHT_ORCHID, COTTON_CANDY } = COLOURS

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: radial-gradient(${LIGHT_ORCHID} 3px, transparent 4px),
    radial-gradient(${LIGHT_ORCHID} 3px, transparent 4px), linear-gradient(${COTTON_CANDY} 4px, transparent 0),
    linear-gradient(
      45deg,
      transparent 74px,
      transparent 75px,
      ${LIGHT_ORCHID} 75px,
      ${LIGHT_ORCHID} 76px,
      transparent 77px,
      transparent 109px
    ),
    linear-gradient(
      -45deg,
      transparent 75px,
      transparent 76px,
      ${LIGHT_ORCHID} 76px,
      ${LIGHT_ORCHID} 77px,
      transparent 78px,
      transparent 109px
    ),
    ${COTTON_CANDY};
  background-size: 109px 109px, 109px 109px, 100% 6px, 109px 109px, 109px 109px;
  background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
`

export const ExperienceContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  padding: 0 30px 90px;
`
