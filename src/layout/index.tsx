import React from 'react'

import { BackTop } from 'antd'
import { RocketOutlined } from '@ant-design/icons'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function ZLayout() {
  const backTopStyle: React.CSSProperties = {
    fontSize: '25px',
    textAlign: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: '#eee',
    borderRadius: '50%'
  }
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <BackTop style={backTopStyle}>
        <RocketOutlined />
      </BackTop>
    </>
  )
}

export default React.memo(ZLayout)
