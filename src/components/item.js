import React from 'react';
import FancyBorder from './fancy-border'

export default ({ item }) => (
  <span>
    <FancyBorder>
      {item.title} ({item.id})
    </FancyBorder>
  </span>
)
