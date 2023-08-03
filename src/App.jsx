/* eslint-disable no-unused-vars */
import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import HomePage from './pages/Home';
import SpacecraftPage from './pages/Spacecraft';
import SpaceStationsPage from './pages/SpaceStations';
import SpaceVehiclesPage from './pages/SpaceVehicles';
import RootLayout from './components/Root';
import ErrorPage from './pages/Error'


const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/spacecraft', element: <SpacecraftPage /> },
      { path: '/spacestations', element: <SpaceStationsPage /> },
      { path: '/spacevehicles', element: <SpaceVehiclesPage /> }
    ],
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
