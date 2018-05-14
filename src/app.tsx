import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import { Footer, Header, Main } from '@app/layout';
import { RouteSwitch } from '@app/components';
import './index.css';

export class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          <RouteSwitch routes={routes} />
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;
