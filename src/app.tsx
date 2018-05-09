import * as React from 'react';
import Header from 'layout/header';
import TodoList from 'containers/todo-list';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
          <TodoList />
        </main>
      </div>
    );
  }
}

export default App;
