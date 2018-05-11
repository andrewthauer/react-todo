import * as React from 'react';
import {
  Headline,
  SubHeadline,
} from '@app/components';

const Header: React.SFC<{}> = () => (
  <header className="tc pv4 pv5-ns">
    <SubHeadline>Pro...Active</SubHeadline>
    <Headline>TO-DO</Headline>
  </header>
);

export default Header;
