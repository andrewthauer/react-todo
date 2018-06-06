import React from 'react';
import { About, Home, NotFound, Todos } from '@app/screens';

export const routes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    main: () => <Home />,
  },
  {
    path: '/about',
    title: 'About',
    main: () => <About />,
  },
  {
    path: '/todos',
    title: 'Todos',
    main: () => <Todos />,
  },
  {
    path: '',
    title: '404',
    main: () => <NotFound />,
  },
];

export default routes;
