import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import { Welcome } from '@storybook/react/demo';
import { EditableLabel } from '@app/components';

import '@app/components/icons';
import '../index.css';

// addDecorator(story => (
//   <div style={{textAlign: 'center'}}>
//     {story()}
//   </div>
// ));

addDecorator(withKnobs);

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('EditableLabel', module)
  .add('Editable Label', () => (
    <EditableLabel value="Some Value" valueChanged={action('valueChanged')} />
  ))
  .add('Editable Label 2', () => (
    <EditableLabel
      value={text('Value', 'Some Value')}
      editing={boolean('Editing', true)}
      placeholder={text('Placeholder', '...')}
      valueChanged={action('valueChanged')}
    />
  ));
