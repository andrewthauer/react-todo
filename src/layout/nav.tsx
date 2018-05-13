import * as React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';

const linkClass = 'link dim gray f6 f5-ns dib mr3';

export const Nav: React.SFC = () => (
  <nav className="pa3 pa4-ns">
    <Link className={linkClass} to="/">Home</Link>
    <Link className={linkClass} to="/about">About</Link>
    <Link className={linkClass} to="/dashboard">Dashboard</Link>
  </nav>
);

export default Nav;
