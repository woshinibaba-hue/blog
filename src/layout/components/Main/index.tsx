import React, { useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'

import Nav from '../Nav'

import { MainStyle } from './style'

function Main() {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setIsShow(true)
  }, [])

  return (
    <MainStyle isShow={isShow}>
      <div className="content">
        <Outlet />
      </div>
      <Nav isShow={isShow} />
    </MainStyle>
  )
}

export default React.memo(Main)
