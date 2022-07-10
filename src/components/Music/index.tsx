import React, { useState, useRef, useEffect } from 'react'

import { PauseCircleFilled, PlayCircleFilled } from '@ant-design/icons'

import PlayPage from './components/Play'

import { MusicWrap } from './styled'

import Play from '@/utils/play'

import { useText } from '@/hooks'

import { getSongDetail } from '@/api/music'

import { DetailType } from './types'

let play: Play

function Music() {
  const [isPlay, setIsPlay] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const elRef = useRef<HTMLSpanElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useText(elRef, { strings: ['点击进入播放页'], loop: false })

  useEffect(() => {
    if (audioRef.current) {
      play = new Play(audioRef.current)
    }
  }, [audioRef.current])

  // 当前音乐详情
  const [id, setId] = useState('1930213637')
  const [detail, setDetail] = useState<DetailType>()

  const getDetail = () => {
    getSongDetail(id).then((res) => {
      const songDetail = (res as any).songs[0]
      setDetail({
        name: songDetail.name,
        cover: songDetail.al.picUrl,
        al: songDetail.al.name,
        dt: songDetail.dt,
        ar: songDetail.ar[0].name
      })
    })
  }

  useEffect(() => {
    getDetail()
  }, [id])

  const player = (ids?: string) => {
    if (ids) {
      if (ids == id) {
        setIsPlay(!isPlay)
        play?.player(!isPlay)
      } else {
        setIsPlay(true)
        play?.player(true, true)
      }
    } else {
      setIsPlay(!isPlay)
      play?.player(!isPlay)
    }
  }

  return (
    <>
      <MusicWrap>
        <div className="audio">
          <img
            src={`${detail?.cover}?param=100y100`}
            style={{ animationPlayState: !isPlay ? 'paused' : 'running' }}
          />
          <div className="mask" onClick={() => player()}>
            {!isPlay ? <PlayCircleFilled /> : <PauseCircleFilled />}
          </div>
        </div>
        <span ref={elRef} onClick={() => setIsOpen(true)}></span>
        <audio
          src={`https://music.163.com/song/media/outer/url?id=${id}.mp3`}
          ref={audioRef}
        />
      </MusicWrap>

      <PlayPage
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setId={setId}
        songDetail={detail}
        player={player}
      />
    </>
  )
}

export default React.memo(Music)
