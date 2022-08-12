import React, { useEffect, useState } from 'react'

import { BackTopStyle } from './styled'

export default function () {
  const [show, setShow] = useState(false)
  const backTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const scroll = () => {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 150) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    window.addEventListener('scroll', scroll)

    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])

  return (
    <BackTopStyle
      className="back-top"
      onClick={() => backTop()}
      title="返回顶部"
      show={show}
    >
      <div className="bg"></div>
      <i className="iconfont icon-icon-test" />
    </BackTopStyle>
  )
}
