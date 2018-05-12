import * as React from 'react';
import {
  Footer,
  Header,
  Main,
 } from '@app/layout';
import {
  TodoListContainer
} from '@app/todos';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          <TodoListContainer />
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;
