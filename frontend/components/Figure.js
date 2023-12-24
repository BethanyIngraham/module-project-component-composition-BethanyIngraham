import React from 'react'

export default function Figure({imageUrl, caption}) {
    return (
      <figure>
      <img src={imageUrl}/>
      <figcaption>Photograph taken on {caption}</figcaption>
    </figure>
    )
  }