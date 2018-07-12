import React from 'react';
import { Todo } from '@app/services/api';
import { List, ListItem } from '@app/components';
import TodoListItem from '@app/todos/todo-list-item';

type Props = Partial<{
  todos: Todo[];
  showDetails: boolean;
}>;

export const TodoList: React.SFC<Props> = ({
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

export default TodoList;
