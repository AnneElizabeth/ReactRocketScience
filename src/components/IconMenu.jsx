import React from 'react';
import ReactDOM from 'react-dom';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SatelliteAltOutlinedIcon from '@mui/icons-material/SatelliteAltOutlined';
import AirlineSeatReclineNormalOutlinedIcon from '@mui/icons-material/AirlineSeatReclineNormalOutlined';

export default function IconMenu () {

  return (
    <div>
      <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <MenuList>
          <MenuItem>
            <PublicOutlinedIcon fontsize='medium' />
            <ListItemText>LAUNCHPAD</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <RocketLaunchOutlinedIcon fontSize="medium" />
            <ListItemText>Spacecraft</ListItemText>
          </MenuItem>
          <MenuItem>
            <SatelliteAltOutlinedIcon fontSize="medium" />
            <ListItemText>Space Stations</ListItemText>
          </MenuItem>
          <MenuItem>
            <AirlineSeatReclineNormalOutlinedIcon fontSize="medium" />
            <ListItemText>Space Vehicles</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  ); 
}

    
