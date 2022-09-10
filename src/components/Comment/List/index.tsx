import React, { memo } from 'react'

import classNames from 'classnames'

import { List, Divider, Empty } from 'antd'

import CommentItem from '../Item'

import { ListStyled } from './styled'

import { CommentListProps } from './types'

const CommentList: React.FC<CommentListProps> = ({
  comments,
  titleText,
  pageSize = 10,
  handlerLike,
  isPagination = true,
  // handlerMessage,
  reply,
  isLogin,
  count,
  onChange,
  handlerDelete
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
        className={classNames({ 'is-pagination': isPagination })}
        locale={{ emptyText: <Empty description={`暂无${titleText}~ 😢😢`} /> }}
        dataSource={comments}
        renderItem={(item) => (
          <CommentItem
            comment={item}
            handlerLike={handlerLike}
            mainText={titleText ?? '未知'}
            reply={reply}
            isLogin={isLogin}
            handlerDelete={handlerDelete}
          >
            {item.children &&
              item.children.map((child) => {
                return (
                  <CommentItem
                    key={child.id}
                    comment={child}
                    mainText={titleText ?? '未知'}
                    handlerLike={handlerLike}
                    reply={reply}
                    isLogin={isLogin}
                    handlerDelete={handlerDelete}
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
