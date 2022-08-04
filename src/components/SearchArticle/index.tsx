import React from 'react'
import { NavLink } from 'react-router-dom'

import format from '@/utils/format'

import { SearchStyle } from './styled'

function SearchArticle({ item }: any) {
  return (
    <SearchStyle>
      <NavLink to={`/article/${item.id}`}>
        <div className="title ellipsis-1">{item.title}</div>
        <div className="time">{format.formatTime(item.createtime)}</div>
      </NavLink>
    </SearchStyle>
  )
}

export default React.memo(SearchArticle)
