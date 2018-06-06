import React from 'react';
import { EditableLabel, Title } from '@app/components';

export const Home = () => (
  <>
    <Title>Home</Title>
    <p>
      <EditableLabel value={'Some Value'} />
    </p>
  </>
);

export default Home;
