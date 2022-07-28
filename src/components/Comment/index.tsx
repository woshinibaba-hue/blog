import React from 'react'

import { Divider } from 'antd'

import List from './List'
import Editor from './Editor'

import { useUser } from '@/layout/hooks'

import bubble from '@/assets/img/bubble.gif'

import { CommentStyled } from './styled'

import { CommentProps } from './types'

const Comments: React.FC<CommentProps> = ({
  value, // 输入框内容
  onChange, // 输入框改变事件
  onSubmit, // 评论(回复评论)提交事件
  submitting, // 按钮loading状态
  mainText, // 输入框描述主体文字内容和按钮文字
  list, // 评论(留言)列表
  pageSize = 10, // 每个展示数据条数
  handlerLike, // 评论点击喜欢按钮
  // handlerMessage, //
  reply, // 点击了回复评论按钮
  // isLogin, // 是否登录
  describe, // 评论(留言)框上方描述文字
  count = 0, // 评论(留言)数量
  onPageChange // 分页改变事件
}) => {
  const { user } = useUser()

  return (
    <CommentStyled>
      {/* 评论/留言 框 */}
      {describe ? <Divider className="describe">{describe}</Divider> : ''}
      {user?.token ? (
        <Editor
          value={value}
          onChange={onChange}
          onSubmit={onSubmit}
          mainText={mainText}
          submitting={submitting}
        />
      ) : (
        <div className="no-login">
          <img src={bubble} alt="" />
          登录后方可{mainText}哟~ 😜😜
        </div>
      )}

      {/* 评论/留言 列表 */}
      <List
        reply={reply}
        comments={list}
        titleText={mainText}
        pageSize={pageSize}
        handlerLike={handlerLike}
        isLogin={!!user}
        count={count}
        onChange={onPageChange}
      />
    </CommentStyled>
  )
}

export default React.memo(Comments)
