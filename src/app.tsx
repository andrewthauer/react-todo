import * as React from 'react';
import { Route } from 'react-router-dom';
import { routes } from './routes';
import {
  Footer,
  Header,
  Main,
 } from '@app/layout';
import './index.css';

export class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;
