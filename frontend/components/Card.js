import React from 'react'
import Figure from './Figure'
import styled from 'styled-components'

const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  padding: 2rem;

  h2 {
    margin: 0 0 1rem 0;
    font-size: 2.5em;
    color: ${props => props.$color};
    text-align: center;
  }

  p {
    margin: 0 0 1.5rem 0;
    color: steelblue;

    &::first-line {
      font-size: 1.5em;
    }
  }
  
`



export default function Card({title, text, imageUrl, date}) {
    return (
      <StyledCard $color='black' className='card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <Figure imageUrl={imageUrl} caption={date}/>
      </StyledCard>
    ) 
  }