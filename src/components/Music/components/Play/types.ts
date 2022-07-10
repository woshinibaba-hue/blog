import { DetailType } from '../../types'

export type PropsType = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  setId: (id: string) => void
  songDetail: DetailType | undefined
  player: (ids?: string) => void
}
