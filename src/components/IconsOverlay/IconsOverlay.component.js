import { COLOURS } from '../common/constants'
import { CrossIcon, CircleIcon, ZigZagIcon } from '../common/Icons'
import {
  MainContainer,
  CrossContainer,
  CircleContainer,
  ZigZagContainer1,
  ZigZagContainer2,
} from './IconsOverlay.styles'

const { ROSE } = COLOURS

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
        <ZigZagIcon colour={ROSE} />
      </ZigZagContainer1>
      <ZigZagContainer2>
        <ZigZagIcon />
      </ZigZagContainer2>
    </MainContainer>
  )
}
