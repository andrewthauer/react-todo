import * as React from 'react';
import * as classNames from 'classnames';

type Props = {
  id?: string,
  title: string,
  description?: string,
  showDetails?: boolean,
};

const TodoItem: React.SFC<Props> = ({
  id,
  title,
  description,
  showDetails = false,
}: Props) => (
  <div>
    <div className="w-100-ns">
      {title}
    </div>
    <div className={classNames({ dn: !showDetails })}>
      {description}
    </div>
  </div>
);

export default TodoItem;
