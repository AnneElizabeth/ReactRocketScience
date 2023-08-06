/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SpacecraftPage from './pages/SpacecraftPage';
import SpaceStationPage from './pages/SpaceStationPage';
import SpaceVehiclePage from './pages/SpaceVehiclePage';
import RootLayout from './components/Root';
import ErrorPage from './pages/Error';


const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/spacecraft', element: <SpacecraftPage /> },
      { path: '/spacestation', element: <SpaceStationPage /> },
      { path: '/spacevehicle', element: <SpaceVehiclePage /> }
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
