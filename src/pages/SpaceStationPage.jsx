/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

export default function SpaceStationPage() {
    const [spacestations, setSpacestations] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/spacestations", requestOptions)
      .then((response) => response.json())
      .then((result) => setSpacestations(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {spacestations.map((spacestation) => (
        <div key={spacestation.id}>
          <h3>
            <span>{spacestation.id}</span> {spacestation.name}
          </h3>
          <p>{spacestation.founded}</p>
        </div>
      ))}
    </div>
  );
}

