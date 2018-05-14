import * as React from 'react';
import {
  Title,
} from '@app/components';
import {
  TodoListContainer
} from '@app/todos';

export const Todos = () => (
  <>
    <Title>To-Dos</Title>
    <TodoListContainer />
  </>
);

export default Todos;
