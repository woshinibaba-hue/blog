import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { RootStateType } from '@/store/types'

import Content from './components/Content'
import Comment from './components/Comment'

const Article = () => {
  const [commentCount, setCommentCount] = useState(0)

  const userId = useSelector<RootStateType, number>(
    (state) => state.layoutStore.user?.id ?? -1
  )

  return (
    <>
      <Content count={commentCount} userId={userId} />
      <Comment setCommentCount={setCommentCount} />
    </>
  )
}

export default Article
