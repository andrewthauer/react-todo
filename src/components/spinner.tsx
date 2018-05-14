import * as React from 'react';

type Props = Partial<{
  active: boolean
}>;

export const Spinner: React.SFC<Props> = ({ active }: Props) => (
  <span className="pa2 dib">
    {active && <i className="fa fa-spinner fa-spin" />}
  </span>
);

export default Spinner;
