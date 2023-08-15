/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
    
export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab component={Link} to='/' label='LAUNCHPAD' />
        <Tab component={Link} to='/spacecraft' label='SPACECRAFT' />
        <Tab component={Link} to='/spacestations' label='SPACE STATIONS' />
        <Tab component={Link} to='/launchvehicles' label='LAUNCH VEHICLES' />
        <Tab component={Link} to='/comments' label='COMMENTS' />

      </Tabs>
    </Box>
  );
}
    
