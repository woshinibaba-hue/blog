import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Badge, Divider, Tag, Tooltip } from 'antd'
import { LikeFilled, MessageFilled, LeftCircleFilled } from '@ant-design/icons'

import format from '@/utils/format'

import ParseMd from '@/components/ParseMd'

import { ArticleType } from '@/api/article/type'

import { ContentStyle } from './style'

function Content({
  articleDetail,
  count
}: {
  articleDetail: ArticleType | null
  count: number
}) {
  const currentLocation = window.location

  const navigator = useNavigate()

  const optionsEl = () => (
    <>
      <Tooltip overlay="赞一下~">
        <Badge
          count={articleDetail?.like_count ?? 0}
          color="#c2c8d1"
          showZero
          offset={[-8, 8]}
        >
          <LikeFilled />
        </Badge>
      </Tooltip>
      <a href="#comment">
        <Tooltip overlay="评论一下~">
          <Badge count={count} color="#c2c8d1" showZero offset={[-8, 8]}>
            <MessageFilled />
          </Badge>
        </Tooltip>
      </a>
      <Tooltip overlay="返回上一级">
        <Badge>
          <LeftCircleFilled onClick={() => navigator(-1)} />
        </Badge>
      </Tooltip>
    </>
  )

  return (
    <ContentStyle>
      <div className="header">
        <h1 className="title">{articleDetail?.title}</h1>
        <div className="info">
          <div className="left">
            <img src={articleDetail?.user.avatar} />
          </div>
          <div className="right">
            <div className="name">{articleDetail?.user.username}</div>
            <div>
              {format.formatTime(
                articleDetail?.createtime,
                'YYYY-MM-DD HH:mm:ss'
              )}{' '}
              · 阅读 9999
            </div>
          </div>
        </div>
        {articleDetail?.cover && (
          <div className="cover">
            <img src={articleDetail?.cover} />
          </div>
        )}
        <Divider className="divider" orientation="center" dashed>
          文章描述
        </Divider>
        <div className="description">{articleDetail?.description}</div>
      </div>
      <Divider className="divider" orientation="center" dashed>
        文章正文
      </Divider>
      <ParseMd textConent={articleDetail?.content} />
      {articleDetail?.tags && (
        <div className="tags">
          标签：
          {articleDetail?.tags?.map((item) => (
            <Tag key={item.id} color={item.color}>
              {item.name}
            </Tag>
          ))}
        </div>
      )}

      <div className="options">{optionsEl()}</div>
      <div className="fiex-bottom-options">{optionsEl()}</div>
      <div className="copyright">
        <p>
          本文作者：
          <a href={currentLocation?.origin} target="_block">
            一名菜鸡
          </a>
        </p>
        <p>
          本文链接：
          <a href={currentLocation.href} target="_block">
            {currentLocation.href}
          </a>
        </p>
        <p>
          版权声明: 本博客所有文章除特别声明外，均采用{' '}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en"
            target="_block"
          >
            BY-NC-SA
          </a>
          许可协议。转载请注明出处！
        </p>
      </div>
    </ContentStyle>
  )
}

export default Content
