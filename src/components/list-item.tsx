import * as React from 'react';
import { ListItemProps } from './interfaces';

interface Props extends ListItemProps {
}

const Item: React.SFC<Props> = ({ title, description }: Props) => (
  <span>
    {title}
    &nbsp;
    {description}
  </span>
);

export default Item;
