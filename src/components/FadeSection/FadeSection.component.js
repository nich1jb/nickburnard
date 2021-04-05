import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const FadeSectionContainer = styled.div`
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: ${(props) => (props.isVisible ? 'none' : 'translateY(20vh)')};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  transition: opacity 1200ms ease-out, transform 600ms ease-out, visibility 1200ms ease-out;
  will-change: opacity, transform, visibility;
`

export const FadeSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false)
  const [isLoaded, setIsloaded] = useState(false)
  const fadeRef = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsloaded(true)
        }
        setVisible(entry.isIntersecting)
      })
    })
    observer.observe(fadeRef.current)
  }, [])

  return (
    <FadeSectionContainer ref={fadeRef} isVisible={isVisible || isLoaded}>
      {children}
    </FadeSectionContainer>
  )
}
