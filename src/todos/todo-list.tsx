import * as React from 'react';
import * as classNames from 'classnames';
import { Todo, getItems } from '@app/services/api';
import {
  Button,
  CheckBox,
  Label,
  List,
  ListItem,
  Spinner,
  Title,
  Toolbar,
  ToolbarItem,
} from '@app/components';
import TodoItem from './todo-item';
import TodoCard from './todo-card';

type Props = Partial<{}>;

type State = {
  fetching: boolean,
  items: Todo[],
  view: ListViewType,
  showDetails: boolean,
};

enum ListViewType {
  list = 'list',
  card = 'card',
}

const initialState: State = {
  fetching: false,
  items: [],
  view: ListViewType.list,
  showDetails: false,
};

export default class TodoList extends React.Component<Props, State> {
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

  showDetailsToggled = () => {
    this.setState((prevState, props) => ({ showDetails: !prevState.showDetails }));
  }

  renderList(items: Todo[]) {
    return (
      <List>
        {items.map(item => (
          <ListItem key={item.id}>
            <TodoItem
              title={item.title}
              description={item.description}
              showDetails={this.state.showDetails}
            />
          </ListItem>
        ))}
      </List>
    );
  }

  renderCards(items: Todo[]) {
    return (
      <div className="cf pa2">
        {items.map((item, idx) => (
          <div className="fl w-100 w-50-m w-33-l pa2" key={idx}>
            <TodoCard title={item.title} description={item.description} />
          </div>
        ))}
      </div>
    );
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
            <Toolbar>
              <ToolbarItem icon="list-ul" selected={view === 'list'} onClick={this.changeView.bind(this, 'list')} />
              <ToolbarItem icon="th" selected={view === 'card'} onClick={this.changeView.bind(this, 'card')} />
            </Toolbar>
          </div>
        </div>

        <div className="">
          <CheckBox
            id="toggle-list-details"
            type="checkbox"
            className="pa2 pointer"
            onChange={this.showDetailsToggled}
          />
          <Label
            htmlFor="toggle-list-details"
            className="ph2 pointer"
            children="Show Details"
          />
        </div>

        <section>
          {view === ListViewType.list
            ? this.renderList(items)
            : this.renderCards(items)
          }
        </section>
      </div>
    );
  }
}
