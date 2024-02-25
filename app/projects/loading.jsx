'use client'

import styled from 'styled-components'

const StyledLoading = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 6rem;
    text-transform: uppercase;
  }
`

export default function Loading() {
  return (
    <StyledLoading>
      <h2>loading..</h2>
    </StyledLoading>
  )
}