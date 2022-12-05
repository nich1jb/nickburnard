import styled from 'styled-components'

import { COLOURS } from '../common/constants'

const { BLACK_40, WHITE_40, COLBALT, ST_TROPAZ, TUNDURA } = COLOURS

export const JobCardContainer = styled.div`
  border: 1px solid ${BLACK_40};
  border-radius: 5px;
  background: ${WHITE_40};
  padding: 10px;
  display: flex;
  margin-top: 20px;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
`

export const InnerTitle = styled.div`
  color: ${COLBALT};
  font-size: 1.5em;
  @media (max-width: 480px) {
    text-align: center;
  }
`

export const Subtitle = styled.div`
  color: ${ST_TROPAZ};
  @media (max-width: 480px) {
    text-align: center;
  }
`

export const TextContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`

export const Body = styled.div`
  color: ${TUNDURA};
`
