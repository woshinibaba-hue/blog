import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setArticleDetailAction } from '@/view/Home/store/actionCreatore'

import classNames from 'classnames'

import { Badge, Divider, Tag, message, Space } from 'antd'

import format from '@/utils/format'

import ParseMd from '@/components/ParseMd'

import { likeArticle, getArticleDetail } from '@/api/article'
import { ArticleType } from '@/api/article/type'

import { ContentStyle } from './style'

function Content({ count, userId }: { count: number; userId: number }) {
  const { id } = useParams()
  const currentLocation = window.location

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
          count={articleDetail?.like_user?.length ?? 0}
          color="#c2c8d1"
          showZero
          offset={[-8, 8]}
          overflowCount={99}
          className={classNames({
            active: articleDetail?.like_user?.includes(userId)
          })}
        >
          <i
            className={classNames([
              'iconfont',
              articleDetail?.like_user?.includes(userId)
                ? 'icon-dianzan_kuai'
                : 'icon-dianzan'
            ])}
          />
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
          <i className="iconfont icon-pinglun2" />
        </Badge>
      </a>
    </>
  )

  return (
    <ContentStyle>
      <div className="header">
        <h1 className="title">{articleDetail?.title}</h1>
        <div className="info">
          <div className="left">
            <img src={articleDetail?.user.avatar} className="lazyload" />
          </div>
          <div className="right">
            <div className="name">???????????????{articleDetail?.user.username}</div>
            <Space split={<Divider type="vertical" />} className="article-time">
              <span>
                ??????????????????
                {format.formatTime(
                  articleDetail?.createtime,
                  'YYYY-MM-DD HH:mm:ss'
                )}
              </span>
              <span>
                ??????????????????
                {format.formatTime(
                  articleDetail?.updatetime,
                  'YYYY-MM-DD HH:mm:ss'
                )}
              </span>
            </Space>
            <div className="date">
              <p>
                ??????????????????
                {format.formatTime(
                  articleDetail?.createtime,
                  'YYYY-MM-DD HH:mm:ss'
                )}
              </p>
              <p>
                ??????????????????
                {format.formatTime(
                  articleDetail?.updatetime,
                  'YYYY-MM-DD HH:mm:ss'
                )}
              </p>
            </div>
          </div>
        </div>
        {articleDetail?.cover && (
          <div className="cover">
            <img src={articleDetail?.cover} className="lazyload" />
          </div>
        )}
        <Divider className="divider" orientation="center" dashed>
          ????????????
        </Divider>
        <div className="description">{articleDetail?.description}</div>
      </div>
      <Divider className="divider" orientation="center" dashed>
        ????????????
      </Divider>
      <ParseMd textConent={articleDetail?.content} />
      {articleDetail?.tags && (
        <div className="tags">
          ?????????
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
          ???????????????
          <a href={currentLocation?.origin} target="_block">
            {articleDetail?.user.username}
          </a>
        </p>
        <p>
          ???????????????
          <a href={currentLocation.href} target="_block">
            {currentLocation.href}
          </a>
        </p>
        <p>
          ????????????: ???????????????????????????????????????????????????{' '}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en"
            target="_block"
          >
            BY-NC-SA
          </a>
          ???????????????????????????????????????
        </p>
      </div>
    </ContentStyle>
  )
}

export default Content
