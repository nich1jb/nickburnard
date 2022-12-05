import styled from 'styled-components'
import { COLOURS } from '../../constants'

const { WHITE } = COLOURS

export const IconContainer = styled.div`
  svg {
    width: 100px;
    height: 100px;
    color: ${(props) => (props.colour ? props.colour : WHITE)};
  }
`
