import * as React from 'react';
import { Todo, getTodos } from '@app/services/api';
import {
  Spinner,
  Title,
} from '@app/components';
import { ListViewType } from './constants';
import TodoListToolbar from './todo-list-toolbar';
import TodoList from './todo-list';
import TodoCardList from './todo-card-list';

type Props = Partial<{}>;

type State = {
  todos: Todo[],
  loading: boolean,
  view: ListViewType,
  showDetails: boolean,
};

const initialState: State = {
  loading: false,
  todos: [],
  view: ListViewType.list,
  showDetails: false,
};

export class TodoListContainer extends React.Component<Props, State> {
  state: State = initialState;

  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.setState({ loading: true });
    getTodos()
      .then(items => this.setState({ todos: items, loading: false }));
  }

  changeView(view: ListViewType) {
    this.setState({ view });
  }

  showDetailsToggled = (showDetails: boolean) => {
    this.setState((prevState, props) => ({ showDetails }));
  }

  render() {
    const {
      todos,
      loading,
      view,
      showDetails,
    } = this.state;

    return (
      <div>
        <div className="cf">
          <div className="fl w-100 w-50-ns tl">
            <TodoListToolbar
              showDetailsToggled={e => this.showDetailsToggled(e)}
              selectedView={view}
              viewChanged={e => this.changeView(e)}
            />
            <Spinner active={loading} />
          </div>
        </div>

        <section className="cf">
          {view === ListViewType.list
            ? <TodoList todos={todos} showDetails={this.state.showDetails} />
            : <TodoCardList todos={todos} />
          }
        </section>
      </div>
    );
  }
}

export default TodoListContainer;
