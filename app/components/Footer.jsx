'use client'

import Link from 'next/link'
import styled from 'styled-components'

const StyledFooter = styled.div`
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;

  margin: 8px 0 8px 0;

  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0.4;
  
  a:hover {
    color: #4E46E7;
    transition: color 0.3s ease;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <p>my github page: </p>
      <Link href='https://github.com/codingwithmish' target='_blank'>@codingwithmish</Link>
    </StyledFooter>
  )
}