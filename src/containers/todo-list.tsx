import * as React from 'react';
import { TodoItem, getItems } from 'services/api';
import {
  Button,
  CardList,
  ListItemProps,
  List,
  SectionHeading,
  Spinner,
  UnorderedList,
  Toolbar,
  ToolbarItem,
} from 'components';

interface Props {
}

enum ListViewType {
  list = 'list',
  card = 'card',
}

interface State {
  fetching: boolean;
  items: ListItemProps[];
  view: ListViewType;
}

const mapListItem = (item: TodoItem) => ({ key: String(item.id), title: item.title, description: item.description });

export default class ItemList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      fetching: false,
      items: [],
      view: ListViewType.list
    };
  }

  componentDidMount() {
    this.setState({ fetching: true });
    getItems()
      .then(result => this.setState({ items: result.map(mapListItem), fetching: false }));
  }

  changeView(view: ListViewType) {
    this.setState({ view });
  }

  render() {
    const { items, fetching, view } = this.state;

    return (
      <div>
        <div className="cf">
          <div className="fl w-50 f3">
            <SectionHeading children="Items" />
            <Spinner active={fetching} />
          </div>
          <div className="fr w-50">
            <Toolbar>
              <ToolbarItem icon="list-ul" selected={view === 'list'} onClick={this.changeView.bind(this, 'list')} />
              <ToolbarItem icon="th" selected={view === 'card'} onClick={this.changeView.bind(this, 'card')} />
            </Toolbar>
          </div>
        </div>

        {view === 'list'
          ? <UnorderedList items={items} />
          : <CardList items={items} />
        }
      </div>
    );
  }
}
