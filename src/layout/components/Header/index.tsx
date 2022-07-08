import React from 'react'

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
      </div>
    </HeaderWrap>
  )
}

export default Header
