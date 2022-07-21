import React from 'react'

import { Outlet } from 'react-router-dom'

import Nav from '../Nav'

import { MainStyle } from './style'

function Main() {
  return (
    <MainStyle className="layout-main">
      <div className="content">
        <Outlet />
      </div>
      <Nav />
    </MainStyle>
  )
}

export default React.memo(Main)
