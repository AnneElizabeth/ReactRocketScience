/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"

export default function SpaceStationAPICall() {
  const [spaceStation, setSpaceStation] = useState([])
  const baseURL = 'https://ll.thespacedevs.com/2.2.0/spacestation/'

  const fetchSpaceStation = () => {
    fetch(baseURL, {
      headers: { 'Authorization': 'Bearer ' + '36e8ead5d5f10412dce85c1b80667fc4f61d4e30' }
    })
    .then(response => {
        return response.json()
      })
      .then(data => {
        setSpaceStation(data)
        console.log(data)
      })
  }

  useEffect(() => {
    fetchSpaceStation()
  }, [])
  
  return (
    <div>
      {spaceStation.length > 0 && (
        <ul>
          {spaceStation.map(aSpaceStation => (
            <li key={aSpaceStation.id}>{aSpaceStation.name}</li>
          ))}
        </ul>
      )}    
    </div>
  );
}