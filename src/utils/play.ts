import { notification } from 'antd'

class Play {
  audioEl: HTMLAudioElement

  constructor(audioEl: HTMLAudioElement) {
    this.audioEl = audioEl

    this.audioEl.onended = () => {
      this.player(true, true)
    }

    this.audioEl.onerror = () => {
      notification['error']({
        message: '播放源失效！'
      })
    }
  }

  player(isPlay: boolean, isToggle?: boolean) {
    if (!isToggle) {
      if (isPlay) {
        this.audioEl?.play()
      } else {
        this.audioEl?.pause()
      }
    } else {
      setTimeout(() => {
        this.audioEl.play()
      }, 0)
    }
  }
}

export default Play
