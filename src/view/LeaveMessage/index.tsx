import React, { useState, useEffect } from 'react'

import storage from '@/utils/storage'

import Comment from '@/components/Comment'

import { LeaveMessageStyle } from './style'

function LeaveMessage() {
  const [msg, setMsg] = useState('')
  const [isLogin, setIsLogion] = useState(false)

  const onChange = (value: string) => {
    setMsg(value)
  }

  // 留言提交
  const onSubmit = () => {
    console.log('留言')
  }

  // 回复评论事件
  const handlerReply = (id: number, content: string) => {
    console.log(content, id, '回复评论')
  }

  // 留言 / 评论 点击喜欢
  const handlerLike = (id: number) => {
    console.log('点击了喜欢按钮', id)
  }

  useEffect(() => {
    const token = storage.get<string>('user_token')
    setIsLogion(!!token)
  }, [])

  const data = Array.from({ length: 23 }).map((_, i) => ({
    id: i,
    user: {
      username: `前端吴彦祖_${i * 10}`,
      avatar:
        'https://p3-passport.byteacctimg.com/img/user-avatar/f0b821163b109a64e2b8a5189d27de67~300x300.image'
    },
    content: '你是真的要我狗命，看完后我觉得自己啥都不是？？？？',
    createtime: new Date(),
    children: (function test() {
      if (i % 2) {
        return Array.from({ length: 2 }).map((item, id) => ({
          id: (id + 1) * 10,
          user: {
            username: `前端吴彦祖_${(id + 1) * 100}`,
            avatar:
              'https://p3-passport.byteacctimg.com/img/user-avatar/f0b821163b109a64e2b8a5189d27de67~300x300.image'
          },
          content: '你是真的要我狗命，看完后我觉得自己啥都不是？？？？',
          createtime: new Date()
        }))
      }

      return undefined
    })()
  }))

  return (
    <LeaveMessageStyle>
      <div className="synopsis">
        <p>留言板</p>
        <p>欢迎各位大佬前来访问 😎😎</p>
        <p>欢迎大佬们来此留言吐槽 😜😜</p>
        <p>
          本人是一位爱好前端的小菜鸡，如果可以也希望能与各位大佬共谈前端技术
          😁😁
        </p>
        <p>本站有任何问题，也希望各位大佬提点提点 😍😍</p>

        <p>将心中美好的事情，坚持到底 👍👍</p>
      </div>
      <div className="message-box">
        <Comment
          describe="欢迎各位大佬们前来吐槽 😁😁"
          isLogin={isLogin}
          onChange={onChange}
          onSubmit={onSubmit}
          value={msg}
          mainText="留言"
          list={data}
          handlerLike={handlerLike}
          // handlerMessage={handlerMessage}
          reply={handlerReply}
        />
      </div>
    </LeaveMessageStyle>
  )
}

export default React.memo(LeaveMessage)
