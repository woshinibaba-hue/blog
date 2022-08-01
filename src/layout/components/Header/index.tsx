import React, { useState, useEffect } from 'react'

import { NavLink, useLocation } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import {
  setIsShowSidebarAction,
  setIsShowLoginAction,
  logoutAction
} from '@/layout/store/actioncreatore'

import {
  Input,
  Dropdown,
  Menu,
  Typography,
  Space,
  Avatar,
  Tooltip,
  Divider
} from 'antd'

import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'

import { useScroll, useTip } from '@/hooks'
import { useUser } from '../../hooks'

import { HeaderWrap } from './style'

import logo from '@/assets/img/1657255015650-logo.gif'

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
    name: '关于',
    path: '/about'
  }
]

function Header() {
  const isAffix = useScroll()

  const [selectKey, setSelectKey] = useState(navName[0])

  const { isShowSidebar, user } = useUser()

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

  const userMneu = (
    <Menu
      items={[
        { key: 1, label: '退出登录', onClick: () => dispatch(logoutAction()) }
      ]}
    />
  )

  const { pathname } = useLocation()

  useEffect(() => {
    const selectKey = navName.find((item) => item.path === pathname)
    if (selectKey) setSelectKey(selectKey)
  }, [pathname])

  const dispatch = useDispatch()

  // 提示信息
  const { tip } = useTip()

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
            <img src={logo} />
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
        {user ? (
          <Tooltip overlay={tip} className="login" placement="left">
            <Dropdown
              children={
                <Space split={<Divider type="vertical" />}>
                  <Avatar src={user.avatar} alt="" />
                  <span> {user.username}</span>
                </Space>
              }
              overlay={userMneu}
              arrow
            />
          </Tooltip>
        ) : (
          <div
            className="login"
            onClick={() => dispatch(setIsShowLoginAction())}
          >
            登录
          </div>
        )}
      </div>
    </HeaderWrap>
  )
}

export default React.memo(Header)
