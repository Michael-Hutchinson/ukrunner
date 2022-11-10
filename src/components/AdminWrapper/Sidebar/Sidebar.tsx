import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
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
        <MenuItem component={Link} to="/admin/profile">
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>User Profile</ListItemText>
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
