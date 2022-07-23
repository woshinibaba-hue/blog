type BaseSongTtype = {
  name: string
  dt: number
  ar: string
  al: string
}

export type SongDetailType = {
  name: string
  cover: string
  al: string
  dt: number
  ar: string
}

export interface SongItmeType extends BaseSongTtype {
  key: string
}
