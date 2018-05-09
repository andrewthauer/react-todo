import * as React from 'react';

interface Props {
  icon?: string;
  selected?: boolean;
  onClick(e: React.MouseEvent<HTMLElement>): void;
}

export const ToolbarItem: React.SFC<Props> = ({ icon, selected, onClick }: Props) => (
  <button className={`f5 link dim br1 ph3 pv2 mb2 dib ${selected ? 'blue' : 'gray'}`} onClick={onClick}>
    <i className={`fa fa-${icon}`} />
  </button>
);

export default ToolbarItem;
