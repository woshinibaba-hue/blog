import React from 'react'

import { useSelector } from 'react-redux'

import MdNav from 'markdown-navbar'

import { useScroll } from '@/hooks'

import { RootStateType } from '@/store/types'
import { ArticleType } from '@/api/article/type'

import { MarkdownNavbarStyle } from './style'

function MarkdownNavbar() {
  const isAffix = useScroll()

  const articleDetail = useSelector<RootStateType, ArticleType>(
    (state) => state.homeStore.articleDetail!
  )

  return (
    <MarkdownNavbarStyle isAffix={isAffix} className="markdown-Navbar">
      <div className="title">文章目录</div>
      <MdNav
        source={articleDetail?.content}
        ordered={false}
        updateHashAuto={false}
      />
      <div className="not-nav">暂无目录</div>
    </MarkdownNavbarStyle>
  )
}

export default React.memo(MarkdownNavbar)