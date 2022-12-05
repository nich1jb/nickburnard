import styled from 'styled-components'
import { COLOURS } from '../common/constants'

const { ANAKIWA, PERANO } = COLOURS

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background: radial-gradient(circle, transparent 20%, ${ANAKIWA} 20%, ${ANAKIWA} 80%, transparent 80%, transparent),
    radial-gradient(circle, transparent 20%, ${ANAKIWA} 20%, ${ANAKIWA} 80%, transparent 80%, transparent) 50px 50px,
    linear-gradient(${PERANO} 8px, transparent 8px) 0 -4px,
    linear-gradient(90deg, ${PERANO} 8px, transparent 8px) -4px 0;
  background-color: ${ANAKIWA};
  background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;
`

export const AboutContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  padding: 0 30px 50px;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  padding-bottom: 40px;
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin-right: 30px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`

export const Image = styled.img`
  box-sizing: border-box;
  width: 23%;
  border-radius: 20%;
  margin: 10px;
  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
    margin-right: 0;
  }
  @media (max-width: 420px) {
    height: 70vw;
    width: 70vw;
    margin-right: 0;
  }
`
