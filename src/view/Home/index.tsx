import React, { useEffect, useState } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { setArticleAction } from './store/actionCreatore'
import { RootStateType } from '@/store/types'

// components
import ArticleItem from '@/components/ArticleItem'

// api
import { getArticleList } from '@/api/article'
import { ArticleType } from '@/api/article/type'

// styled
import { HomeStyled } from './styled'

function Home() {
  const [articleList, setArticleList] = useState<ArticleType[]>([])

  const dispatch = useDispatch()

  // 从redux中获取文章列表
  const articles = useSelector<RootStateType, ArticleType[]>(
    (state) => state.homeStore.articleList
  )

  useEffect(() => {
    // 判断是否有文章列表，如果有，则不再请求文章列表
    if (articles.length) return setArticleList(articles)
    getArticleList().then((res) => {
      dispatch(setArticleAction(res.data))
      setArticleList(res.data)
    })
  }, [])
  return (
    <HomeStyled className="home">
      {articleList.map((item) => (
        <ArticleItem article={item} key={item.id} />
      ))}
    </HomeStyled>
  )
}

export default React.memo(Home)
