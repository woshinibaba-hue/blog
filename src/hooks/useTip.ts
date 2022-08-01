import { useEffect, useState } from 'react'

import format from '@/utils/format'

export function useTip() {
  // 提示信息
  const [tip, setTip] = useState('')
  const [date, setDate] = useState(
    format.formatTime(new Date(), 'YYYY-MM-DD HH:mm:ss')
  )

  useEffect(() => {
    const h = new Date().getHours()
    if (h >= 0 && h < 7) setTip('夜猫子，要注意身体哟！ 😘😘')
    if (h >= 7 && h < 12) setTip('今天的阳光真灿烂鸭，你那个朋友呢？😘😘')
    if (h >= 12 && h < 14) setTip('午休时间。您要保持睡眠哟！😘😘')
    if (h >= 14 && h < 18) setTip('祝您下午工作愉快！ 😘😘')
    if (h >= 18 && h <= 22) setTip('您又来了，可别和MM聊太久哟！😘😘')
    if (h >= 22 && h < 24) setTip('您应该休息辣！😘😘')

    let timer: number
    timer = window.setInterval(() => {
      setDate(format.formatTime(new Date(), 'YYYY-MM-DD HH:mm:ss'))
    }, 1000)

    // 卸载时清除定时器
    return () => {
      window.clearInterval(timer)
    }
  }, [])

  return { tip, date }
}
