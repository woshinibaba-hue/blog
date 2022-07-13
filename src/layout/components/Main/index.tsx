import React from 'react'

import { Outlet } from 'react-router-dom'

import Nav from '../Nav'

import { MainStyle } from './style'

function Main() {
  return (
    <MainStyle>
      <div className="content">
        <Outlet />
      </div>
      <Nav />
    </MainStyle>
  )
}

export default React.memo(Main)
