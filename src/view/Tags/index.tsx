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
  const [tagId, setTagId] = useState<number>(8)

  useEffect(() => {
    getTags().then((res) => {
      setTags(res.data)
    })
  }, [])

  useEffect(() => {
    console.log(tagId)
  }, [tagId])

  const showTags = () =>
    tags.length ? (
      <div className="tags">
        {tags.map((item) => (
          <div
            className={classNames(['item', { active: tagId === item.id }])}
            key={item.id}
            onClick={() => setTagId(item.id)}
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
        {new Array(20).fill(0).map((_, index) => (
          <ArticleItem index={index + 1} key={index} />
        ))}
      </div>
      <Pagination />
    </TagStyled>
  )
}

export default React.memo(Tags)
