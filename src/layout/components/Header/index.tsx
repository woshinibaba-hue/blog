import React from 'react'

import { NavLink } from 'react-router-dom'

import { HeaderWrap } from './style'

function Header() {
  return (
    <HeaderWrap>
      <div className="container">
        <div className="logo">
          <div className="img">
            <img src="http://localhost:8888/upload/1657255015650-logo.gif" />
          </div>
          <div className="title">一名菜鸡</div>
        </div>

        <div className="nav">
          <NavLink to="/">首页</NavLink>
          <NavLink to="/about">关于我</NavLink>
        </div>
      </div>
    </HeaderWrap>
  )
}

export default React.memo(Header)
