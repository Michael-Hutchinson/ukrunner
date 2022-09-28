import React from 'react';
import { Menu } from '@styled-icons/boxicons-regular';
import { Input, Label, Links, MobileLinks, Nav } from './Navbar.styles';

function Navbar() {
  return (
    <Nav>
      <Input id="nav-responsive" />
      <Label htmlFor="nav-responsive">
        <Menu size="20" title="Menu" />
      </Label>
      <MobileLinks>
        <Links href="/">Home</Links>
        <Links href="/">About</Links>
        <Links href="/">Blog</Links>
        <Links href="/">Race History</Links>
        <Links href="/">Training</Links>
        <Links href="/">Events</Links>
        <Links href="/">Shop</Links>
        <Links href="/">Contact</Links>
      </MobileLinks>
    </Nav>
  );
}

export default Navbar;
