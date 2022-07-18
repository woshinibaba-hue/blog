import React from 'react'

import { BackTop } from 'antd'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function Layout() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <BackTop style={{ right: '90px' }} />
    </>
  )
}

export default React.memo(Layout)
