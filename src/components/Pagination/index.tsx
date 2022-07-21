import React from 'react'

import { Pagination } from 'antd'

function Paging() {
  return (
    <Pagination
      simple
      defaultCurrent={1}
      total={100}
      showSizeChanger={false}
      style={{ textAlign: 'center' }}
    />
  )
}

export default React.memo(Paging)
