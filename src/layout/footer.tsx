import * as React from 'react';
import {
} from '@app/components';

const Footer: React.SFC<{}> = () => (
  <footer className="tc pv4 pv5-ns">
    @ {Date.now().toString()}
  </footer>
);

export default Footer;
