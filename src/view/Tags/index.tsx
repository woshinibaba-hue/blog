import React, { useEffect, useState } from 'react'

import classNames from 'classnames'

import ArticleItem from '@/components/ArticleItem'

import { getTags } from '@/api/tag'
import { TagType } from '@/api/tag/type'

import Pagination from '@/components/Pagination'
import Skeleton from '@/components/Skeleton'

import { TagStyled } from './styled'

function Tags() {
  const [tags, setTags] = useState<TagType[]>([])
  const [currentTag, setCurrentTag] = useState<TagType>()

  useEffect(() => {
    getTags().then((res) => {
      setTags(res.data)
      setCurrentTag(res.data[0])
    })
  }, [])

  useEffect(() => {
    console.log(currentTag?.id)
  }, [currentTag])

  const showTags = () =>
    tags.length ? (
      <div className="tags">
        {tags.map((item) => (
          <div
            className={classNames([
              'item',
              { active: currentTag?.id === item.id }
            ])}
            key={item.id}
            onClick={() => setCurrentTag(item)}
          >
            <img src={item.cover} alt={item.name} />
            <p className="name ellipsis-1" style={{ color: item.color }}>
              {item.name}
            </p>
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
            <span style={{ color: currentTag?.color }}>99</span> 篇文章
          </div>
        </div>
        {new Array(20).fill(0).map((_, index) => (
          <ArticleItem index={index + 1} key={index} />
        ))}
      </div>
      <Pagination />
    </TagStyled>
  )
}

export default React.memo(Tags)
