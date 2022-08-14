import React, { useEffect, useState, useRef } from 'react'
import classNames from 'classnames'
import { Table, Space, Input, Tooltip } from 'antd'

import type { ColumnsType } from 'antd/lib/table'

import { PlayStyle } from './style'

import format from '@/utils/format'
import storage from '@/utils/storage'

import { getMusicList, searchSong } from '@/api/music'

import { PropsType } from './types'
import { SongItmeType } from '@/api/music/type'

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
  const [isLoading, setIsLoading] = useState(true)
  const [songList, setSongList] = useState<{
    songs?: SongItmeType[]
    songCount?: number
  }>()
  const lyricEl = useRef<HTMLUListElement>(null)

  const columns: ColumnsType<SongItmeType> = [
    {
      title: '序号',
      width: 80,
      align: 'center',
      render: (_, { key }, index) => (
        <>
          {isPlay && key == songId ? (
            <img
              className="mave lazyload"
              src="http://rfz86pha6.hn-bkt.clouddn.com/wave.gif"
              alt=""
            />
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
      key: 'dt',
      render: (_, { dt }) => format.formatTime(dt, 'mm:ss')
    },
    {
      title: '',
      key: 'action',
      render: (_, { key }) => (
        <Space size="middle">
          <i
            className={classNames([
              'iconfont',
              isPlay && key === songId ? 'icon-zanting1' : 'icon-bofang'
            ])}
            onClick={() => {
              setId(key)
              player(key)
            }}
          />
        </Space>
      )
    }
  ]

  const [searchKey, setSearchKey] = useState('')

  const search = (value: string, limit = 10, offset = 0) => {
    setIsLoading(true)
    if (value.trim()) {
      setSearchKey(value)
      searchSong(value, limit, offset).then((res) => {
        setIsLoading(false)
        setSongList(res.data)
      })
    } else {
      setSearchKey('')
      getList()
    }
  }

  const getList = () => {
    const musicList = storage.get<SongItmeType[]>('music_list')
    setSearchKey('')
    setIsLoading(true)

    if (!musicList) {
      getMusicList().then((res) => {
        setSongList({ songs: res.data, songCount: res.data.length })
        storage.set('music_list', res.data)
      })
    } else {
      setSongList({ songs: musicList, songCount: musicList.length })
    }
    setIsLoading(false)
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
      setCurrentIndex(index - 1 < 0 ? 0 : index - 1)
      lyricEl.current?.scrollTo({
        top: (index - 5) * 30,
        behavior: 'smooth'
      })
    }
  }, [currentTime])

  // 刷新歌单
  const refresh = () => {
    storage.remove('music_list')
    setSongList({ songs: [], songCount: 0 })
    getList()
  }

  return (
    <PlayStyle isOpen={isOpen} bg={songDetail?.cover}>
      <main>
        <header>
          <div className="left">
            <div className="refresh" onClick={refresh}>
              <Tooltip title="点击我刷新歌单">
                <i className="iconfont icon-shuaxin" />
              </Tooltip>
            </div>
            <div className="title">歌曲列表</div>
            <div className="pattern">歌曲播放模式</div>
            <div className="search">
              <Input.Search
                placeholder="输入关键字"
                style={{ width: 300 }}
                onSearch={(val) => search(val)}
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
              dataSource={songList?.songs}
              columns={columns}
              scroll={{ y: 500 }}
              pagination={{
                showSizeChanger: false,
                total: songList?.songCount,
                onChange: (page, pageSize) => {
                  if (searchKey.trim()) {
                    search(searchKey, pageSize, pageSize * (page - 1))
                  }
                }
              }}
              rowClassName={(record) =>
                record.key == songId ? 'highlight' : ''
              }
              loading={isLoading}
            />
          </div>
          <div className="detail">
            <div className="cover">
              <img
                src={`${songDetail?.cover}?param=175y175`}
                alt=""
                className="lazyload"
              />
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
