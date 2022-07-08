import React from 'react'

import { Outlet } from 'react-router-dom'

import Nav from '../Nav'
import Footer from '../Footer'

import { MainStyle } from './style'

function Main() {
  return (
    <MainStyle>
      <nav>
        <Nav />
      </nav>
      <main>
        <Outlet />
        <Footer />
      </main>
    </MainStyle>
  )
}

export default Main
