export type StyleProps = {
  coverStyle: {
    width: string
    height: string
  }
  notImg: {
    height: string
  }
  flexDirCol?: boolean
}

export interface Props extends StyleProps {
  index: number
}
