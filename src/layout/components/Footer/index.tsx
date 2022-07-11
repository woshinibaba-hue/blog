import React from 'react'

import { HeartFilled } from '@ant-design/icons'

import { FooterWrap } from './style'

function Footer() {
  return (
    <FooterWrap>
      <div className="copyright">
        Copyright © 2022
        <HeartFilled className="like" />
        <a href="" target="_blank" rel="noreferrer">
          一名菜鸡
        </a>
      </div>
      <div className="introduce">
        <p>
          本网站由{' '}
          <a
            href="https://react.docschina.org/"
            target="_blank"
            rel="noreferrer"
          >
            React
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
            href="https://ant.design/index-cn"
            target="_blank"
            rel="noreferrer"
          >
            antd
          </a>{' '}
          强力驱动
        </p>
        <p>
          后端采用{' '}
          <a href="http://nodejs.cn/" target="_blank" rel="noreferrer">
            Node.js
          </a>{' '}
          +{' '}
          <a href="https://www.mysql.com/cn/" target="_blank" rel="noreferrer">
            MySql
          </a>{' '}
          数据库
        </p>
      </div>
    </FooterWrap>
  )
}

export default React.memo(Footer)
