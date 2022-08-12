import React, { useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { FooterWrap } from './style'

function Footer() {
  const [date, setDate] = useState('')
  const [isBottom, setIsBottom] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setIsBottom(pathname.includes('article'))
  }, [pathname])

  setInterval(function () {
    // 获取当前时间距离给定时间毫秒数
    const cha_hao_time =
      new Date().getTime() - new Date('2022-07-24 00:00:00').getTime()
    //一天的毫秒数
    const oneDay_hao = 24 * 60 * 60 * 1000
    //总天数（含小数点）（小数点以天为单位）
    const countDays = cha_hao_time / oneDay_hao
    /*分离出天数和小数点后的*/
    const countDay = Math.floor(countDays)
    //获取到小数点后的（转化为以小时为单位）
    const countHours = (countDays - countDay) * 24
    /*分离出小时和小数点后的*/
    const countHour = Math.floor(countHours)
    //获取小数点后的（转化为以分钟为单位）
    const countMinutes = (countHours - countHour) * 60
    /*分离出分钟和小数点后的*/
    const countMinute = Math.floor(countMinutes)
    //直接获取秒数
    const countSeconds = Math.floor((countMinutes - countMinute) * 60)

    setDate(
      ` ${countDay} 天 ${countHour} 小时 ${countMinute} 分 ${countSeconds} 秒`
    )
  }, 1000)

  return (
    <FooterWrap className="layout-footer" isBottom={isBottom}>
      <div className="copyright">
        Copyright © 2022
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          style={{ marginLeft: '5px' }}
        >
          一名菜鸡
        </a>
      </div>
      <p>
        本站由
        <img src="https://console-static.huaweicloud.com/static/authui/20220714145424/public/hws/images/logo.svg" />
        提供云服务支持
      </p>
      <p>
        本网站由{' '}
        <a href="https://react.docschina.org/" target="_blank" rel="noreferrer">
          React
        </a>{' '}
        +{' '}
        <a href="https://ant.design/index-cn" target="_blank" rel="noreferrer">
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
      <p>
        本站以苟且偷生{' '}
        <i
          className="iconfont icon-shijianzhouqi"
        />{' '}
        {date}
      </p>
    </FooterWrap>
  )
}

export default React.memo(Footer)
