import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {
  Footer,
  Header,
  Main,
 } from '@app/layout';
import {
  About,
  Dashboard,
  Home,
} from '@app/screens';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          <Route exact="" path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;
