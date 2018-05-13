import * as React from 'react';

export const Footer: React.SFC = () => (
  <footer className="tc pv4 pv5-ns">
    @ {Date.now().toString()}
  </footer>
);

export default Footer;
