import dayjs from 'dayjs'

import zh from 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

class Format {
  formatTime(date: dayjs.ConfigType, format?: string): string {
    dayjs.extend(relativeTime)
    if (!format) {
      return dayjs(date).locale(zh).toNow()
    }
    return dayjs(date).locale(zh).format(format)
  }
}

export default new Format()
