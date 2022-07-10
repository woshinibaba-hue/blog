import React, { useEffect, useState } from 'react'

import { Table, Space, Input } from 'antd'
import { PlayCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'

import type { ColumnsType } from 'antd/lib/table'

import { PlayStyle } from './style'

import { PropsType } from './types'
import { SongDefault } from '../../types'

import { getMusicList } from '@/api/music'

import format from '@/utils/format'

interface DataType extends SongDefault {
  key: string
}

function Play({ isOpen, setIsOpen, setId, songDetail, player }: PropsType) {
  const [songList, setSongList] = useState<DataType[]>()

  const columns: ColumnsType<DataType> = [
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
          <PlayCircleOutlined
            onClick={() => {
              setId(key)
              player(key)
            }}
          />
          <PlusCircleOutlined />
        </Space>
      )
    }
  ]

  const search = (value: string) => {
    console.log(value)
  }

  useEffect(() => {
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
  }, [])

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
            <ul className="lyric">
              {new Array(100).fill(1).map((item, index) => (
                <li className="ellipsis-1" key={index}>
                  hhh
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
