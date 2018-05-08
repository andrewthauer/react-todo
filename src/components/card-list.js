import React from 'react'
import CardItem from './card-item'

export default ({ items }) => (
  <div className="cf pa2">
    {items.map(item => (
      <div className="fl w-100 w-50-m w-33-l pa2">
        <CardItem key={item.id} title={item.title} description={item.description} />
      </div>
    ))}
  </div>
)
