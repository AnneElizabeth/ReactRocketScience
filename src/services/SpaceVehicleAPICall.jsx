/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"

export default function SpaceVehicleAPICall() {
  const [spaceVehicle, setSpaceVehicle] = useState([])
  const baseURL = 'https://ll.thespacedevs.com/2.2.0/config/launcher/'

  const fetchSpaceVehicle = () => {
    fetch(baseURL, {
      headers: { 'Authorization': 'Bearer ' + '36e8ead5d5f10412dce85c1b80667fc4f61d4e30' }
    })
    .then(response => {
        return response.json()
      })
      .then(data => {
        setSpaceVehicle(data)
        console.log(data)
      })
  }

  useEffect(() => {
    fetchSpaceVehicle()
  }, [])
  
  return (
    <div>
      {spaceVehicle.length > 0 && (
        <ul>
          {spaceVehicle.map(aSpaceVehicle => (
            <li key={aSpaceVehicle.id}>{aSpaceVehicle.name}</li>
          ))}
        </ul>
      )}    
    </div>
  );
}
