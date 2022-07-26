import React, { memo } from 'react'

import { List, Divider, Empty } from 'antd'

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
  isLogin,
  count
}) => {
  return (
    <ListStyled>
      {titleText && (
        <Divider className="header">
          {titleText}列表 共 ({count}) 条
        </Divider>
      )}
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize,
          hideOnSinglePage: isPagination,
          total: comments.length
        }}
        locale={{ emptyText: <Empty description={`暂无${titleText}~ 😢😢`} /> }}
        dataSource={comments}
        renderItem={(item) => (
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
        )}
      />
    </ListStyled>
  )
}

export default memo(CommentList)
