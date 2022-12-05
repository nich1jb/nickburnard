import styled from 'styled-components'

export const FadeSectionContainer = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: ${({ isVisible }) => (isVisible ? 'none' : 'translateY(20vh)')};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 1200ms ease-out, transform 600ms ease-out, visibility 1200ms ease-out;
  will-change: opacity, transform, visibility;
`
