import React from 'react'
import { useNavigate } from 'react-router-dom'

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
      <div className="cover">
        {article.cover ? (
          <img
            src={article.cover}
            alt={article.title}
            className="lazyload"
          />
        ) : (
          <div className="not-cover">暂无封面</div>
        )}
      </div>
      <div className="article-content">
        <p className="title ellipsis-1">
          {article.isTop === 1 && <span className="isTop z-tag">置顶</span>}
          {article.title}
        </p>
        <p className="description ellipsis-3">{article.description}</p>
        <div className="info">
          <ul className="left">
            <li>
              <img
                className="avatar lazyload"
                src={article.user.avatar}
                alt=""
              />
            </li>
            <li>{format.formatTime(article.createtime, 'YYYY-MM-DD')}</li>
            <li>
              <i className="iconfont icon-pinglun2" />
              {article?.comment_count ?? 0}
            </li>
            <li>
              <i className="iconfont icon-dianzan" />
              {article.like_user?.length ?? 0}
            </li>
          </ul>
          <div className="right ellipsis-1">
            <i className="iconfont icon-biaoqian icon" />
            {article.tags?.map((tag, index) => (
              <span key={index} className="tag" style={{ color: tag.color }}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ArticleItemStyle>
  )
}

export default React.memo(ArticleItem)
