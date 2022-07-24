import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { setArticleDetailAction } from '../Home/store/actionCreatore'
import { RootStateType } from '@/store/types'

import { getArticleDetail } from '@/api/article'
import { ArticleType } from '@/api/article/type'

import Content from './components/Content'
import Comment from './components/Comment'

const Article = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const articleDetail = useSelector<RootStateType, ArticleType>(
    (state) => state.homeStore.articleDetail!
  )

  useEffect(() => {
    getArticleDetail(id!).then((res) => {
      dispatch(setArticleDetailAction(res.data[0]))
    })
  }, [])

  return (
    <>
      <Content articleDetail={articleDetail} />
      <Comment />
    </>
  )
}

export default Article
