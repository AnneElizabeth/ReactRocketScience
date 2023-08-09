/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import SpaceStationInfoCard from '../components/SpaceStationInfoCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import spacestations from '../services/db.json';


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
      <Container>
        <Grid container paddingY={8} spacing={2} >
          {spacestations.map((spacestation, index) => (
              <SpaceStationInfoCard spacestation={spacestation} key={index} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
