/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import SpacecraftInfoCard from '../components/SpacecraftInfoCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


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
      <Container>
        <Grid container paddingY={8} spacing={2} >
          {spacecraft.map((spacecraft, index) => (
              <SpacecraftInfoCard spacecraft={spacecraft} key={index} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

