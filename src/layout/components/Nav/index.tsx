import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import {
  EnvironmentOutlined,
  SettingOutlined,
  LineChartOutlined,
  SendOutlined,
  TagsOutlined,
  RocketOutlined
} from '@ant-design/icons'
import { Avatar, Collapse, Switch, Tag } from 'antd'

import { useText } from '@/hooks'

import { getvisitorinfo } from '@/api/sidebar'
import { getTags } from '@/api/tag'

import Music from '@/components/Music'

import { NavStyle } from './styled'

import { VisitorinfoType } from '@/api/sidebar/type'
import { TagType } from '@/api/tag/type'

function Nav({ isShow }: { isShow: boolean }) {
  const elRef = useRef<HTMLSpanElement>(null)

  useText(elRef, { strings: ['一名正在努力变强的菜鸡'] })

  const [isShowMusic, setIsShowMusic] = useState(false)

  const [visitorinfo, setVisitorinfo] = useState<VisitorinfoType>()
  const [tags, setTags] = useState<TagType[]>([])

  useEffect(() => {
    getvisitorinfo().then((res) => {
      setVisitorinfo(res.data)
    })
    getTags({ limit: 10, offset: 0 }).then((res) => {
      setTags(res.data)
    })
  }, [])

  const location = useLocation()

  const [isArticle, steIsArticle] = useState(false)
  useEffect(() => {
    steIsArticle(location.pathname.includes('article'))
  }, [location.pathname])

  return (
    <NavStyle isShow={isShow}>
      {isArticle ? (
        <span>啊哈哈哈</span>
      ) : (
        <div>
          <div className="blog_Info">
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
                <a
                  href="https://v3.cn.vuejs.org/"
                  target="_blank"
                  rel="noreferrer"
                >
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
          </div>
          <Collapse className="social" expandIconPosition="end">
            <Collapse.Panel
              header={
                <span>
                  <SettingOutlined spin /> 设置
                </span>
              }
              key="1"
            >
              <div className="item">
                <span>音乐播放器</span>
                <Switch
                  size="small"
                  defaultChecked={isShowMusic}
                  onChange={(checked) => setIsShowMusic(checked)}
                />
              </div>
            </Collapse.Panel>
          </Collapse>
          <Collapse className="social" expandIconPosition="end">
            <Collapse.Panel
              header={
                <span>
                  <SendOutlined /> 访客信息
                </span>
              }
              key="1"
            >
              <p>您的 IP: {visitorinfo?.cip}</p>
              <p>您的地址: {visitorinfo?.cname}</p>
              <p>您的操作系统: {visitorinfo?.os}</p>
              <p>您的浏览器: {visitorinfo?.browser}</p>
            </Collapse.Panel>
          </Collapse>
          <Collapse className="social" expandIconPosition="end">
            <Collapse.Panel
              header={
                <span>
                  <LineChartOutlined /> 流量信息
                </span>
              }
              key="1"
            ></Collapse.Panel>
          </Collapse>
          <Collapse className="social" expandIconPosition="end">
            <Collapse.Panel
              header={
                <span>
                  <RocketOutlined /> 最近更新
                </span>
              }
              key="1"
            ></Collapse.Panel>
          </Collapse>
          {location.pathname === '/tags' ? (
            ''
          ) : (
            <Collapse className="social" expandIconPosition="end">
              <Collapse.Panel
                header={
                  <span>
                    <TagsOutlined /> 标签
                  </span>
                }
                key="1"
              >
                {tags.map((item) => (
                  <Tag key={item.id} color={item.color}>
                    {item.name}
                  </Tag>
                ))}
                <Tag color="volcano">
                  <NavLink to="/tags">更多</NavLink>
                </Tag>
              </Collapse.Panel>
            </Collapse>
          )}
        </div>
      )}

      <Music isShowMusic={isShowMusic} />
    </NavStyle>
  )
}

export default React.memo(Nav)
