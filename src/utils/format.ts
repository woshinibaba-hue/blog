import dayjs from 'dayjs'

import zh from 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

// 匹配歌词时间正则
const lycDateReg = /\[(\d+):(\d+)\.(\d+)\]/

class Format {
  formatTime(date: dayjs.ConfigType, format?: string): string {
    dayjs.extend(relativeTime)
    if (!format) {
      return dayjs(date).locale(zh).toNow()
    }
    return dayjs(date).locale(zh).format(format)
  }

  formatLyric(lyric: string) {
    // 1. 使用 \n 将歌词分为  "[00:00.000] 作词 : 黄淑惠/林怡凤" 这样的数组格式
    const lyrics = lyric.split('\n')

    const lyricArr: { time: number; lyric: string }[] = []

    lyrics.forEach((lyc) => {
      // 获取匹配的时间
      const res = lycDateReg.exec(lyc)

      if (res) {
        // 获取分钟
        const minute = parseInt(res[1]) * 60 * 1000
        // 获取秒钟
        const second = parseInt(res[2]) * 1000
        // 获取毫秒
        const millsecondTime =
          res[3].length === 2 ? parseInt(res[3]) * 10 : parseInt(res[3])

        // 获取总时长
        const time = minute + second + millsecondTime

        // 2. 获取歌词: 思路：使用 replace 传入匹配时间格式正则，然后将其替换为空，就是当前时间所对应的歌词信息
        const lyric = lyc.replace(lycDateReg, '')

        lyricArr.push({ time, lyric })
      }
    })

    return lyricArr
  }
}

export default new Format()
