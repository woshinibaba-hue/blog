import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Drawer, Button } from 'antd'

import { useDispatch } from 'react-redux'
import {
  setIsShowSidebarAction,
  setIsShowLoginAction,
  logoutAction
} from '@/layout/store/actioncreatore'

import MarkdownNavbar from '@/components/ParseMd/components/MarkdownNavbar'

import { useTip } from '@/hooks'
import { useUser } from '../../hooks'

import BaseNav from '../BaseNav'

function Sidebar() {
  const dispatch = useDispatch()

  const { pathname } = useLocation()

  const { isShowSidebar, user } = useUser()

  const { tip } = useTip()

  const [isArticle, steIsArticle] = useState(false)
  useEffect(() => {
    steIsArticle(pathname.includes('article'))
  }, [pathname])

  return (
    <>
      <Drawer
        placement="right"
        visible={isShowSidebar}
        onClose={() => dispatch(setIsShowSidebarAction())}
        closable={false}
        style={{
          marginBottom: '70px',
          textAlign: 'center'
        }}
      >
        <BaseNav />
        {user ? (
          <div className="login-succeed">
            <p>
              欢迎回来{' '}
              <span style={{ color: 'var(--hover-color)', fontSize: '16px' }}>
                {user.username}
              </span>{' '}
              ~
            </p>
            <p>{tip}</p>
            <Button
              size="small"
              type="ghost"
              danger
              onClick={() => dispatch(logoutAction())}
            >
              退出登录
            </Button>
          </div>
        ) : (
          <Button
            type="primary"
            size="small"
            className="login-btn"
            onClick={() => dispatch(setIsShowLoginAction())}
          >
            登录
          </Button>
        )}

        {isArticle && <MarkdownNavbar />}
      </Drawer>
    </>
  )
}

export default Sidebar
