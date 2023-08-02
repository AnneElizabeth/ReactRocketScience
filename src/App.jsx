import { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import IconMenu from './components/IconMenu';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import SpacecraftPage from './pages/Spacecraft';
import SpaceStationsPage from './pages/SpaceStations';
import SpaceVehiclesPage from './pages/SpaceVehicles';


const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/spacecraft', element: <SpacecraftPage /> },
  { path: '/spacestations', element: <SpaceStationPage /> },
  { path: '/spacevehicles', element: <SpaceVehiclesPage /> }
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
      <IconMenu></IconMenu>
    </div>
  );
}

export default App;
