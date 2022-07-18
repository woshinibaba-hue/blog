import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Tag } from 'antd'
import {
  MessageOutlined,
  HeartOutlined,
  // HeartFilled,
  EyeOutlined,
  HighlightOutlined
} from '@ant-design/icons'

import { ArticleItemStyle } from './style'

import { Props } from './type'

function ArticleItem({ index, coverStyle, notImg, flexDirCol }: Props) {
  const navigate = useNavigate()

  return (
    <ArticleItemStyle
      coverStyle={coverStyle}
      notImg={notImg}
      flexDirCol={flexDirCol}
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
        <div className="notImg">此处无图胜有图</div>
      )}
      <div className="article-info">
        <div className="title ellipsis-1">
          我是标题我是标题我是标题我是标题 我是标题 我是标题 我是标题 我是标题
          我是标题 我是标题 我是标题 我是标题 我是标题
        </div>
        <div className="synopsis ellipsis-1">
          我是简要内容 我是简要内容 我是简要内容 我是简要内容 我是简要内容
          我是简要内容
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
        <div className="info">
          <div className="user">
            <img src="http://localhost:8888/upload/6666.jpg" alt="" />

            <div className="issue">
              <HighlightOutlined /> 一天前
            </div>
          </div>

          <div className="options">
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
          </div>
        </div>
      </div>
    </ArticleItemStyle>
  )
}

export default React.memo(ArticleItem)
