import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

type Props = Partial<{
  active: boolean;
}>;

export const Spinner: React.SFC<Props> = ({ active }: Props) => (
  <span className="pa2 dib">
    {active && <FontAwesomeIcon icon="spinner" spin={true} />}
  </span>
);

export default Spinner;
