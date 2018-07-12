import React from 'react';
import { Card } from '@app/components/card';

type Props = {
  items: Array<ItemProps>;
};

type ItemProps = {
  key: string;
  title: string;
  description: string;
};

export function CardList({ items }: Props) {
  return (
    <div className="cf pa2">
      {items.map((item, idx) => (
        <div className="fl w-100 w-50-m w-33-l pa2" key={idx}>
          <Card title={item.title} description={item.description} />
        </div>
      ))}
    </div>
  );
}

export default CardList;
