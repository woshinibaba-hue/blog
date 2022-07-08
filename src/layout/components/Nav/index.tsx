import React, { useRef, useEffect } from 'react'

import Typed, { TypedOptions } from 'typed.js'

import { NavLink } from 'react-router-dom'

import {
  HomeOutlined,
  TeamOutlined,
  EnvironmentOutlined
} from '@ant-design/icons'
import { Avatar } from 'antd'

import { NavStyle } from './styled'

function Nav() {
  const elRef = useRef<HTMLSpanElement>(null)

  const options: TypedOptions = {
    strings: ['一名正在努力变强的菜鸡'],
    typeSpeed: 200,
    backSpeed: 100,
    cursorChar: '__',
    loop: true
  }

  useEffect(() => {
    let typed: Typed
    if (elRef.current) {
      typed = new Typed(elRef.current, options)
    }

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <NavStyle>
      <header>
        <div className="avatar">
          <Avatar
            size={50}
            src="http://localhost:8888/upload/1653534414437-Snipaste_2022-05-26_10-43-05.png"
          />
        </div>
        <div className="info">
          <div className="name">一名菜鸡</div>
          <p>计算机科学与技术</p>
          <p>2019 - 2023级</p>
          <p>
            <EnvironmentOutlined />
            &nbsp;湖北 - 武汉
          </p>
          <a href="http://localhost:8080/" target="_blank" rel="noreferrer">
            后台管理系统
          </a>
          <p>
            前端:{' '}
            <a href="https://v3.cn.vuejs.org/" target="_blank" rel="noreferrer">
              Vue3
            </a>{' '}
            +{' '}
            <a
              href="https://www.typescriptlang.org/zh/"
              target="_blank"
              rel="noreferrer"
            >
              ts
            </a>{' '}
            +{' '}
            <a
              href="https://element-plus.gitee.io/zh-CN/"
              target="_blank"
              rel="noreferrer"
            >
              Element-plus
            </a>
          </p>
          <p>
            后端:{' '}
            <a href="http://nodejs.cn/" target="_blank" rel="noreferrer">
              Node.js
            </a>{' '}
            +{' '}
            <a
              href="https://www.typescriptlang.org/zh/"
              target="_blank"
              rel="noreferrer"
            >
              ts
            </a>{' '}
            +{' '}
            <a
              href="https://www.mysql.com/cn/"
              target="_blank"
              rel="noreferrer"
            >
              MySql
            </a>
          </p>
          <p>邮箱: 2011358693@qq.com</p>
          <span className="introduce" ref={elRef}></span>
        </div>
      </header>
      <div className="nav">
        <div className="title">导航</div>
        <NavLink to="/">
          <HomeOutlined />
          首页
        </NavLink>
        <NavLink to="/about">
          <TeamOutlined />
          关于我
        </NavLink>
      </div>
    </NavStyle>
  )
}

export default Nav
