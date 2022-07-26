import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Tag, Space, Divider } from 'antd'
import { TagsOutlined, CommentOutlined, LikeOutlined } from '@ant-design/icons'

import { ArticleType } from '@/api/article/type'

import format from '@/utils/format'

import { ArticleItemStyle } from './style'

function ArticleItem({ article }: { article: ArticleType }) {
  const navigate = useNavigate()

  return (
    <ArticleItemStyle
      className="articleItem"
      onClick={() => navigate(`/article/${article.id}`)}
    >
      <h3 className="title ellipsis-1">{article.title}</h3>
      <Space split={<Divider type="vertical" />} className="meta ellipsis-1">
        <Space>
          <Tag color="geekblue">{article.user.username}</Tag>
          <Tag color="blue">{format.formatTime(article.createtime)}</Tag>
        </Space>
        <Space>
          <Tag color="green">
            <CommentOutlined /> {article.comment_count}
          </Tag>
          <Tag color="red">
            <LikeOutlined /> 9999+
          </Tag>
        </Space>
        {article.tags?.length && (
          <Space className="tags">
            <TagsOutlined className="icon" />
            {article.tags?.map((tag) => (
              <Tag key={tag.id} color={tag.color} className="tag">
                {tag.name}
              </Tag>
            ))}
          </Space>
        )}
      </Space>
      <div className="cover">
        {article.cover ? (
          <img src={article.cover} alt={article.title} />
        ) : (
          <div className="not-cover">暂无封面</div>
        )}
      </div>
      <div className="description ellipsis-3">{article.description}</div>
    </ArticleItemStyle>
  )
}

export default React.memo(ArticleItem)
