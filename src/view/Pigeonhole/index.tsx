import React from 'react'

import { Timeline } from 'antd'

import Pagination from '@/components/Pagination'

import { PigeonholeStyled } from './styled'

function Pigeonhole() {
  return (
    <PigeonholeStyled className="pigeonhole">
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
      <Pagination />
    </PigeonholeStyled>
  )
}

export default React.memo(Pigeonhole)
