import React from 'react';
import classNames from 'classnames';
import { EditableLabel } from '@app/components';

type Props = {
  id?: string;
  title: string;
  description?: string;
  showDetails?: boolean;
};

export const TodoItem: React.SFC<Props> = ({
  id,
  title,
  description,
  showDetails = false,
}: Props) => (
  <div>
    <div className="w-100-ns">
      <EditableLabel value={title} placeholder="Name ..." />
    </div>
    <div className={classNames({ dn: !showDetails })}>{description}</div>
  </div>
);

export default TodoItem;
