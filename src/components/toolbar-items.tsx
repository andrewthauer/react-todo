import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CheckBox, Label } from '@app/components';

type Props = Partial<{
  id: string;
  children?: any;
}>;

type ToggleButtonProps = Props &
  Partial<{
    icon: IconProp;
    selected?: boolean;
    onClick(e: React.MouseEvent<HTMLElement>): void;
  }>;

type CheckBoxProps = Props &
  Partial<{
    text: string;
    onChange(checked: boolean): void;
  }>;

const ToolbarItem: React.SFC<Props> = ({ children }: Props) => (
  <div className="dib">{children}</div>
);

export const ToolbarToggleButton: React.SFC<ToggleButtonProps> = ({
  icon = 'square',
  selected,
  onClick,
}: ToggleButtonProps) => (
  <button
    className={`f5 dim br1 ph3 pv2 mr2 ${selected ? 'blue' : 'gray'}`}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} />
  </button>
);

export const ToolbarCheckBox: React.SFC<CheckBoxProps> = ({
  id,
  text,
  onChange,
}: CheckBoxProps) => (
  <div className="">
    <CheckBox
      id={id}
      type="checkbox"
      className="pa2 pointer"
      onChange={e => onChange && onChange(e.target.checked)}
    />
    <Label htmlFor={id} className="ph2 pointer" children={text} />
  </div>
);

export default ToolbarItem;
