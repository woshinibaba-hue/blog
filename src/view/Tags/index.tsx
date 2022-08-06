import React, { useState, useEffect } from 'react'

import { useUpdateEffect } from 'ahooks'

import classNames from 'classnames'

import ArticleItem from '@/components/ArticleItem'

import { getArticleList } from '@/api/article'
import { ArticleListType } from '@/api/article/type'
import { getTags } from '@/api/tag'
import { TagType } from '@/api/tag/type'

import Pagination from '@/components/Pagination'
import Skeleton from '@/components/Skeleton'

import { TagStyled } from './styled'

function Tags() {
  const [tags, setTags] = useState<TagType[]>([])
  const [currentTag, setCurrentTag] = useState<TagType>()
  const [articleList, setArticleList] = useState<ArticleListType>()
  const [pagination, setPagination] = useState({ limit: 10, page: 1 })

  useEffect(() => {
    getTags().then((res) => {
      setTags(res.data)
      setCurrentTag(res.data[0])
    })
  }, [])

  const findArticles = () => {
    getArticleList({ tag_id: currentTag?.id, ...pagination }).then((res) => {
      setArticleList(res.data)
    })
  }

  useUpdateEffect(() => {
    if (!currentTag) return
    findArticles()
  }, [currentTag?.id])

  useUpdateEffect(() => {
    findArticles()
  }, [pagination])

  const showTags = () =>
    tags.length ? (
      <div className="tags">
        {tags.map((item) => (
          <div
            className={classNames([
              'item ellipsis-1',
              { active: currentTag?.id === item.id }
            ])}
            key={item.id}
            onClick={() => setCurrentTag(item)}
          >
            <span style={{ color: item.color }}>{item.name}</span>
          </div>
        ))}
      </div>
    ) : (
      <Skeleton
        width="100%"
        title={false}
        rows={6}
        paragraphHeight={25}
        paragraphMarginBottom={15}
      />
    )

  return (
    <TagStyled className="layout-tags">
      <div className="title">全部分类</div>
      {showTags()}
      <div className="articles">
        <div className="articles-title">
          当前分类：
          {<span style={{ color: currentTag?.color }}>{currentTag?.name}</span>}
          <div className="sub-title">
            当前分类共：
            <span style={{ color: currentTag?.color }}>
              {articleList?.tagTotal}
            </span>{' '}
            篇文章
          </div>
        </div>
        {articleList?.articles.map((item) => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
      <Pagination
        total={articleList?.tagTotal}
        onChange={(page, pageSize) => setPagination({ limit: pageSize, page })}
      />
    </TagStyled>
  )
}

export default React.memo(Tags)
