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
