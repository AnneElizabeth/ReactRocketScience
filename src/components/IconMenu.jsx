/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SatelliteAltOutlinedIcon from '@mui/icons-material/SatelliteAltOutlined';
import AirlineSeatReclineNormalOutlinedIcon from '@mui/icons-material/AirlineSeatReclineNormalOutlined';
import { Link } from 'react-router-dom';

export default function IconMenu () {

  return (

      <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <MenuList>
          <MenuItem component={Link} to=''>
            <PublicOutlinedIcon fontSize='medium' />
            <ListItemText>LAUNCHPAD</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem component={Link} to='/spacecraft'>
            <RocketLaunchOutlinedIcon fontSize="medium" />
            <ListItemText>Spacecraft</ListItemText>
          </MenuItem>
          <MenuItem component={Link} to='/spacestations'>
            <SatelliteAltOutlinedIcon fontSize="medium" />
            <ListItemText>Space Stations</ListItemText>
          </MenuItem>
          <MenuItem component={Link} to='/spacevehicles'>
            <AirlineSeatReclineNormalOutlinedIcon fontSize="medium" />
            <ListItemText>Space Vehicles</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
  )
}

    
