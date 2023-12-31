import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  max-width: 60%;
  
  img {
    border-style: solid;
    border-color: black;
    border-width: 5px;
  }
  
  figcaption {
    font-style: italic;
  }
`

export default function Figure({imageUrl, caption}) {
    return (
      <StyledFigure>
      <img src={imageUrl}/>
      <figcaption>Photograph taken on {caption}</figcaption>
    </StyledFigure>
    )
  }