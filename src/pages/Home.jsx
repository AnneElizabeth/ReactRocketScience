import React from 'react';
import IconMenu from '../components/IconMenu';
import Link from 'react-router-dom';

function HomePage() {
    return (
    <>
        <h1>My Home Page</h1>
        <Link to='./Spacecraft'>Spacecraft</Link>
        <Link to='./SpaceStations'>Spacecraft</Link>
        <Link to='./SpaceVehicles'>Spacecraft</Link>
    </>
    )
}

export default HomePage;
