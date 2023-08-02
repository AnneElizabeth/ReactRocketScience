import React from 'react';
import ReactDOM from 'react-dom';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
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
            <PublicOutlinedIcon>
            <Cloud fontSize="medium" />
            </PublicOutlinedIcon>
            <ListItemText>LAUNCHPAD</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <RocketLaunchOutlinedIcon>
            <ContentCut fontSize="medium" />
            </RocketLaunchOutlinedIcon>
            <ListItemText>Spacecraft</ListItemText>
          </MenuItem>
          <MenuItem>
            <SatelliteAltOutlinedIcon>
            <ContentCopy fontSize="medium" />
            </SatelliteAltOutlinedIcon>
            <ListItemText>Space Stations</ListItemText>
          </MenuItem>
          <MenuItem>
            <AirlineSeatReclineNormalOutlinedIcon>
            <ContentPaste fontSize="medium" />
            </AirlineSeatReclineNormalOutlinedIcon>
            <ListItemText>Space Vehicles</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  ); 
}

    
