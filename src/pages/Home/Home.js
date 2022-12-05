import { useRef } from 'react'
import Header from '../../components/Header'
import About from '../../components/About'
import Experience from '../../components/Experience'
import Footer from '../../components/Footer'
import { HomeContainer } from './Home.styles'

export const Home = () => {
  const aboutRef = useRef(null)
  const handleClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HomeContainer>
      <Header handleClick={handleClick} />
      <About scrollToRef={aboutRef} />
      <Experience />
      <Footer />
    </HomeContainer>
  )
}
