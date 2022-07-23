import { SongDetailType } from '@/api/music/type'

export type PropsType = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  setId: (id: string) => void
  songDetail: SongDetailType | undefined
  player: (ids?: string) => void
  lyrics: { time: number; lyric: string }[]
  currentTime: number
  currentIndex: number
  setCurrentIndex: (index: number) => void
  songId: string
  isPlay: boolean
}
