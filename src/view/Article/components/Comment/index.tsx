import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { message } from 'antd'

import storage from '@/utils/storage'

import * as request from '@/api/article'
import { CommentType } from '@/api/article/type'

import ZComment from '@/components/Comment'

function Comment({
  setCommentCount
}: {
  setCommentCount: (count: number) => void
}) {
  const { id } = useParams()
  const [isLogin, setIsLogion] = useState(false)
  // 用户输入内容
  const [msg, setMsg] = useState('')

  // 评论列表
  const [commentList, setCommentList] = useState<{
    comments: CommentType[]
    count: number
  }>()

  useEffect(() => {
    const token = storage.get<string>('user_token')
    setIsLogion(!!token)
  }, [])

  const onChange = (value: string) => {
    setMsg(value)
  }

  // 评论
  const onSubmit = async () => {
    await request.postArticleComment(id!, msg)
    message.success('评论成功~')
    setMsg('')
    gitComment()
  }

  // 留言 / 评论 点击喜欢
  const handlerLike = (id: number) => {
    console.log('点击了喜欢按钮', id)
  }

  // 回复评论
  const handlerReply = async (
    commentId: number,
    content: string,
    setMessage: (str: string) => void
  ) => {
    await request.replyArticleComment(id!, content, commentId)
    message.success('回复成功~')
    setMessage('')
    gitComment()
  }

  // 当页码发生改变时
  const onPageChange = (page: number) => {
    console.log(page)
  }

  const gitComment = () => {
    request.getArticleComment(id!).then((res) => {
      setCommentList(res.data)
      setCommentCount(res.data.count)
    })
  }

  const handlerDelete = useCallback(async (id: number) => {
    await request.deleteArticle(id)
    message.success('删除评论成功~')
    gitComment()
  }, [])

  useEffect(() => {
    gitComment()
  }, [])

  return (
    <div
      className="comment"
      id="comment"
      style={{
        backgroundColor: '#fff',
        padding: 'var(--contentPadding)',
        borderRadius: '6px',
        marginTop: '10px'
      }}
    >
      <ZComment
        describe="欢迎各位大佬们前来吐槽 😁😁"
        isLogin={isLogin}
        onChange={onChange}
        onPageChange={onPageChange}
        onSubmit={onSubmit}
        value={msg}
        mainText="评论"
        list={commentList?.comments ?? []}
        handlerLike={handlerLike}
        reply={handlerReply}
        count={commentList?.count}
        handlerDelete={handlerDelete}
      />
    </div>
  )
}

export default Comment
