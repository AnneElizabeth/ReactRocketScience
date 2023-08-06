/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"

export default function SpacecraftAPICall() {
  const [spacecraft, setSpacecraft] = useState([])
  const baseURL = 'https://ll.thespacedevs.com/2.2.0/spacecraft/'

  const fetchSpacecraft = () => {
    fetch(baseURL, {
      headers: { 'Authorization': 'Bearer ' + '36e8ead5d5f10412dce85c1b80667fc4f61d4e30' }
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
          {spacecraft.map(aSpacecraft => (
            <li key={aSpacecraft.id}>{aSpacecraft.name}</li>
          ))}
        </ul>
      )}    
    </div>
  );
}
