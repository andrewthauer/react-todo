import React, { Component } from 'react'
import Header from './components/header'
import TodoList from './components/todo-list'
import './index.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
          <TodoList />
        </main>
      </div>
    )
  }
}

export default App
