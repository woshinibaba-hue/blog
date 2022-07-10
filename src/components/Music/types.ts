export type SongDefault = {
  name: string
  dt: string
  ar: string
  al: string
}

export interface DetailType extends SongDefault {
  cover: string
  lyric?: string
}
