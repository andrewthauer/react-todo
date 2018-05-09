import * as React from 'react';
import ListItem from './list-item';
import { ListItemProps } from './interfaces';

interface Props {
  items: ListItemProps[];
}

function List({ items }: Props) {
  return (
    <ul className="list pl0 ml0 mw6 ba b--light-silver br2">
      {items.map(item => (
        <li className="ph3 pv3 bb b--light-silver" key={item.key}>
          <ListItem title={item.title} description={item.description} />
        </li>
        ))}
    </ul>
  );
}

export default List;
