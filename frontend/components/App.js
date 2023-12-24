import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const URL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`

function App() {
  const [apod, setApod] = useState()

  useEffect(() =>{
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => console.error(err))
    }
   // fetchPhoto()
   setApod({
        "copyright": "Ian Griffin",
        "date": "2023-12-23",
        "explanation": "Colours of a serene evening sky are captured in this 8 minute exposure, made near this December's solstice from New Zealand, southern hemisphere, planet Earth. Looking south, star trails form the short concentric arcs around the rotating planet's south celestial pole positioned just off the top of the frame. At top and left of center are trails of the Southern Cross stars and a dark smudge from the Milky Way's Coalsack Nebula. Alpha and Beta Centauri make the brighter yellow and blue tinted trai...",
        "hdurl": "https://apod.nasa.gov/apod/image/2312/DSCF6968-Enhanced-NR.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "A December Summer Night",
        "url": "https://apod.nasa.gov/apod/image/2312/DSCF6968-Enhanced-NR1024.jpg"
      })
  },[])
  
  if(!apod) return 'Fetching Photo of the Day...'

  return (
   <section>
      <Card title={apod.title} text={apod.explanation} imageUrl={apod.url} date={apod.date}/>
   </section>
  )
}

export default App
