import React from 'react';
import { Todo } from '@app/services/api';
import { TodoCard } from '@app/todos/todo-card';

type Props = Partial<{
  todos: Todo[];
}>;

export const TodoCardList: React.SFC<Props> = ({ todos = [] }: Props) => (
  <div className="cf">
    {todos.map((item, idx) => (
      <div className="fl w-100 w-50-m w-33-l pa2" key={idx}>
        <TodoCard title={item.title} description={item.description} />
      </div>
    ))}
  </div>
);

export default TodoCardList;
