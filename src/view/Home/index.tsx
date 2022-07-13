import React, { useEffect, useRef } from 'react'

import { Tag } from 'antd'
import {
  MessageOutlined,
  HeartOutlined,
  HeartFilled,
  EyeOutlined,
  HighlightOutlined
} from '@ant-design/icons'

import WaterFall from '@/utils/waterFall'

import '@/assets/css/waterFall.css'
import { HomeStyled } from './styled'

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

  return (
    <HomeStyled>
      <div className="waterFall" ref={waterFallRef}>
        {new Array(20).fill(0).map((_, index) => (
          <div className="waterFall-item" key={index}>
            {index % 2 ? (
              <img
                src="https://resource.hsslive.cn/1654432089443maomao.jpeg"
                alt=""
              />
            ) : (
              <div className="notImg">此处无图胜有图</div>
            )}
            <div className="title ellipsis-1">
              我是标题我是标题我是标题我是标题 我是标题 我是标题 我是标题
              我是标题 我是标题 我是标题 我是标题 我是标题 我是标题
            </div>
            <div className="synopsis ellipsis-1">
              我是简要内容 我是简要内容 我是简要内容 我是简要内容 我是简要内容
              我是简要内容
            </div>
            <div className="tags ellipsis-1">
              <Tag color="blue">React</Tag>
              <Tag color="blue">React</Tag>
              <Tag color="blue">React</Tag>
              <Tag color="blue">React</Tag>
              <Tag color="blue">React</Tag>
              <Tag color="blue">React</Tag>
              <Tag color="blue">React</Tag>
              <Tag color="blue">React</Tag>
            </div>
            <div className="info">
              <div className="user">
                <img src="http://localhost:8888/upload/6666.jpg" alt="" />

                <div className="issue">
                  <HighlightOutlined /> 一天前
                </div>
              </div>

              <div className="options">
                <div className="browse">
                  <EyeOutlined /> 0
                </div>
                <div className="mgs">
                  <MessageOutlined /> 0
                </div>
                <div className="like">
                  {/* <HeartFilled style={{ color: '#1171ee' }} /> */}
                  <HeartOutlined /> 0
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </HomeStyled>
  )
}

export default React.memo(Home)
