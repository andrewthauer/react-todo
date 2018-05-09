import * as React from 'react';
import { ListItemProps } from './interfaces';

interface Props extends ListItemProps {
}

const Card: React.SFC<Props> = ({ title, description }: Props) => (
  <article className="center mw5 mw6-ns hidden ba">
    <h1 className="f4 bg-near-black white mv0 pv2 ph3">{title}</h1>
    <div className="pa3 bt">
      <p className="f6 f5-ns lh-copy measure mv0">
        {description}
      </p>
    </div>
  </article>
);

export default Card;
