'use client'

import styled from 'styled-components'
import PrevPageButton from '../components/PrevPageButton'

const StyledAbout = styled.div`
  width: 97%; 
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 7rem;
    font-weight: 700;
    line-height: 7rem;
    text-align: center;
    text-transform: uppercase;
  }
`

export default function About() {
  return (
    <>
      <PrevPageButton />
      <StyledAbout>
        <h2>coming soon!</h2>
      </StyledAbout>
    </>
  )
}