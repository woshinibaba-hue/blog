import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Tag, Space, Divider } from 'antd'

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
      <h3 className="articleItem-title ellipsis-1">{article.title}</h3>
      <Space split={<Divider type="vertical" />} className="meta ellipsis-1">
        <Space>
          {article.isTop === 1 && <Tag color="red">置顶</Tag>}
          <Tag color="geekblue">{article.user.username}</Tag>
          <Tag color="blue">{format.formatTime(article.createtime)}</Tag>
        </Space>
        <Space>
          <Tag color="green">
            <i className="iconfont icon-pinglun2"></i>{' '}
            {article?.comment_count ?? 0}
          </Tag>
          <Tag color="red">
            <i className="iconfont icon-dianzan_kuai"></i>
            {article.like_user?.length ?? 0}
          </Tag>
        </Space>
        {article.tags?.length && (
          <Space className="articleItem_tags">
            <i className="iconfont icon-biaoqian icon"></i>
            {article.tags?.map((tag) => (
              <Tag key={tag.name} color={tag.color} className="tag">
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
