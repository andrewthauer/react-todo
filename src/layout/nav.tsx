import React from 'react';
import { NavLink } from 'react-router-dom';

const navLink = (to: string, text: string) => (
  <NavLink
    className="link dark-gray f4 dib ttu mr3"
    activeClassName="red"
    exact={true}
    to={to}
  >
    {text}
  </NavLink>
);

export const Nav: React.SFC = () => (
  <nav className="pa3 pa4-ns">
    {navLink('/', 'Home')}
    {navLink('/about', 'About')}
    {navLink('/todos', 'To-Dos')}
  </nav>
);

export default Nav;
