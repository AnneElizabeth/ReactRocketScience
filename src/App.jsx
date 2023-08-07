/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SpacecraftPage from './pages/SpacecraftPage';
import SpaceStationPage from './pages/SpaceStationPage';
import LaunchVehiclePage from './pages/LaunchVehiclePage';
import CommentsPage from './pages/CommentsPage';
import RootLayout from './components/Root';
import ErrorPage from './pages/Error';
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
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
