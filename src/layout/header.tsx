import * as React from 'react';
import {
  Headline,
  SubHeadline,
} from '@app/components';
import Nav from './nav';

const Header: React.SFC<{}> = () => (
  <header className="tc pv4 pv5-ns">
    <SubHeadline>Pro...Active</SubHeadline>
    <Headline>TO-DO</Headline>
    <Nav />
  </header>
);

export default Header;
