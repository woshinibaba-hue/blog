import React, { useEffect, useRef } from 'react'

import { Divider } from 'antd'

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

  const mdNavRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 获取到 文章目录dom元素
    const nav = mdNavRef.current?.children[1]
    // 获取元素高度
    let childHeight: number

    const scroll = () => {
      try {
        nav!.childNodes.forEach((item, index) => {
          if ((item as HTMLDivElement).className.includes('active')) {
            nav?.scrollTo({
              top: index * childHeight,
              behavior: 'smooth'
            })
            throw new Error('退出 forEach')
          }
        })
      } catch (e) {}
    }

    if (nav && nav.clientHeight === 300) {
      childHeight = nav.children[0].clientHeight
      window.addEventListener('scroll', scroll)
    }

    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [mdNavRef.current])

  return (
    <MarkdownNavbarStyle
      isAffix={isAffix}
      className="markdown-Navbar"
      ref={mdNavRef}
    >
      <Divider dashed className="title">
        文章目录
      </Divider>
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
