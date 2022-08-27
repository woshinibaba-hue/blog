import React, { useEffect } from 'react'

import { message } from 'antd'

import { useDispatch } from 'react-redux'
import { setUserAction } from '@/layout/store/actioncreatore'

import storage from '@/utils/storage'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'
import BackTop from '@/components/BackTop'

import { githubLogin } from '@/api/login'

function ZLayout() {
  const dispatch = useDispatch()

  useEffect(() => {
    const code = window.location.href.split('=')[1]

    if (!code) return
    // 去除 url 参数
    let url = window.location.href
    if (url.indexOf('code') != -1) {
      //判断是否存在参数
      url = url.replace(/(\?|#)[^'"]*/, '') //去除参数
      window.history.pushState({}, '0', url)
    }

    githubLogin(code)
      .then((res) => {
        dispatch(setUserAction(res.data))
        storage.set('user', res.data)
        message.success(res.message)
      })
      .catch((err) => {
        message.error(err.message)
      })
  }, [])

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <LoginModal />
      <BackTop />
    </>
  )
}

export default React.memo(ZLayout)
