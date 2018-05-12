import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '@app/app';
import registerServiceWorker from './registerServiceWorker';

const appRoot = (
  <Router>
    <App />
  </Router>
);

const rootElement = document.getElementById('root');
ReactDOM.render(appRoot, rootElement);
registerServiceWorker();
