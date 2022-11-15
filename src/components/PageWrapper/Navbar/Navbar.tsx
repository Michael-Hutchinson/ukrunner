import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

import { Input, Label, Links, MobileLinks, Nav } from './Navbar.styles';

function Navbar() {
  return (
    <Nav>
      <Input id="nav-responsive" />
      <Label htmlFor="nav-responsive">
        <MenuIcon fontSize="small" />
      </Label>
      <MobileLinks>
        <Links to="/">Home</Links>
        <Links to="/about">About</Links>
        <Links to="/blog">Blog</Links>
        <Links to="/race">Race History</Links>
        <Links to="/training">Training</Links>
        <Links to="/events">Events</Links>
        <Links to="/shop">Shop</Links>
        <Links to="/contact">Contact</Links>
      </MobileLinks>
    </Nav>
  );
}

export default Navbar;
