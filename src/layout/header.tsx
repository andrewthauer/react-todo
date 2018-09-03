import React from 'react';
import { Heading } from '@app/components';
import { Nav } from '@app/layout/nav';

export const Header: React.SFC = () => (
  <header className="tc pv2">
    <Heading>To-Do</Heading>
    <Nav />
  </header>
);

export default Header;
