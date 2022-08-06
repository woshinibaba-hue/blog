import React, { memo, useState } from 'react'

import { useSelector } from 'react-redux'
import { RootStateType } from '@/store/types'

import { Space, Divider, message as Message, Tag } from 'antd'

import classNames from 'classnames'

import {
  // LikeFilled,
  // LikeOutlined,
  MessageFilled,
  MessageOutlined,
  DeleteOutlined
} from '@ant-design/icons'

import format from '@/utils/format'

import EditorInput from '../EditorInput'

import { CommentItemStyle } from './syled'
import { ICommentItemProps } from './types'

const CommitItem: React.FC<ICommentItemProps> = ({
  comment,
  // handlerLike,
  // handlerMessage,
  reply,
  // mainText,
  children,
  isLogin
}) => {
  // const [like, setLike] = useState(true)
  const [isReplyMessage, setIsReplyMessage] = useState(false)
  const [message, setMessage] = useState('')

  // 获取当前用户信息
  const id = useSelector((state: RootStateType) => state.layoutStore.user?.id)

  const messageClikc = () => {
    // if (handlerMessage) {
    if (!isLogin) return Message.warn('登录后才能进行回复~')
    // handlerMessage(comment.id)
    setIsReplyMessage(!isReplyMessage)
    // }
  }

  // const likeClick = () => {
  //   if (handlerLike) {
  //     if (!isLogin) return Message.warn('登录后才能进行点赞~')
  //     handlerLike(comment.id)
  //     setLike(!like)
  //   }
  // }

  const handlerSubmit = () => {
    if (reply) {
      reply(comment.id, message, setMessage)
    }
  }

  const handlerDel = () => {
    console.log('删除', comment.id)
  }

  const handlerChange = (value: string) => {
    setMessage(value)
  }

  return (
    <CommentItemStyle mainMarginBottom={!!children}>
      <div className="avatar">
        <img src={comment.user.avatar} alt={comment.user.username} />
      </div>
      <div className="content">
        <div className="content-header">
          <p className="name">
            {comment.user.isBoss === 1 && <Tag color="red">博主</Tag>}
            {comment.user.username}
            {comment.parent_comment && (
              <span className="reply">
                <span>回复</span>
                <span>{comment.parent_comment?.username}</span>
              </span>
            )}
          </p>
          <span className="time">{format.formatTime(comment.createtime)}</span>
        </div>
        <div className="comment">{comment.content}</div>
        {comment.parent_comment && (
          <div className="reply-content">{`" ${comment.parent_comment?.content} "`}</div>
        )}
        <div className="handler">
          <Space split={<Divider type="vertical" />}>
            {/* <Space
              className={classNames([{ active: like }])}
              onClick={likeClick}
            >
              {like ? <LikeFilled /> : <LikeOutlined />}
              <span className="count">66</span>
            </Space> */}
            <Space
              onClick={messageClikc}
              className={classNames([{ active: isReplyMessage }])}
            >
              {!isReplyMessage ? (
                <>
                  <MessageOutlined />
                  <span className="count">回复</span>
                </>
              ) : (
                <>
                  <MessageFilled />
                  <span className="count">取消回复</span>
                </>
              )}
            </Space>
            {comment.user.id === id && (
              <div className="delele" onClick={handlerDel}>
                <Space>
                  <DeleteOutlined />
                  删除
                </Space>
              </div>
            )}
          </Space>

          {isReplyMessage && (
            <EditorInput
              isAvatar={false}
              onChange={handlerChange}
              onSubmit={handlerSubmit}
              value={message}
              mainText="回复"
              isFocus
            />
          )}
          {children && <div className="reply-message">{children}</div>}
        </div>
      </div>
    </CommentItemStyle>
  )
}

export default memo(CommitItem)
