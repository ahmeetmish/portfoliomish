'use client'

import Link from 'next/link'
import styled from 'styled-components'

const StyledHome = styled.div`
  width: 97%;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  .wrapper {
    display: flex;
  }

  .vertical {
    writing-mode: vertical-lr;
    transform: translate(0, 0) rotate(-180deg) skewX(0) skewY(0) scaleX(1) scaleY(1);

    div {
      display: flex;
      margin: 0 -24px 0 12px;
      justify-content: flex-end;
    }

    h2 {
      font-size: 6rem;
      font-weight: 700;
      text-transform: uppercase;

      @media (max-width: 440px) {
        font-size: 5rem;
      }
    }
  }

  span {
    opacity: 0.6;
    font-size: 12px;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .horizontal {
    gap: 0.4rem;
    display: flex;
    margin-bottom: -16px;
    flex-direction: column;
    justify-content: flex-end;

    a {
      color: inherit;
      font-size: 3rem;
      font-weight: 700;
      text-decoration: none;
      text-transform: uppercase;
      transition: color 0.4s ease;
    }

    a:hover {
      color: #4E46E7;
    }
  }
`

export default function Home() {
  return (
    <StyledHome>
      <div className='wrapper'>
        <div className='vertical'>
          <div>
            <span>
              <Link href='https://github.com/codingwithmish' target='_blank'>( codingwithmish )</Link>
            </span>
          </div>
          <h2>ahmeetmish</h2>
        </div>
        <div className='horizontal'>
          <Link href='/about'>about</Link>
          <Link href='/projects'>projects</Link>
        </div>
      </div>
    </StyledHome>
  )
}