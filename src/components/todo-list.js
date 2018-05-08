import React, { Component } from 'react'

import { getItems } from '../services/api-client';
import {
  Button,
  Heading,
} from './styled-components.js'
import List from './list'
import CardList from './card-list'

export default class ItemList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetching: false,
      items: [],
      view: 'list'
    }
  }

  componentDidMount() {
    this.setState({ ...this.state, fetching: true })
    getItems()
      .then(result => this.setState({ items: result, fetching: false }))
  }

  changeView(view) {
    this.setState({ view })
  }

  render() {
    const { items, fetching, view } = this.state;

    return (
      <div>
        <div className="cf">
          <div className="fl w-50 f3">
            Items&nbsp;
            {fetching && <i className="fa fa-spinner fa-spin"></i>}
          </div>
          <div className="fl w-50">
            <Button onClick={e => this.changeView('card')}>
              <i className="fa fa-th" />
            </Button>
            <Button onClick={e => this.changeView('list')}>
              <i className="fa fa-list-ul" />
            </Button>
          </div>
        </div>

        {view === 'list'
          ? <List items={items} />
          : <CardList items={items} />
        }
      </div>
    )
  }
}
