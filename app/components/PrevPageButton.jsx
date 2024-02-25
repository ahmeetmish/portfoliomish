'use client'

import styled from 'styled-components'

import { useRouter } from 'next/navigation'

const StyledPrevPageButton = styled.div`
  top: 1rem;
  left: 1rem;
  position: absolute;

  @media (max-width: 768px) {
    display: none;
  }

  .prevIcon {
    transition: all 0.4s ease;
  }

  .prevIcon:hover {
    stroke: #4E46E7;
  }
`

export default function PrevPageButton() {
  const router = useRouter()

  return (
    <StyledPrevPageButton onClick={() => router.back()}>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back-up prevIcon" width="52" height="52" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>
    </StyledPrevPageButton>
  )
}