import React from 'react';
import { EditableLabel } from '@app/components/editable-label';
import renderer from 'react-test-renderer';

describe('EditableLabel', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<EditableLabel value="Some Value" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
