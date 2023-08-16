import React from 'react';
import { useState, useEffect} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


export default function TopNav() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Launchpad" component={Link} to='/' />
        <Tab label="Spacecraft" component={Link} to='/spacecraft' />
        <Tab label="Space Stations" component={Link} to='/spacestations' />
        <Tab label="Launch Vehicles" component={Link} to='/launchvehicles' />
        <Tab label="Feedback" component={Link} to='/feedback' />
      </Tabs>
    </Box>
  );
}
    
