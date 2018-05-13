import * as React from 'react';

type Props = Partial<{
  children: any;
}>;

export const Toolbar: React.SFC = ({ children }) => (
  <div className="flex items-center">
    {children}
  </div>
);

export default Toolbar;
