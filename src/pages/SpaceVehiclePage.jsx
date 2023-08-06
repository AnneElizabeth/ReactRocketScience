/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import SpaceVehicleAPICall from '../services/SpaceVehicleAPICall';

export default function SpaceVehiclePage() {
    return (
        <div>
            <h1>The Space Vehicles Page</h1>
            <SpaceVehicleAPICall />
        </div>
    )
}

