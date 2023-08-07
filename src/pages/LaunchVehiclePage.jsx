/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

export default function SpacecraftPage() {
    const [launcher, setLauncher] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/launcher", requestOptions)
      .then((response) => response.json())
      .then((result) => setLauncher(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {launcher.map((singleLauncher) => (
        <div key={singleLauncher.id}>
          <h3>
            <span>{singleLauncher.id}</span> {singleLauncher.name}
          </h3>
          <p>{singleLauncher.manufacturer.country_code}</p>
        </div>
      ))}
    </div>
  );
}

