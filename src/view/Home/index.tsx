import React, { useEffect, useRef } from 'react'

import ArticleItem from '@/components/ArticleItem'

import WaterFall from '@/utils/waterFall'

import '@/assets/css/waterFall.css'
import { HomeStyled } from './styled'

function Home() {
  const waterFallRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let waterFall: WaterFall
    if (waterFallRef.current) {
      waterFall = new WaterFall(waterFallRef.current)
    }

    return () => {
      console.log(waterFall)
    }
  }, [waterFallRef.current])

  return (
    <HomeStyled>
      {new Array(20).fill(0).map((_, index) => (
        <div key={index}>
          <ArticleItem index={index} />
        </div>
      ))}
    </HomeStyled>
  )
}

export default React.memo(Home)
