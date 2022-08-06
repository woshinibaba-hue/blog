import React, { useState } from 'react'

import { Divider } from 'antd'

import { useSelector } from 'react-redux'
import { RootStateType } from '@/store/types'

import Content from './components/Content'
import Comment from './components/Comment'

const Article = () => {
  const [commentCount, setCommentCount] = useState(0)

  const userId = useSelector<RootStateType, number>(
    (state) => state.layoutStore.user?.id ?? -1
  )

  const isComment = useSelector<RootStateType, number>(
    (state) => state.homeStore.articleDetail?.isComment ?? -1
  )

  return (
    <>
      <Content count={commentCount} userId={userId} />
      {isComment ? (
        <Comment setCommentCount={setCommentCount} />
      ) : (
        <Divider>作者暂时关闭了评论功能 😭~ </Divider>
      )}
    </>
  )
}

export default Article
