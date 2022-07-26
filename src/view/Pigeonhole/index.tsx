import React, { useEffect, useState } from 'react'

import { Timeline } from 'antd'
import { SmileOutlined } from '@ant-design/icons'

import { getArticleList } from '@/api/article'
import { ArticleListType } from '@/api/article/type'

import format from '@/utils/format'

import Pagination from '@/components/Pagination'

import { PigeonholeStyled } from './styled'

function Pigeonhole() {
  const [articleList, setArticleList] = useState<ArticleListType>()

  const getArticles = (page = 1, limit = 10) => {
    getArticleList({ page, limit }).then((res) => {
      setArticleList(res.data)
    })
  }

  useEffect(() => {
    getArticles()
  }, [])

  const onChange = (page: number) => {
    getArticles(page)
  }

  return (
    <PigeonholeStyled className="pigeonhole">
      <Timeline mode="alternate" reverse>
        {articleList?.articles.map((item) => (
          <Timeline.Item
            key={item.id}
            label={format.formatTime(item.createtime, 'YYYY-MM-DD')}
          >
            <a href={`/article/${item.id}`}>{item.title}</a>
          </Timeline.Item>
        ))}
        <Timeline.Item dot={<SmileOutlined />}>
          共记录了 {articleList?.total} 文章
        </Timeline.Item>
      </Timeline>

      <Pagination total={articleList?.total} onChange={onChange} />
    </PigeonholeStyled>
  )
}

export default React.memo(Pigeonhole)
