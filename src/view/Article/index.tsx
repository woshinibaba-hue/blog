import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { setArticleDetailAction } from '../Home/store/actionCreatore'
import { RootStateType } from '@/store/types'

import { getArticleDetail, getArticleComment } from '@/api/article'
import { ArticleType, CommentType } from '@/api/article/type'

import Content from './components/Content'
import Comment from './components/Comment'

const Article = () => {
  const { id } = useParams()

  // 评论数量
  const [commentCount, setCommentCount] = useState(0)
  // 评论列表
  const [commentList, setCommentList] = useState<CommentType[]>([])

  const dispatch = useDispatch()

  const articleDetail = useSelector<RootStateType, ArticleType | null>(
    (state) => state.homeStore.articleDetail
  )

  useEffect(() => {
    getArticleDetail(id!).then((res) => {
      dispatch(setArticleDetailAction(res.data.articles[0]))
    })
    getArticleComment(id!).then((res) => {
      setCommentCount(res.data.count)
      setCommentList(res.data.comments)
    })
  }, [])

  return (
    <>
      <Content articleDetail={articleDetail} commentCount={commentCount} />
      <Comment comments={commentList} count={commentCount} />
    </>
  )
}

export default Article
