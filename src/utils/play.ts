import { notification } from 'antd'

class Play {
  audioEl: HTMLAudioElement
  setIsPlay: (isPlay: boolean) => void

  constructor(audioEl: HTMLAudioElement, setIsPlay: (isPlay: boolean) => void) {
    this.audioEl = audioEl
    this.setIsPlay = setIsPlay

    this.audioEl.onended = () => {
      this.player(true, true)
    }

    this.audioEl.onerror = () => {
      this.playError()
    }
  }

  player(isPlay: boolean, isToggle?: boolean) {
    if (!isToggle) {
      if (isPlay) {
        this.audioEl?.play().catch(() => {
          this.playError()
        })
      } else {
        this.audioEl?.pause()
      }
    } else {
      setTimeout(() => {
        this.audioEl.play()
      }, 0)
    }
  }

  playError() {
    notification['error']({
      message: '播放源失效！',
      duration: 2
    })
    this.setIsPlay(false)
  }
}

export default Play
