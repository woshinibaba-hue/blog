import React, { memo } from 'react'

import { List } from 'antd'

import CommentItem from '../Item'

import { ListStyled } from './styled'

import { CommentListProps } from './types'

const CommentList: React.FC<CommentListProps> = ({
  comments,
  titleText,
  pageSize = 5,
  isPagination = true,
  handlerLike,
  // handlerMessage,
  reply,
  isLogin
}) => {
  return (
    <ListStyled>
      {titleText && <div className="header">{titleText}列表</div>}
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize,
          hideOnSinglePage: isPagination,
          total: comments.length
        }}
        dataSource={comments}
        renderItem={(item) => {
          return (
            <CommentItem
              comment={item}
              handlerLike={handlerLike}
              // handlerMessage={handlerMessage}
              mainText={titleText ?? '未知'}
              reply={reply}
              isLogin={isLogin}
            >
              {item.children &&
                item.children.map((child) => {
                  return (
                    <CommentItem
                      key={child.id}
                      comment={child}
                      mainText={titleText ?? '未知'}
                      handlerLike={handlerLike}
                      // handlerMessage={handlerMessage}
                      reply={reply}
                      isLogin={isLogin}
                    />
                  )
                })}
            </CommentItem>
          )
        }}
      />
    </ListStyled>
  )
}

export default memo(CommentList)
