import styled from 'styled-components'

import { COLOURS } from '../constants'

const { BLACK, CERISE } = COLOURS

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${BLACK};
  margin: 5px;
  width: 50px;
  height: 50px;
  line-height: 0;
  &:hover {
    background-color: ${CERISE};
    cursor: pointer;
  }
`
