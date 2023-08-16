/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link, Routes, Route} from 'react-router-dom';
import { Link as ReactRouterLink } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav';
import SpacecraftPage from './pages/SpacecraftPage';
import SpaceStationPage from './pages/SpaceStationPage';
import LaunchVehiclePage from './pages/LaunchVehiclePage';
import Launchpad from './pages/Launchpad';
import FeedbackPage from './pages/FeedbackPage';
import ErrorPage from './pages/Error';

export default function App() {

  return (
    <>
    <TopNav />
    <Routes>
      <Route path='/' element={<Launchpad />} />
      <Route path='/spacecraft' element={ <SpacecraftPage />} />
      <Route path='/spacestations' element={ <SpaceStationPage />} />
      <Route path='/launchvehicles' element={ <LaunchVehiclePage />} />
      <Route path='/feedback' element={ <FeedbackPage />} />
    </Routes>
    </>
  );
}
