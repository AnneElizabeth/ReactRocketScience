/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import LaunchVehicleInfoCard from '../components/LaunchVehicleInfoCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import launcher from '../services/db.json';

export default function SpacecraftPage() {
    const [launcher, setLauncher] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/launcher", requestOptions)
      .then((response) => response.json())
      .then((result) => setLauncher(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Container>
        <Grid container paddingY={8} spacing={2} >
          {launcher.map((launcher, index) => (
              <LaunchVehicleInfoCard launcher={launcher} key={index} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

