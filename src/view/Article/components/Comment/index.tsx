import React, { useState, useEffect } from 'react'

import storage from '@/utils/storage'

import { CommentType } from '@/api/article/type'

import ZComment from '@/components/Comment'

function Comment({
  comments = [],
  count
}: {
  comments: CommentType[]
  count: number
}) {
  const [isLogin, setIsLogion] = useState(false)
  // 用户输入内容
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const token = storage.get<string>('user_token')
    setIsLogion(!!token)
  }, [])

  const onChange = (value: string) => {
    setMsg(value)
  }

  // 留言提交
  const onSubmit = () => {
    console.log('留言')
  }

  // 留言 / 评论 点击喜欢
  const handlerLike = (id: number) => {
    console.log('点击了喜欢按钮', id)
  }

  // 回复评论事件
  const handlerReply = (id: number, content: string) => {
    console.log(content, id, '回复评论')
  }

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
        onSubmit={onSubmit}
        value={msg}
        mainText="评论"
        list={comments}
        handlerLike={handlerLike}
        reply={handlerReply}
        count={count}
      />
    </div>
  )
}

export default Comment
