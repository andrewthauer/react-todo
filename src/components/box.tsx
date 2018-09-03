import React, { ReactNode } from 'react';

type Props = Partial<{
  children: ReactNode;
}>;

export const Box: React.SFC<Props> = ({ children }: Props) => (
  <div className="">{children}</div>
);

export default Box;
