import React from 'react'

import { HeartFilled } from '@ant-design/icons'

import { FooterWrap } from './style'

function Footer() {
  return (
    <FooterWrap>
      <div className="copyright">
        Copyright © 2022
        <HeartFilled className="like" />
        <span>一名菜鸡(zz)</span>
      </div>
      <div className="introduce">
        <p>
          该博客由 <span>React</span> + <span>antd</span> 搭建完成
        </p>
        <p>
          后端采用 <span>Node.js</span> + <span>MySql</span> 搭建
        </p>
      </div>
    </FooterWrap>
  )
}

export default Footer
