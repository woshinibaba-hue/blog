import { useState, useEffect } from 'react'

export function useScroll() {
  const [isAffix, setIsAffix] = useState(true)
  useEffect(() => {
    // 当前滚动的距离
    let currentScrVal = 0
    // 滚动条的距离顶部的距离
    let scrollVal = 0

    const scroll = () => {
      // 将当前滚动条的位置赋值给当前滚动距离
      currentScrVal = scrollVal

      // 将当前窗口距离顶部的距离赋值给当前滚动条距离顶部的距离(即，当前滚动条位置)
      scrollVal = document.documentElement.scrollTop
      // 当前滚动位置如果小于滚动条位置，则是下滑，否则就是上滑
      // 举例：
      // 初始化当前滚动距离为 0 当页面滚动，滚动条位置为 100
      // 0 < 100 则是下滑
      // 再次滚动，将上一次滚动条的距离赋值给当前滚动位置 100 ，当前页面进行上滑，则当前窗口距离顶部距离缩短 50
      // 100 < 50 false 则是上滑，以此类推
      if (currentScrVal < scrollVal) {
        if (scrollVal >= 200) {
          setIsAffix(false)
        } else {
          setIsAffix(true)
        }
      } else {
        setIsAffix(true)
      }
    }

    document.addEventListener('scroll', scroll)

    return () => {
      document.removeEventListener('scroll', scroll)
    }
  }, [])

  return isAffix
}
