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
        <Links href="/">Home</Links>
        <Links href="/about">About</Links>
        <Links href="/blog">Blog</Links>
        <Links href="/race">Race History</Links>
        <Links href="/training">Training</Links>
        <Links href="/events">Events</Links>
        <Links href="/shop">Shop</Links>
        <Links href="/contact">Contact</Links>
      </MobileLinks>
    </Nav>
  );
}

export default Navbar;
