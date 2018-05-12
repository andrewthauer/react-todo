import * as React from 'react';
import { Todo, getItems } from '@app/services/api';
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
  fetching: boolean,
  items: Todo[],
  view: ListViewType,
  showDetails: boolean,
};

const initialState: State = {
  fetching: false,
  items: [],
  view: ListViewType.list,
  showDetails: false,
};

export default class TodoListContainer extends React.Component<Props, State> {
  state: State = initialState;

  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.setState({ fetching: true });
    getItems()
      .then(items => this.setState({ items: items, fetching: false }));
  }

  changeView(view: ListViewType) {
    this.setState({ view });
  }

  showDetailsToggled = (showDetails: boolean) => {
    this.setState((prevState, props) => ({ showDetails }));
  }

  render() {
    const {
      items,
      fetching,
      view,
      showDetails,
    } = this.state;

    return (
      <div>
        <div className="cf">
          <div className="fl w-100 w-50-ns">
            <Title children="Items" className="dib" />
            <Spinner active={fetching} />
          </div>
          <div className="fr w-100 w-50-ns tr">
            <TodoListToolbar
              showDetailsToggled={e => this.showDetailsToggled(e)}
              selectedView={view}
              viewChanged={e => this.changeView(e)}
            />
          </div>
        </div>

        <section className="cf">
          {view === ListViewType.list
            ? <TodoList todos={items} showDetails={this.state.showDetails} />
            : <TodoCardList todos={items} />
          }
        </section>
      </div>
    );
  }
}
