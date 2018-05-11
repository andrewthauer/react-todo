import * as React from 'react';

type Props = {
  active: boolean
};

const Spinner: React.SFC<Props> = ({ active }: Props) => (
  <span className="pa2">
    {active && <i className="fa fa-spinner fa-spin" />}
  </span>
);

export default Spinner;
