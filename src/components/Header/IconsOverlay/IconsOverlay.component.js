import styled from 'styled-components'
import { COLOURS } from '../../common/constants'

import { CrossIcon, CircleIcon, ZigZagIcon } from '../../common/Icon'

const MainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
`

const CrossContainer = styled.div`
  position: absolute;
  left: 15vw;
  top: 25vh;
`

const CircleContainer = styled.div`
  position: absolute;
  left: 75vw;
  top: 50vh;
`

const ZigZagContainer1 = styled.div`
  position: absolute;
  left: 10vw;
  top: 80vh;
  transform: rotate(40deg);
`

const ZigZagContainer2 = styled.div`
  position: absolute;
  left: 90vw;
  top: 30vh;
  transform: rotate(-25deg);
`

export const IconsOverlay = () => {
  return (
    <MainContainer>
      <CrossContainer>
        <CrossIcon />
      </CrossContainer>
      <CircleContainer>
        <CircleIcon />
      </CircleContainer>
      <ZigZagContainer1>
        <ZigZagIcon colour={COLOURS.ROSE} />
      </ZigZagContainer1>
      <ZigZagContainer2>
        <ZigZagIcon />
      </ZigZagContainer2>
    </MainContainer>
  )
}
