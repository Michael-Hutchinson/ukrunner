import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../../helpers/firebase';
import Side from './Sidebar.styles';

function Sidebar() {
  const matches = useMediaQuery('(min-width:768px)');
  return (
    <Side>
      <MenuList>
        <MenuItem component={Link} to="/admin">
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          {matches ? <ListItemText>Admin Dashboard</ListItemText> : null}
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/admin/blog">
          <ListItemIcon>
            <PostAddIcon fontSize="small" />
          </ListItemIcon>
          {matches ? <ListItemText>Blog</ListItemText> : null}
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/admin/profile">
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          {matches ? <ListItemText>User Profile</ListItemText> : null}
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => signOut(auth)}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          {matches ? <ListItemText>Logout</ListItemText> : null}
        </MenuItem>
      </MenuList>
    </Side>
  );
}

export default Sidebar;
