import { useRef } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'

const MainContainer = styled.div`
  font-family: 'Roboto Slab', serif;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`

function App() {
  const aboutRef = useRef(null)
  const handleClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <MainContainer>
      <Header handleClick={handleClick} />
      <About scrollToRef={aboutRef} />
      <Experience />
      <Footer />
    </MainContainer>
  )
}

export default App
