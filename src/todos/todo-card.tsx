import React from 'react';
import { Card } from '@app/components';

type Props = {
  id?: string;
  title: string;
  description?: string;
  showDetails?: boolean;
};

export const TodoCard: React.SFC<Props> = ({
  id,
  title,
  description,
  showDetails = false,
}: Props) => <Card title={title} description={description} />;

export default TodoCard;
