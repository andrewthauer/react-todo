import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

import './components/icons';
import './index.css';

const appRoot = (
  <Router>
    <App />
  </Router>
);

const rootElement = document.getElementById('root');
ReactDOM.render(appRoot, rootElement);
registerServiceWorker();
