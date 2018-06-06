import React from 'react';

type Props = Partial<{
  children: any;
}>;

export const Toolbar: React.SFC = ({ children }) => (
  <div className="flex items-center dib">{children}</div>
);

export default Toolbar;
