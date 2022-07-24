export type SongDefault = {
  name: string
  dt: number
  ar: string
  al: string
}

export interface DetailType extends SongDefault {
  cover: string
  lyric?: string
}
