import * as React from 'react';
import {
  Footer,
  Header,
  Main,
 } from '@app/layout';
import TodoList from '@app/todos/todo-list';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          <TodoList />
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;
