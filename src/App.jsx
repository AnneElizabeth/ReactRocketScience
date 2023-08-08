/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SpacecraftPage from './pages/SpacecraftPage';
import SpaceStationPage from './pages/SpaceStationPage';
import LaunchVehiclePage from './pages/LaunchVehiclePage';
import CommentsPage from './pages/CommentsPage';
import RootLayout from './components/Root';
import ErrorPage from './pages/Error';
import InfoCard from './components/InfoCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//import Album from './components/Album'


const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/spacecraft', element: <SpacecraftPage /> },
      { path: '/spacestations', element: <SpaceStationPage /> },
      { path: '/launchvehicles', element: <LaunchVehiclePage /> },
      { path: '/comments', element: <CommentsPage /> },

    ],
  }
])



function App() {


  return (
    <div className='App'>
      <Container>
        <Grid container spacing={2}>
        <RouterProvider router={router} />

          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />

        </Grid>
      </Container>
    </div>
  );
}

export default App;
