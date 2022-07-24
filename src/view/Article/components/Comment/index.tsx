import React, { useState, useEffect } from 'react'

import storage from '@/utils/storage'

import ZComment from '@/components/Comment'

function Comment({ comments = [] }: { comments: any[] }) {
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

  // 测试数据
  // const data = Array.from({ length: 23 }).map((_, i) => ({
  //   id: i,
  //   user: {
  //     username: `前端吴彦祖_${i * 10}`,
  //     avatar:
  //       'https://p3-passport.byteacctimg.com/img/user-avatar/f0b821163b109a64e2b8a5189d27de67~300x300.image'
  //   },
  //   content: '你是真的要我狗命，看完后我觉得自己啥都不是？？？？',
  //   createtime: new Date(),
  //   children: (function test() {
  //     if (i % 2) {
  //       return Array.from({ length: 2 }).map((item, id) => ({
  //         id: (id + 1) * 10,
  //         user: {
  //           username: `前端吴彦祖_${(id + 1) * 100}`,
  //           avatar:
  //             'https://p3-passport.byteacctimg.com/img/user-avatar/f0b821163b109a64e2b8a5189d27de67~300x300.image'
  //         },
  //         content: '你是真的要我狗命，看完后我觉得自己啥都不是？？？？',
  //         createtime: new Date()
  //       }))
  //     }

  //     return undefined
  //   })()
  // }))

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
      />
    </div>
  )
}

export default Comment
