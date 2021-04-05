import { useRef } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import { COLOURS } from './components/common/constants'

const MainContainer = styled.div`
  font-family: 'Roboto Slab', serif;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background: radial-gradient(
      circle,
      transparent 20%,
      ${COLOURS.ANAKIWA} 20%,
      ${COLOURS.ANAKIWA} 80%,
      transparent 80%,
      transparent
    ),
    radial-gradient(
        circle,
        transparent 20%,
        ${COLOURS.ANAKIWA} 20%,
        ${COLOURS.ANAKIWA} 80%,
        transparent 80%,
        transparent
      )
      50px 50px,
    linear-gradient(${COLOURS.PERANO} 8px, transparent 8px) 0 -4px,
    linear-gradient(90deg, ${COLOURS.PERANO} 8px, transparent 8px) -4px 0;
  background-color: ${COLOURS.ANAKIWA};
  background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;
`

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: radial-gradient(${COLOURS.LIGHT_ORCHID} 3px, transparent 4px),
    radial-gradient(${COLOURS.LIGHT_ORCHID} 3px, transparent 4px),
    linear-gradient(${COLOURS.COTTON_CANDY} 4px, transparent 0),
    linear-gradient(
      45deg,
      transparent 74px,
      transparent 75px,
      ${COLOURS.LIGHT_ORCHID} 75px,
      ${COLOURS.LIGHT_ORCHID} 76px,
      transparent 77px,
      transparent 109px
    ),
    linear-gradient(
      -45deg,
      transparent 75px,
      transparent 76px,
      ${COLOURS.LIGHT_ORCHID} 76px,
      ${COLOURS.LIGHT_ORCHID} 77px,
      transparent 78px,
      transparent 109px
    ),
    ${COLOURS.COTTON_CANDY};
  background-size: 109px 109px, 109px 109px, 100% 6px, 109px 109px, 109px 109px;
  background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
`

function App() {
  const aboutRef = useRef(null)
  const handleClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <MainContainer>
      <Header handleClick={handleClick} />
      <AboutContainer>
        <About scrollToRef={aboutRef} />
      </AboutContainer>
      <ExperienceContainer>
        <Experience />
      </ExperienceContainer>
      <Footer />
    </MainContainer>
  )
}

export default App
