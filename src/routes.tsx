import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  About,
  Dashboard,
  Home,
} from '@app/screens';

export const routes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    main: () => (<Home />),
  },
  {
    path: '/about',
    title: 'About',
    main: () => (<About />),
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    main: () => (<Dashboard />),
  }
];

export default routes;
