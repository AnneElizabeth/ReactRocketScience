/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SpacecraftPage from './pages/SpacecraftPage';
import SpaceStationPage from './pages/SpaceStationPage';
import LaunchVehiclePage from './pages/LaunchVehiclePage';
import CommentsPage from './pages/CommentsPage';
import RootLayout from './components/Root';
import ErrorPage from './pages/Error';
import Container from '@mui/material/Container';
import Album from './components/Album'


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
    <>
      <RouterProvider router={router} />
      <Container>
        <Album />

      </Container>
    </>
  );
}

export default App;
