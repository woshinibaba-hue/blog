import React, { useState, useEffect } from 'react'

import { NavLink, useLocation } from 'react-router-dom'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { Input, Dropdown, Menu, Typography } from 'antd'
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'

import { useScroll } from '@/hooks'

import { HeaderWrap } from './style'

import { RootStateType } from '@/store/types'

import { setIsShowSidebarAction } from '@/layout/store/actioncreatore'

// nav 导航
const navName = [
  {
    name: '首页',
    path: '/'
  },
  {
    name: '时间旅途',
    path: '/history'
  },
  {
    name: '分类',
    path: '/tags'
  },
  {
    name: '友链',
    path: '/link'
  },
  {
    name: '闲言碎语',
    path: '/msg'
  },
  {
    name: '关于我',
    path: '/about'
  }
]

function Header() {
  const isAffix = useScroll()

  const [selectKey, setSelectKey] = useState(navName[0])

  const menu = (
    <Menu
      selectable
      defaultSelectedKeys={[selectKey.path]}
      items={navName.map((item) => ({
        key: item.path,
        label: (
          <NavLink to={item.path} key={item.path}>
            {item.name}
          </NavLink>
        )
      }))}
    />
  )

  const { pathname } = useLocation()

  useEffect(() => {
    const selectKey = navName.find((item) => item.path === pathname)
    if (selectKey) setSelectKey(selectKey)
  }, [pathname])

  const dispatch = useDispatch()

  const { isShowSidebar } = useSelector<
    RootStateType,
    { isShowSidebar: boolean }
  >(
    (state) => ({
      isShowSidebar: state.layoutStore.isShowSidebar
    }),
    shallowEqual
  )

  return (
    <HeaderWrap isAffix={isAffix} className="layout-header">
      <div className="container">
        <div
          className="sidebar"
          onClick={() => dispatch(setIsShowSidebarAction())}
        >
          {!isShowSidebar ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        </div>
        <NavLink to="/" className="logo">
          <div className="img">
            <img src="http://localhost:8888/upload/1657255015650-logo.gif" />
          </div>
          <div className="title">一名菜鸡</div>
        </NavLink>
        <div className="lable-nav">
          {navName.map(({ name, path }) => (
            <NavLink key={path} to={path}>
              {name}
            </NavLink>
          ))}
        </div>
        <div className="lable-right">
          <div className="lable-search">
            <Input.Search placeholder="输入搜索关键字" />
          </div>
          <Dropdown
            className="lable-dro-nav"
            overlay={menu}
            trigger={['click']}
          >
            <Typography.Link>
              {selectKey.name} <DownOutlined />
            </Typography.Link>
          </Dropdown>
        </div>
        <div className="login">登录</div>
      </div>
    </HeaderWrap>
  )
}

export default React.memo(Header)
