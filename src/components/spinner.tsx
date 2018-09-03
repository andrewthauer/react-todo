import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

type Props = Partial<{
  active: boolean;
}>;

export const Spinner: React.SFC<Props> = ({ active }: Props) => (
  <span className="pa2 dib">
    {active && <FontAwesomeIcon icon={faSpinner} spin={true} />}
  </span>
);

export default Spinner;
