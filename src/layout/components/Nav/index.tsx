import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import {
  SettingOutlined,
  // LineChartOutlined,
  // SendOutlined,
  TagsOutlined
  // RocketOutlined
} from '@ant-design/icons'
import { Collapse, Switch, Tag } from 'antd'

import { useText } from '@/hooks'

import { getTags } from '@/api/tag'
import { TagType } from '@/api/tag/type'

import BaseNav from '../BaseNav'
import MarkdownNavbar from '@/components/ParseMd/components/MarkdownNavbar'
import Music from '@/components/Music'
import { NavStyle } from './styled'

function Nav() {
  const elRef = useRef<HTMLSpanElement>(null)

  useText(elRef, { strings: ['一名正在努力变强的菜鸡'] })

  const [isShowMusic, setIsShowMusic] = useState(false)

  const [tags, setTags] = useState<TagType[]>([])

  useEffect(() => {
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
    <NavStyle className="layout-sidebar">
      <BaseNav />
      {isArticle ? (
        <MarkdownNavbar />
      ) : (
        <>
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
          {/* <Collapse className="social" expandIconPosition="end">
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
          </Collapse> */}
          {/* <Collapse className="social" expandIconPosition="end">
            <Collapse.Panel
              header={
                <span>
                  <LineChartOutlined /> 流量信息
                </span>
              }
              key="1"
            ></Collapse.Panel>
          </Collapse> */}
          {/* <Collapse className="social" expandIconPosition="end">
            <Collapse.Panel
              header={
                <span>
                  <RocketOutlined /> 最近更新
                </span>
              }
              key="1"
            ></Collapse.Panel>
          </Collapse> */}
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
        </>
      )}
      <Music isShowMusic={isShowMusic} />
    </NavStyle>
  )
}

export default React.memo(Nav)
