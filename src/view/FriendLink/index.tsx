import React from 'react'

import { Form, Input, Button } from 'antd'

import { LinkStyled } from './style'

function FriendLink() {
  return (
    <LinkStyled>
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
          <Form>
            <Form.Item
              label="友链名称"
              name="likeName"
              rules={[{ required: true, message: '友链名称不能为空' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="友链介绍"
              name="likeReferral"
              rules={[{ required: true, message: '友链介绍不能为空' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="友链封面"
              name="likeCover"
              rules={[{ required: true, message: '友链封面不能为空' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="友链地址"
              name="like"
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
        <div className="item">
          <div className="cover">
            <img src="http://localhost:8888/upload/1657255015650-logo.gif" />
          </div>
          <div className="info">
            <div className="name ellipsis-1">
              我是名称我是名称我是名称我是名称我是名称我是名称 我是名称 我是名称
              我是名称
            </div>
            <div className="synopsis ellipsis-1">
              我是介绍我是介绍我是介绍我是介绍我是介绍 我是介绍 我是介绍
            </div>
          </div>
        </div>
        <div className="item">
          <div className="cover">
            <img src="http://localhost:8888/upload/1657255015650-logo.gif" />
          </div>
          <div className="info">
            <div className="name ellipsis-1">
              我是名称我是名称我是名称我是名称我是名称我是名称 我是名称 我是名称
              我是名称
            </div>
            <div className="synopsis ellipsis-1">
              我是介绍我是介绍我是介绍我是介绍我是介绍 我是介绍 我是介绍
            </div>
          </div>
        </div>
        <div className="item">
          <div className="cover">
            <img src="http://localhost:8888/upload/1657255015650-logo.gif" />
          </div>
          <div className="info">
            <div className="name ellipsis-1">
              我是名称我是名称我是名称我是名称我是名称我是名称 我是名称 我是名称
              我是名称
            </div>
            <div className="synopsis ellipsis-1">
              我是介绍我是介绍我是介绍我是介绍我是介绍 我是介绍 我是介绍
            </div>
          </div>
        </div>
        <div className="item">
          <div className="cover">
            <img src="http://localhost:8888/upload/1657255015650-logo.gif" />
          </div>
          <div className="info">
            <div className="name ellipsis-1">
              我是名称我是名称我是名称我是名称我是名称我是名称 我是名称 我是名称
              我是名称
            </div>
            <div className="synopsis ellipsis-1">
              我是介绍我是介绍我是介绍我是介绍我是介绍 我是介绍 我是介绍
            </div>
          </div>
        </div>
        <div className="item">
          <div className="cover">
            <img src="http://localhost:8888/upload/1657255015650-logo.gif" />
          </div>
          <div className="info">
            <div className="name ellipsis-1">
              我是名称我是名称我是名称我是名称我是名称我是名称 我是名称 我是名称
              我是名称
            </div>
            <div className="synopsis ellipsis-1">
              我是介绍我是介绍我是介绍我是介绍我是介绍 我是介绍 我是介绍
            </div>
          </div>
        </div>
        <div className="item">
          <div className="cover">
            <img src="http://localhost:8888/upload/1657255015650-logo.gif" />
          </div>
          <div className="info">
            <div className="name ellipsis-1">
              我是名称我是名称我是名称我是名称我是名称我是名称 我是名称 我是名称
              我是名称
            </div>
            <div className="synopsis ellipsis-1">
              我是介绍我是介绍我是介绍我是介绍我是介绍 我是介绍 我是介绍
            </div>
          </div>
        </div>
        <div className="item">
          <div className="cover">
            <img src="http://localhost:8888/upload/1657255015650-logo.gif" />
          </div>
          <div className="info">
            <div className="name ellipsis-1">
              我是名称我是名称我是名称我是名称我是名称我是名称 我是名称 我是名称
              我是名称
            </div>
            <div className="synopsis ellipsis-1">
              我是介绍我是介绍我是介绍我是介绍我是介绍 我是介绍 我是介绍
            </div>
          </div>
        </div>
        <div className="item">
          <div className="cover">
            <img src="http://localhost:8888/upload/1657255015650-logo.gif" />
          </div>
          <div className="info">
            <div className="name ellipsis-1">
              我是名称我是名称我是名称我是名称我是名称我是名称 我是名称 我是名称
              我是名称
            </div>
            <div className="synopsis ellipsis-1">
              我是介绍我是介绍我是介绍我是介绍我是介绍 我是介绍 我是介绍
            </div>
          </div>
        </div>
        <div className="item">
          <div className="cover">
            <img src="http://localhost:8888/upload/1657255015650-logo.gif" />
          </div>
          <div className="info">
            <div className="name ellipsis-1">
              我是名称我是名称我是名称我是名称我是名称我是名称 我是名称 我是名称
              我是名称
            </div>
            <div className="synopsis ellipsis-1">
              我是介绍我是介绍我是介绍我是介绍我是介绍 我是介绍 我是介绍
            </div>
          </div>
        </div>
      </div>
    </LinkStyled>
  )
}

export default React.memo(FriendLink)
