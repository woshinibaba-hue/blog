import React, { useEffect, useState } from 'react'

import { getShowreelList, ShowreelType } from '@/api/showreel'

import Item from './components/Item'

export default function () {
  const [showreelList, setShowreelList] = useState<ShowreelType[]>([])

  useEffect(() => {
    getShowreelList().then((res) => {
      setShowreelList(res.data)
    })
  }, [])
  return (
    <div
      style={{
        backgroundColor: 'var(--main-bg)',
        padding: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderRadius: 'var(--borderRadius)'
      }}
    >
      {showreelList.map((item) => (
        <Item showreel={item} key={item.id} />
      ))}
    </div>
  )
}
