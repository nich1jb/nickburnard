import { useState, useRef, useEffect } from 'react'
import { FadeSectionContainer } from './FadeSection.styles'

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
