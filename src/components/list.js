import React from 'react'
import Item from './item'

export default ({ items }) => (
  <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
    {items.map(item => (
      <li className="ph3 pv3 bb b--light-silver" key={item.id}>
        <Item item={item} />
      </li>
      ))}
  </ul>
)
