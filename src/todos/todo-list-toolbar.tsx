import React from 'react';
import { ListViewType } from '@app/todos/constants';
import { Toolbar, ToolbarCheckBox, ToolbarToggleButton } from '@app/components';

type Props = {
  showDetailsToggled(show: boolean);
  selectedView: ListViewType;
  viewChanged(view: ListViewType);
};

export const TodoListToolbar: React.SFC<Props> = ({
  showDetailsToggled,
  selectedView,
  viewChanged,
}: Props) => (
  <Toolbar>
    <ToolbarToggleButton
      icon="list-ul"
      selected={selectedView === ListViewType.list}
      onClick={e => viewChanged(ListViewType.list)}
    />
    <ToolbarToggleButton
      icon="th"
      selected={selectedView === ListViewType.card}
      onClick={e => viewChanged(ListViewType.card)}
    />
    <ToolbarCheckBox
      id="toggle-list-details"
      text="Show Details"
      onChange={e => showDetailsToggled(e)}
    />
  </Toolbar>
);

export default TodoListToolbar;
