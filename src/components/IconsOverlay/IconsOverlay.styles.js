import styled from 'styled-components'

export const MainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
`

export const CrossContainer = styled.div`
  position: absolute;
  left: 15vw;
  top: 25vh;
`

export const CircleContainer = styled.div`
  position: absolute;
  left: 75vw;
  top: 50vh;
`

export const ZigZagContainer1 = styled.div`
  position: absolute;
  left: 10vw;
  top: 80vh;
  transform: rotate(40deg);
`

export const ZigZagContainer2 = styled.div`
  position: absolute;
  left: 90vw;
  top: 30vh;
  transform: rotate(-25deg);
`
