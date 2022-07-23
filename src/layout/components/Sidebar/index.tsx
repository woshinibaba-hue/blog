import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Drawer, Button } from 'antd'

import { useSelector, useDispatch } from 'react-redux'
import { setIsShowSidebarAction } from '@/layout/store/actioncreatore'

import MarkdownNavbar from '@/components/ParseMd/components/MarkdownNavbar'

import BaseNav from '../BaseNav'

import { RootStateType } from '@/store/types'

function Sidebar() {
  const dispatch = useDispatch()
  const visible = useSelector<RootStateType, boolean>(
    (state) => state.layoutStore.isShowSidebar
  )

  const { pathname } = useLocation()

  const [isArticle, steIsArticle] = useState(false)
  useEffect(() => {
    steIsArticle(pathname.includes('article'))
  }, [pathname])

  return (
    <>
      <Drawer
        placement="right"
        visible={visible}
        onClose={() => dispatch(setIsShowSidebarAction())}
        closable={false}
        style={{
          marginBottom: '70px',
          textAlign: 'center'
        }}
      >
        <BaseNav />
        {isArticle && <MarkdownNavbar />}
        <Button type="primary" className="login-btn">
          登录
        </Button>
      </Drawer>
    </>
  )
}

export default Sidebar
