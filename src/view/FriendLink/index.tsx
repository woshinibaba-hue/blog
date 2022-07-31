import React, { useEffect, useState, useRef } from 'react'

import { Form, Input, Button, message, FormInstance } from 'antd'

import { getFriendLinkList, applyFriendLink } from '@/api/friendLink'
import { FriendLinkType } from '@/api/friendLink/type'

import { LinkStyled } from './style'

function FriendLink() {
  const [friendLink, setFriendLink] = useState<FriendLinkType[]>([])

  const formRef = useRef<FormInstance>(null)

  useEffect(() => {
    getFriendLinkList().then((res) => {
      setFriendLink(res.data.data)
    })
  }, [])

  const onFinish = (values: any) => {
    applyFriendLink(values).then((res) => {
      message.success(res.message)
      formRef.current?.resetFields()
    })
  }
  return (
    <LinkStyled className="layout-friendLink">
      <div className="applyLike">
        <div className="title">申请交换友链</div>
        <div className="sub">欢迎各位大佬来交换友链 🙌🙌</div>
        <div className="format">
          <p>友链格式</p>
          <p>友链名称: 一名菜鸡</p>
          <p>友链介绍: 一名正在努力的菜鸡</p>
          <p>友链封面: https://hhh.com/xxxx</p>
          <p>友链地址: http://xxxx.cn</p>
        </div>
        <div className="fillLike">
          <Form onFinish={onFinish} ref={formRef}>
            <Form.Item
              label="友链名称"
              name="name"
              rules={[{ required: true, message: '友链名称不能为空' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="友链介绍"
              name="referral"
              rules={[{ required: true, message: '友链介绍不能为空' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="友链封面"
              name="cover"
              rules={[{ required: true, message: '友链封面不能为空' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="友链地址"
              name="link"
              rules={[{ required: true, message: '友链地址不能为空' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit">
                申请友链
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <div className="title">友链</div>
      <div className="friend-box">
        {friendLink.map((item) => (
          <a href={item.link} target="_block" className="item" key={item.id}>
            <div className="cover">
              <img src={item.cover} />
            </div>
            <div className="info">
              <div className="name ellipsis-1">{item.name}</div>
              <div className="synopsis ellipsis-1">{item.referral}</div>
            </div>
          </a>
        ))}
      </div>
    </LinkStyled>
  )
}

export default React.memo(FriendLink)
