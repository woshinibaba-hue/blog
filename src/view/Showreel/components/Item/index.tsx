import React from 'react'

import { ShowreelType } from '@/api/showreel'

import { ItemStyle } from './style'

export default React.memo(function ({ showreel }: { showreel: ShowreelType }) {
  return (
    <ItemStyle bg={showreel.cover}>
      <a href={showreel.link} target="_blank" rel="noreferrer">
        <p className="title">{showreel.title}</p>
        <p className="description">{showreel.description}</p>
      </a>
    </ItemStyle>
  )
})
