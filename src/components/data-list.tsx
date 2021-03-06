import React from 'react';
import { ReactNode } from 'react';

const initialState = {};

type State = Readonly<typeof initialState>;
type Props = Partial<{
  items: Array<any>;
  children: ReactNode;
  render: RenderCallback;
}>;

type RenderCallback = (args: {}) => JSX.Element;

export default class DataList extends React.Component<Props, State> {
  readonly state: State = initialState;

  render() {
    const { items = [], children, render } = this.props;

    return (
      <ul>
        {items.map(item => {
          // const el = render ? render(item) : <span />;
          return React.Children.map(children, c =>
            React.cloneElement(c as JSX.Element, item),
          );
        })}
      </ul>
    );
  }
}
