/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

export default function SpacecraftPage() {
    const [spacecraft, setSpacecraft] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/spacecraft", requestOptions)
      .then((response) => response.json())
      .then((result) => setSpacecraft(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {spacecraft.map((singleSpacecraft) => (
        <div key={singleSpacecraft.id}>
          <h3>
            <span>{singleSpacecraft.id}</span> {singleSpacecraft.name}
          </h3>
          <p>{singleSpacecraft.time_in_space}</p>
        </div>
      ))}
    </div>
  );
}

