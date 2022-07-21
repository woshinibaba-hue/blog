import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Tag, Space } from 'antd'
import {
  MessageOutlined,
  HeartOutlined,
  // HeartFilled,
  EyeOutlined,
  FieldTimeOutlined
} from '@ant-design/icons'

import { ArticleItemStyle } from './style'

function ArticleItem({ index }: { index: number }) {
  const navigate = useNavigate()

  return (
    <ArticleItemStyle
      className="articleItem"
      onClick={() => navigate(`/article/${index}`)}
    >
      {index % 2 ? (
        <div className="cover">
          <img
            src="https://resource.hsslive.cn/1654432089443maomao.jpeg"
            alt=""
          />
        </div>
      ) : (
        ''
      )}
      <div className="article-info">
        <div className="title ellipsis-1">我是标题我是标题我是标题</div>
        <div className="info">
          <Space>
            <div className="user">
              <img src="http://localhost:8888/upload/6666.jpg" alt="" />

              <div className="issue">
                <FieldTimeOutlined /> 一天前
              </div>
            </div>
          </Space>

          <div className="options">
            <Space>
              <div className="browse">
                <EyeOutlined /> 0
              </div>
              <div className="mgs">
                <MessageOutlined /> 0
              </div>
              <div className="like">
                {/* <HeartFilled style={{ color: '#1171ee' }} /> */}
                <HeartOutlined /> 0
              </div>
            </Space>
          </div>
        </div>
        <div className="synopsis ellipsis-3">
          我是简要内容 我是简要内容 我是简要内容 我是简要内容 我是简要内容
          我是简要内容 我是简要内容 我是简要内容 我是简要内容 我是简要内容
          我是简要内容 我是简要内容 我是简要内容 我是简要内容 我是简要内容
          我是简要内容 我是简要内容 我是简要内容 我是简要内容 我是简要内容
          我是简要内容 我是简要内容 我是简要内容 我是简要内容 我是简要内容
          我是简要内容 我是简要内容 我是简要内容 我是简要内容
          我是简要内容是简要内容 我是简要内容 我是简要内容 我是简要内容
          我是简要内容 我是简要内容 我是简要内容 我是简要内容 我是简要内容
          我是简要内容 我是简要内容是简要内容 我是简要内容 我是简要内容
          我是简要内容 我是简要内容 我是简要内容 我是简要内容 我是简要内容
          我是简要内容 我是简要内容 我是简要内容是简要内容 我是简要内容
          我是简要内容 我是简要内容 我是简要内容 我是简要内容 我是简要内容
          我是简要内容 我是简要内容 我是简要内容 我是简要内容是简要内容
          我是简要内容 我是简要内容 我是简要内容 我是简要内容 我是简要内容
          我是简要内容 我是简要内容 我是简要内容 我是简要内容 我是简要内容
        </div>
        <div className="article-tags ellipsis-1">
          <Tag color="blue">React</Tag>
          <Tag color="blue">React</Tag>
          <Tag color="blue">React</Tag>
          <Tag color="blue">React</Tag>
          <Tag color="blue">React</Tag>
          <Tag color="blue">React</Tag>
          <Tag color="blue">React</Tag>
          <Tag color="blue">React</Tag>
          <Tag color="blue">React</Tag>
          <Tag color="blue">React</Tag>
          <Tag color="blue">React</Tag>
          <Tag color="blue">React</Tag>
          <Tag color="blue">React</Tag>
          <Tag color="blue">React</Tag>
        </div>
      </div>
    </ArticleItemStyle>
  )
}

export default React.memo(ArticleItem)
