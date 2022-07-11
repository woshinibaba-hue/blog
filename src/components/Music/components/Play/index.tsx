import React, { useEffect, useState, useRef } from 'react'
import classNames from 'classnames'
import { Table, Space, Input } from 'antd'

import {
  PlayCircleOutlined,
  PlusCircleOutlined,
  PauseCircleOutlined
} from '@ant-design/icons'

import type { ColumnsType } from 'antd/lib/table'

import { PlayStyle } from './style'

import { PropsType } from './types'
import { SongDefault } from '../../types'

import format from '@/utils/format'

import { getMusicList, searchSong } from '@/api/music'

import wave from '@/assets/img/wave.gif'

interface DataType extends SongDefault {
  key: string
}

function Play({
  isOpen,
  setIsOpen,
  isPlay,
  songId,
  setId,
  songDetail,
  currentTime,
  lyrics,
  currentIndex,
  setCurrentIndex,
  player
}: PropsType) {
  const [songList, setSongList] = useState<DataType[]>()
  const lyricEl = useRef<HTMLUListElement>(null)

  const columns: ColumnsType<DataType> = [
    {
      title: '序号',
      width: 80,
      align: 'center',
      render: (_, { key }, index) => (
        <>
          {isPlay && key === songId ? (
            <img className="mave" src={wave} alt="" />
          ) : (
            <span>{index + 1}</span>
          )}
        </>
      )
    },
    {
      title: '歌曲名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '歌手',
      dataIndex: 'ar',
      key: 'ar'
    },
    {
      title: '专辑',
      dataIndex: 'al',
      key: 'al'
    },
    {
      title: '时长',
      dataIndex: 'dt',
      key: 'dt'
    },
    {
      title: '',
      key: 'action',
      render: (_, { key }) => (
        <Space size="middle">
          {isPlay && key === songId ? (
            <PauseCircleOutlined
              onClick={() => {
                setId(key)
                player(key)
              }}
            />
          ) : (
            <PlayCircleOutlined
              onClick={() => {
                setId(key)
                player(key)
              }}
            />
          )}

          <PlusCircleOutlined />
        </Space>
      )
    }
  ]

  // const {
  //   isOpen,
  //   id: songId,
  //   setIsOpen,
  //   setId,
  //   player,
  //   lyrics,
  //   currentTime,
  //   detail: songDetail,
  //   currentIndex,
  //   setCurrentIndex,
  //   isPlay
  // } = usePlay()

  const search = (value: string) => {
    if (value.trim()) {
      searchSong(value).then((res) => {
        const songs: DataType[] = (res as any).result.songs.map(
          (item: any) => ({
            key: item.id,
            name: item.name,
            ar: item.artists[0].name,
            al: item.album.name,
            dt: format.formatTime(item.duration, 'mm:ss')
          })
        )

        setSongList(songs)
      })
    } else {
      getList()
    }
  }

  const getList = () => {
    getMusicList().then((res) => {
      const songs: DataType[] = (res as any).playlist.tracks.map(
        (item: any): DataType => ({
          key: item.id,
          name: item.name,
          ar: item.ar[0].name,
          al: item.al.name,
          dt: format.formatTime(item.dt, 'mm:ss')
        })
      )

      setSongList(songs)
    })
  }

  useEffect(getList, [])

  useEffect(() => {
    const index = lyrics.findIndex((item) => currentTime <= item.time)

    if (currentIndex === 0) {
      lyricEl.current?.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    if (currentIndex !== index - 1) {
      setCurrentIndex(index - 1)
      lyricEl.current?.scrollTo({
        top: (index - 5) * 30,
        behavior: 'smooth'
      })
    }
  }, [currentTime])

  return (
    <PlayStyle isOpen={isOpen} bg={songDetail?.cover}>
      <main>
        <header>
          <div className="left">
            <div className="title">歌曲列表</div>
            <div className="pattern">歌曲播放模式</div>
            <div className="search">
              <Input.Search
                placeholder="输入关键字"
                style={{ width: 300 }}
                onSearch={search}
              />
            </div>
          </div>
          <div className="close" onClick={() => setIsOpen(false)} title="关闭">
            ×
          </div>
        </header>
        <div className="main">
          <div className="song">
            <Table
              dataSource={songList}
              columns={columns}
              scroll={{ y: 500 }}
              pagination={{
                showSizeChanger: false
              }}
              loading={!songList?.length}
              rowClassName={(record) =>
                record.key == songId ? 'highlight' : ''
              }
            />
          </div>
          <div className="detail">
            <div className="cover">
              <img src={`${songDetail?.cover}?param=175y175`} alt="" />
              <div className="bg" />
            </div>
            <p className="ellipsis-1">歌曲名称: {songDetail?.name}</p>
            <p className="ellipsis-1">歌手: {songDetail?.ar}</p>
            <p className="ellipsis-1">专辑名称: {songDetail?.al}</p>
            <ul className="lyric" ref={lyricEl}>
              {lyrics.map((item, index) => (
                <li
                  key={index}
                  className={classNames([
                    { active: currentIndex === index },
                    'ellipsis-1'
                  ])}
                >
                  {item.lyric}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </PlayStyle>
  )
}

export default React.memo(Play)
