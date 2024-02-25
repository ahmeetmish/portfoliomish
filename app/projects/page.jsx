'use client'

import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import ProjectsData from '../../projects.json'
import PrevPageButton from "../components/PrevPageButton"

const StyledProjects = styled.div`
  width: 97%; 
  /* height: 100vh; */
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .title {
    margin-top: 18px;
    position: relative;

    .front {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .back {
      position: absolute;
      white-space: nowrap;
      filter: blur(2px);
      top: -1.7rem;
      left: -4rem;
      font-size: 5rem;
      opacity: 0.13;
      font-weight: 700;
    }
  }

  .projects-wrapper {
    gap: 24px;
    display: grid;
    margin: 24px 0 12px 0;
    grid-template-columns: repeat(3, minmax(230px, 300px));

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(200px, 320px));
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(1, minmax(200px, 320px));
    }

    article {
      padding: 16px;
      border-radius: 12px;
      border: 3px solid #292929;
      transition: background-color 250ms ease-in-out 0s;

      &:hover {
        background-color: #292929;
      }

      img {
        overflow: hidden;
        object-fit: cover;
      }

      .body {
        gap: 2px;
        display: flex;
        margin-top: 8px;
        flex-direction: column;

        span {
          color: #4E46E7;
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        a:first-of-type {
          font-size: 1.5rem;
          font-weight: 600;
        }

        p {
          color: #78818D;
        }

        a:last-of-type {
          gap: 4px;
          display: flex;
          color: #78818D;
          align-items: center;
          text-decoration: underline;
          transition: color 0.3s ease;

          &:hover {
            color: #adadad;
          }
        }
      }
    }
  }
`

export default function Projects() {
  return (
    <>
      <PrevPageButton />
      <StyledProjects>
        <div className='title'>
          <h2 className='front'>Projects</h2>
          <h2 className='back'>Projects</h2>
        </div>
        <div className="projects-wrapper">
          {
            ProjectsData.map((item, key) => {
              return <article key={key}>
                <Link href={item.projectLiveUrl} target='_blank'>
                  <Image src={item.projectImage} alt={item.projectTag} width={500} height={200} />
                </Link>
                <div className='body'>
                  <span>{item.projectStack}</span>
                  <Link href={item.projectLiveUrl}>{item.projectTitle}</Link>
                  {/* <p>{item.projectDescription}</p> */}
                  <Link href={item.projectRepositoryUrl} target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                    Source Code
                  </Link>
                </div>
              </article>
            })
          }
        </div>
      </StyledProjects>
    </>
  )
}