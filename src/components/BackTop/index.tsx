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
      onClick={() => backTop()}
      title="返回顶部"
      show={show}
    ></BackTopStyle>
  )
}
