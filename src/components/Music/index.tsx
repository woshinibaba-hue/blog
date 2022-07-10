import React, { useState, useRef, useEffect } from 'react'

import { PauseCircleFilled, PlayCircleFilled } from '@ant-design/icons'

import { getSongDetail, getSongLyric } from '@/api/music'

import { useText } from '@/hooks'
import Play from '@/utils/play'
import format from '@/utils/format'

import { DetailType } from './types'

import PlayPage from './components/Play'
import { MusicWrap } from './styled'

let play: Play

function Music() {
  const [isPlay, setIsPlay] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const elRef = useRef<HTMLSpanElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  useText(elRef, { strings: ['点击进入播放页'], loop: false })

  useEffect(() => {
    if (audioRef.current) {
      play = new Play(audioRef.current)

      play.audioEl.ontimeupdate = () => {
        setCurrentTime(play.audioEl.currentTime * 1000)
      }
    }
  }, [audioRef.current])

  // 当前音乐详情
  const [id, setId] = useState('1930213637')
  const [detail, setDetail] = useState<DetailType>()
  const [lyrics, setLycics] = useState<{ time: number; lyric: string }[]>([])

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

    getSongLyric(id).then((res) => {
      const lyricArr = format.formatLyric((res as any).lrc.lyric)
      setLycics(lyricArr)
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
        <span className="lyric ellipsis-1">{lyrics[currentIndex]?.lyric}</span>
        <div>
          <span ref={elRef} onClick={() => setIsOpen(true)}></span>
        </div>
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
        lyrics={lyrics}
        currentTime={currentTime}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  )
}

export default React.memo(Music)
