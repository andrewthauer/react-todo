import * as React from 'react';
import {
  Headline,
  SubHeadline,
} from '@app/components';
import Nav from './nav';

export const Header: React.SFC = () => (
  <header className="tc pv2">
    <Headline>To-Do</Headline>
    <Nav />
  </header>
);

export default Header;
