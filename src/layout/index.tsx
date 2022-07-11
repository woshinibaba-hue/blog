import React from 'react'

import { BackTop } from 'antd'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <BackTop style={{ right: '90px' }} />
    </div>
  )
}

export default React.memo(Home)
