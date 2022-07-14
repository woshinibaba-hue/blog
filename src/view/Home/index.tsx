import React, { useEffect, useRef } from 'react'

import ArticleItem from '@/components/ArticleItem'

import WaterFall from '@/utils/waterFall'

import '@/assets/css/waterFall.css'
import { HomeStyled } from './styled'

import { StyleProps } from '@/components/ArticleItem/type'

function Home() {
  const waterFallRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let waterFall: WaterFall
    if (waterFallRef.current) {
      waterFall = new WaterFall(waterFallRef.current, { gap: 15 })
    }

    return () => {
      console.log(waterFall)
    }
  }, [waterFallRef.current])

  const articleProp: StyleProps = {
    coverStyle: { width: '260px', height: '60%' },
    notImg: { height: '60%' },
    flexDirCol: true
  }

  return (
    <HomeStyled>
      <div className="waterFall" ref={waterFallRef}>
        {new Array(20).fill(0).map((_, index) => (
          <div className="waterFall-item" key={index}>
            <ArticleItem index={index} {...articleProp} />
          </div>
        ))}
      </div>
    </HomeStyled>
  )
}

export default React.memo(Home)
