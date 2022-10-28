import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import EventIcon from '@mui/icons-material/Event';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../../helpers/firebase';
import Side from './Sidebar.styles';

function Sidebar() {
  return (
    <Side>
      <MenuList>
        <MenuItem component={Link} to="/admin">
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Admin Dashboard</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/admin/blog">
          <ListItemIcon>
            <PostAddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Blog</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/admin/blog">
          <ListItemIcon>
            <StarIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Personal Bests</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/admin/blog">
          <ListItemIcon>
            <EventIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Events</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/admin/blog">
          <ListItemIcon>
            <DirectionsRunIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Race History</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/admin/blog">
          <ListItemIcon>
            <ShoppingCartIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Shop</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/admin">
          <ListItemIcon>
            <TimelineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Training</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => signOut(auth)}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </MenuList>
    </Side>
  );
}

export default Sidebar;
