import React from 'react'

import { Outlet } from 'react-router-dom'

import { MainStyle } from './style'

function Main() {
  return (
    <MainStyle>
      <Outlet />
    </MainStyle>
  )
}

export default Main
