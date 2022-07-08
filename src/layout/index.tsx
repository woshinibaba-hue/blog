import React from 'react'

import { BackTop } from 'antd'

import Header from './components/Header'
import Main from './components/Main'

function Home() {
  return (
    <div>
      <Header />
      <Main />
      <BackTop style={{ right: '90px' }} />
    </div>
  )
}

export default Home
