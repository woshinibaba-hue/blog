import { SkeletonProps as SkeletonPropsType } from 'antd'

export type SkeletonProps = {
  width?: number | string
  title?: boolean | SkeletonPropsType
  avatar?: boolean
  rows?: number
  paragraphWidth?: number[]
  paragraphHeight?: number[] | number
  paragraphMarginBottom?: number[] | number
}
