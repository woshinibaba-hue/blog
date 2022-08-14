import React, { useEffect, useState } from 'react'

import { Divider } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { setArticleAction, setIsMoreAction } from './store/actionCreatore'
import { RootStateType } from '@/store/types'

// components
import ArticleItem from '@/components/ArticleItem'
import Skeleton from '@/components/Skeleton'

// api
import { getArticleList } from '@/api/article'
import { ArticleType } from '@/api/article/type'

// styled
import { HomeStyled } from './styled'

let currentPage = 1
function Home() {
  const [articleList, setArticleList] = useState<ArticleType[]>([])

  const dispatch = useDispatch()

  // 从redux中获取文章列表
  const articles = useSelector<RootStateType, ArticleType[]>(
    (state) => state.homeStore.articleList
  )
  const isMore = useSelector<RootStateType, boolean>(
    (state) => state.homeStore.isMore
  )

  const getArticles = async () => {
    if (!isMore) return
    getArticleList({ limit: 5, page: currentPage }).then((res) => {
      const { page, articles } = res.data

      currentPage = page
      if (!articles.length) {
        return dispatch(setIsMoreAction(false))
      }
      dispatch(setArticleAction(articleList.concat(articles)))
      setArticleList(articleList.concat(articles))
    })
  }

  useEffect(() => {
    // 判断是否有文章列表，如果有，则不再请求文章列表
    if (articles.length) return setArticleList(articles)
    getArticles()
  }, [])

  const loading = () => (
    <div className="loading">
      <Skeleton rows={4} />
    </div>
  )

  return (
    <HomeStyled className="home">
      <InfiniteScroll
        dataLength={articleList.length}
        next={getArticles}
        key={1}
        hasMore={isMore}
        loader={loading()}
        style={{ overflow: 'unset' }}
        endMessage={
          <Divider plain className="more">
            没有更多文章辣~ 🤐
          </Divider>
        }
      >
        {articleList?.map((item) => (
          <ArticleItem key={item.id} article={item} />
        ))}
      </InfiniteScroll>
    </HomeStyled>
  )
}

export default Home
