import React, { useRef } from 'react'

import { Avatar, Divider } from 'antd'

import { useText } from '@/hooks'

import { BaseNavStyle } from './style'

function BaseNav() {
  const elRef = useRef<HTMLSpanElement>(null)

  useText(elRef, { strings: ['一名正在努力变强的菜鸡'] })

  return (
    <BaseNavStyle>
      <div className="blog_Info">
        <div className="avatar">
          <Avatar
            size={50}
            src="http://rfz86pha6.hn-bkt.clouddn.com/FhJqrWCZNnbVJmZug8Sx6Xgnmbr2"
          />
        </div>
        <div className="info">
          <div className="name">一名菜鸡</div>
          <p>计算机科学与技术</p>
          <p>2019 - 2023级</p>
          <p>
            <i className="iconfont icon-dingxiang"></i>
            &nbsp;湖北 - 武汉
          </p>
          <a
            href="http://122.112.240.26:9999/"
            target="_blank"
            rel="noreferrer"
          >
            后台管理系统
          </a>
          <p>
            前端:{' '}
            <a href="https://cn.vuejs.org/" target="_blank" rel="noreferrer">
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

          <Divider style={{ color: 'var(--main-color)' }}>社交账号</Divider>
          <p className="relation">
            <a
              target="_blank"
              href="http://wpa.qq.com/msgrd?v=3&uin=2011358693&site=qq&menu=yes"
              rel="noreferrer"
            >
              <i className="iconfont icon-qq"></i>
            </a>
            <a
              href="http://rfz86pha6.hn-bkt.clouddn.com/Fj7qRg43aPojTYW0CxKLqTS27Jov"
              target="_blank"
              rel="noreferrer"
            >
              <i className="iconfont icon-weixin"></i>
            </a>
            <a
              href="https://github.com/woshinibaba-hue"
              target="_blank"
              rel="noreferrer"
            >
              <i className="iconfont icon-github"></i>
            </a>
            <a
              href="https://gitee.com/saihdow"
              target="_blank"
              rel="noreferrer"
            >
              <i className="iconfont icon-gitee-fill-round"></i>
            </a>
          </p>
        </div>
      </div>
    </BaseNavStyle>
  )
}

export default React.memo(BaseNav)
