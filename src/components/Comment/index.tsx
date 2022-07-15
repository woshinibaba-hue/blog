import React from 'react'

import List from './List'
import Editor from './Editor'

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
  pageSize = 5, // 每个展示数据条数
  handlerLike, // 评论点击喜欢按钮
  // handlerMessage, //
  reply, // 点击了回复评论按钮
  isLogin, // 是否登录
  describe // 评论(留言)框上方描述文字
}) => {
  return (
    <CommentStyled>
      {/* 评论/留言 框 */}
      {describe ? <p className="describe">{describe}</p> : ''}
      {isLogin ? (
        <Editor
          value={value}
          onChange={onChange}
          onSubmit={onSubmit}
          mainText="留言"
          submitting={submitting}
        />
      ) : (
        <div className="no-login">
          <img src={bubble} alt="" />
          登录后方可评论哟~ 😜😜
        </div>
      )}

      {/* 评论/留言 列表 */}
      <List
        reply={reply}
        comments={list}
        titleText={mainText}
        pageSize={pageSize}
        handlerLike={handlerLike}
        // handlerMessage={handlerMessage}
        isLogin={isLogin}
      />
    </CommentStyled>
  )
}

export default React.memo(Comments)
