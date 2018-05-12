import * as React from 'react';
import * as classNames from 'classnames';
import { Todo } from '@app/services/api';
import {
  List,
  ListItem,
} from '@app/components';
import TodoListItem from './todo-list-item';

type Props = Partial<{
  todos: Todo[],
  showDetails: boolean,
}>;

const TodoCardList: React.SFC<Props> = ({
  todos = [],
  showDetails = false,
}: Props) => (
  <List>
    {todos.map(item => (
      <ListItem key={item.id}>
        <TodoListItem
          title={item.title}
          description={item.description}
          showDetails={showDetails}
        />
      </ListItem>
    ))}
  </List>
);

export default TodoCardList;
