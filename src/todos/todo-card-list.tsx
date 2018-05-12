import * as React from 'react';
import * as classNames from 'classnames';
import { Todo } from '@app/services/api';
import TodoCard from './todo-card';

type Props = Partial<{
  todos: Todo[],
}>;

const TodoCardList: React.SFC<Props> = ({
  todos = []
}: Props) => (
  <div className="cf">
    {todos.map((item, idx) => (
      <div className="fl w-100 w-50-m w-33-l pa2" key={idx}>
        <TodoCard title={item.title} description={item.description} />
      </div>
    ))}
  </div>
);

export default TodoCardList;
