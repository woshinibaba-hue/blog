import { DetailType } from '../../types'

export type PropsType = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  setId: (id: string) => void
  songDetail: DetailType | undefined
  player: (ids?: string) => void
  lyrics: { time: number; lyric: string }[]
  currentTime: number
  currentIndex: number
  setCurrentIndex: (index: number) => void
  songId: string
  isPlay: boolean
}
