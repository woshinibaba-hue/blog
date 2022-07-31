import React from 'react'

import { Pagination } from 'antd'

type Props = {
  total?: number
  pageSize?: number
  onChange?: (page: number, pageSize: number) => void
}

function Paging({ total = 10, pageSize = 10, onChange }: Props) {
  return (
    <Pagination
      simple
      defaultCurrent={1}
      total={total}
      showSizeChanger={false}
      style={{ textAlign: 'center' }}
      defaultPageSize={pageSize}
      onChange={onChange}
    />
  )
}

export default React.memo(Paging)
