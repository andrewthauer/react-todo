import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from '@app/App';

it('renders without crashing', () => {
  const appRoot = (
    <Router>
      <App />
    </Router>
  );
  const div = document.createElement('div');
  ReactDOM.render(appRoot, div);
  ReactDOM.unmountComponentAtNode(div);
});
