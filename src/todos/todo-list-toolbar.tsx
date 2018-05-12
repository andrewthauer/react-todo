import * as React from 'react';
import * as classNames from 'classnames';
import { ListViewType } from './constants';
import {
  CheckBox,
  Label,
  Toolbar,
  ToolbarItem,
} from '@app/components';

type Props = {
  showDetailsToggled(show: boolean),
  selectedView: ListViewType,
  viewChanged(view: ListViewType),
};

const TodoListToolbar: React.SFC<Props> = ({
  showDetailsToggled,
  selectedView,
  viewChanged,
}: Props) => (
  <Toolbar>
    <ToolbarItem
      icon="list-ul"
      selected={selectedView === ListViewType.list}
      onClick={e => viewChanged(ListViewType.list)}
    />
    <ToolbarItem
      icon="th"
      selected={selectedView === ListViewType.card}
      onClick={e => viewChanged(ListViewType.card)}
    />
    <span className="mh3">
      <CheckBox
        id="toggle-list-details"
        type="checkbox"
        className="pa2 pointer"
        onChange={e => showDetailsToggled(e.target.checked)}
      />
      <Label
        htmlFor="toggle-list-details"
        className="ph2 pointer"
        children="Show Details"
      />
    </span>
  </Toolbar>
);

export default TodoListToolbar;
