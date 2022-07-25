import { useEffect, useState } from 'react'

export function useTip() {
  // 提示信息
  const [tip, setTip] = useState('')
  useEffect(() => {
    const h = new Date().getHours()
    if (h >= 0 && h < 7) setTip('夜猫子，要注意身体哟！ 😘😘')
    if (h >= 7 && h < 12) setTip('今天的阳光真灿烂鸭，你那个朋友呢？😘😘')
    if (h >= 12 && h < 14) setTip('午休时间。您要保持睡眠哟！😘😘')
    if (h >= 14 && h < 18) setTip('祝您下午工作愉快！ 😘😘')
    if (h >= 18 && h <= 22) setTip('您又来了，可别和MM聊太久哟！😘😘')
    if (h >= 22 && h < 24) setTip('您应该休息辣！😘😘')
  }, [new Date().getHours()])

  return tip
}
