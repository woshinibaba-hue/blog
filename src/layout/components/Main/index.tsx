import React from 'react'

import { Outlet } from 'react-router-dom'

import Nav from '../Nav'
import Sidebar from '../Sidebar'

import { MainStyle } from './style'

function Main() {
  return (
    <MainStyle className="layout-main">
      <div className="content">
        <Outlet />
      </div>
      <Nav />
      <Sidebar />
      {/* <canvas width="100vw" height="100vh">
        暂不支持 canvas
      </canvas> */}
    </MainStyle>
  )
}

export default React.memo(Main)
