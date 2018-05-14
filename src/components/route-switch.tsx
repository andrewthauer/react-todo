import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

type Props = {
  routes: Array<{
    path: string,
    exact?: boolean,
    title?: string,
    main: React.ComponentType<any>,
  }>
};

export const RouteSwitch: React.SFC<Props> = ({ routes }: Props) => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    ))}
  </Switch>
);

export default RouteSwitch;
