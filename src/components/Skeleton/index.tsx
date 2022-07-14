import React, { memo } from 'react'

import { Skeleton } from 'antd'

import { SkeletonProps } from './type'

import { SkeletonStyle } from './styled'

const ZSkeleton: React.FC<SkeletonProps> = ({
  width = 755,
  title,
  avatar,
  rows = 4,
  paragraphWidth = [],
  paragraphHeight = [],
  paragraphMarginBottom = []
}) => {
  return (
    <SkeletonStyle
      paragraphHeight={paragraphHeight}
      paragraphMarginBottom={paragraphMarginBottom}
      width={width}
    >
      <Skeleton
        active
        avatar={avatar}
        paragraph={{ rows, width: paragraphWidth }}
        title={title}
      />
    </SkeletonStyle>
  )
}

export default memo(ZSkeleton)
