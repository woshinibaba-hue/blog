import React, { useState, useRef, useEffect } from 'react'

import classNames from 'classnames'

import { getSongDetail, getSongLyric } from '@/api/music'

import { useText } from '@/hooks'
import Play from '@/utils/play'
import format from '@/utils/format'
import storage from '@/utils/storage'

import { SongDetailType } from '@/api/music/type'
import PlayPage from './components/Play'
import { MusicWrap } from './styled'

let play: Play

const songDetail = storage.get<SongDetailType>('songDetail')
const lyric = storage.get<{ time: number; lyric: string }[]>('lyric')

function Music({ isShowMusic }: { isShowMusic: boolean }) {
  const [isPlay, setIsPlay] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const elRef = useRef<HTMLSpanElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  useText(elRef, { strings: ['点击进入播放页'], loop: false })

  useEffect(() => {
    if (audioRef.current) {
      play = new Play(audioRef.current, setIsPlay)

      play.audioEl.ontimeupdate = () => {
        setCurrentTime(play.audioEl.currentTime * 1000)
      }
    }
  }, [audioRef.current])

  // 当前音乐详情
  const [id, setId] = useState('469838125')
  const [detail, setDetail] = useState<SongDetailType>()
  const [lyrics, setLycics] = useState<{ time: number; lyric: string }[]>([])

  const getDetail = () => {
    getSongDetail(id).then((res) => {
      const songDetail = res
      setDetail(songDetail.data)
      storage.set('songDetail', { ...songDetail.data, id })
    })

    getSongLyric(id).then((res) => {
      const lyricArr = format.formatLyric(res.data)
      setLycics(lyricArr)
      storage.set('lyric', lyricArr)
    })
  }

  useEffect(() => {
    if (songDetail && lyric) {
      if (songDetail?.id != id) {
        getDetail()
      } else {
        setDetail(songDetail)
        setLycics(lyric)
      }
    } else {
      getDetail()
    }
  }, [id])

  const player = (ids?: string) => {
    if (ids && ids != id) {
      setIsPlay(true)
      play?.player(true, true)
      return
    }
    setIsPlay(!isPlay)
    play?.player(!isPlay)
  }

  return (
    <>
      <MusicWrap isShowMusic={isShowMusic}>
        <div className="audio">
          <img
            src={`${detail?.cover}?param=120y120`}
            style={{ animationPlayState: !isPlay ? 'paused' : 'running' }}
          />
          <div className="mask" onClick={() => player()}>
            <i
              className={classNames([
                'iconfont',
                isPlay ? 'icon-zanting1' : 'icon-bofang'
              ])}
            ></i>
          </div>
        </div>
        <span className="lyric ellipsis-1" onClick={() => setIsOpen(true)}>
          <>{lyrics[currentIndex]?.lyric}</>
        </span>
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
        songId={id}
        isPlay={isPlay}
      />
    </>
  )
}

export default React.memo(Music)
