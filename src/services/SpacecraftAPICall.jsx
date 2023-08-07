/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"

export default function SpacecraftAPICall() {
  const baseURL = 'https://ll.thespacedevs.com/2.2.0/spacecraft/'

  const [spacecraft, setSpacecraft] = useState([])

  const fetchSpacecraft = () => {
    fetch(baseURL, {
      headers: {
        'Authorization': '36e8ead5d5f10412dce85c1b80667fc4f61d4e30' 
      }
    })
    .then(response => {
        return response.json()
      })
      .then(data => {
        setSpacecraft(data)
        console.log(data)
      })
  }

  useEffect(() => {
    fetchSpacecraft()
  }, [])
  
  return (
    <div>
      {spacecraft.length > 0 && (
        <ul>
          {spacecraft.map(singleSpacecraft => (
            <li key={singleSpacecraft.id}>{singleSpacecraft.name}</li>
          ))}
        </ul>
      )}    
    </div>
  );
}
