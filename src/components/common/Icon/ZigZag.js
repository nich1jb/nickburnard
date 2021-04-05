import styled from 'styled-components'
import { CgShapeZigzag } from 'react-icons/cg'

import { COLOURS } from '../constants'

const MainContainer = styled.div`
  svg {
    width: 100px;
    height: 100px;
    color: ${(props) => (props.colour ? props.colour : COLOURS.WHITE)};
  }
`

export const ZigZagIcon = ({ colour }) => {
  return (
    <MainContainer colour={colour}>
      <CgShapeZigzag />
    </MainContainer>
  )
}
