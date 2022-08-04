import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setArticleDetailAction } from '@/view/Home/store/actionCreatore'

import classNames from 'classnames'

import { Badge, Divider, Tag, message, Space } from 'antd'
import { LikeFilled, MessageFilled, LeftCircleFilled } from '@ant-design/icons'

import format from '@/utils/format'

import ParseMd from '@/components/ParseMd'

import { likeArticle, getArticleDetail } from '@/api/article'
import { ArticleType } from '@/api/article/type'

import { ContentStyle } from './style'

function Content({ count, userId }: { count: number; userId: number }) {
  const { id } = useParams()
  const currentLocation = window.location

  const navigator = useNavigate()
  const dispatch = useDispatch()

  const [articleDetail, setArticleDetail] = useState<ArticleType>()

  const findDetail = () => {
    getArticleDetail(id!).then((res) => {
      dispatch(setArticleDetailAction(res.data.articles[0]))
      setArticleDetail(res.data.articles[0])
    })
  }

  const like = async () => {
    const res = await likeArticle(articleDetail!.id)
    message.success(res.message)
    findDetail()
  }

  useEffect(() => {
    findDetail()
  }, [])

  const optionsEl = () => (
    <>
      <div onClick={() => like()}>
        <Badge
          count={articleDetail?.like_user.length ?? 0}
          color="#c2c8d1"
          showZero
          offset={[-8, 8]}
          overflowCount={99}
          className={classNames({
            active: articleDetail?.like_user.includes(userId)
          })}
        >
          <LikeFilled />
        </Badge>
      </div>
      <a href="#comment">
        <Badge
          count={count}
          color="#c2c8d1"
          showZero
          offset={[-8, 8]}
          overflowCount={99}
        >
          <MessageFilled />
        </Badge>
      </a>
      <Badge title="返回上一级">
        <LeftCircleFilled onClick={() => navigator(-1)} />
      </Badge>
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
            <div className="name">文章作者：{articleDetail?.user.username}</div>
            <Space split={<Divider type="vertical" />}>
              <span>
                文章发表于：
                {format.formatTime(
                  articleDetail?.createtime,
                  'YYYY-MM-DD HH:mm:ss'
                )}
              </span>
              <span>
                文章更新于：
                {format.formatTime(
                  articleDetail?.updatetime,
                  'YYYY-MM-DD HH:mm:ss'
                )}
              </span>
            </Space>
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
