import * as React from 'react';
import Card from './card';
import { ListItemProps } from './interfaces';

interface Props {
  items: ListItemProps[];
}

function CardList({ items }: Props) {
  return (
    <div className="cf pa2">
      {items.map(item => (
        <div className="fl w-100 w-50-m w-33-l pa2" key={item.key}>
          <Card title={item.title} description={item.description} />
        </div>
      ))}
    </div>
  );
}

export default CardList;
