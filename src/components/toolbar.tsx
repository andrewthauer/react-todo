import * as React from 'react';
import ToolbarItem from './toolbar-item';

const Toolbar: React.SFC = (props) => (
  <span>
    {props.children}
  </span>
);

export default Toolbar;
