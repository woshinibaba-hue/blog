import React, { useState, useEffect } from 'react'

// Upload, message
import { Form, Input, Button, message } from 'antd'
// import type { RcFile } from 'antd/es/upload/interface'

import {
  UserOutlined,
  LockOutlined,
  MobileOutlined,
  // LoadingOutlined,
  // PlusOutlined,
  KeyOutlined,
  createFromIconfontCN
} from '@ant-design/icons'

import { debounce } from '@/utils/debounce'

import * as loginReq from '@/api/login'

// 引用阿里图标库
const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_3368951_4j4ajr0fxvl.js']
})

function Register() {
  // const url = process.env.REACT_APP_BASE_URL
  // const baseUrl = url === 'api' ? 'http://localhost:8888/api' : url
  // const [loading, setLoading] = useState(false)
  // const [imageUrl, setImageUrl] = useState<string>()
  const [code, setCode] = useState<string>('')

  // const uploadButton = (
  //   <div>
  //     {loading ? <LoadingOutlined /> : <PlusOutlined />}
  //     <div style={{ marginTop: 8 }}>上传头像</div>
  //   </div>
  // )

  // 获取验证码
  async function getCode() {
    const res = await loginReq.getLoginCode()
    setCode(res.data)
  }

  // 验证验证码
  const checkCode = debounce(async (_: any, value: string) => {
    if (!value?.trim()) return Promise.reject(new Error('验证码不能为空！'))

    try {
      const res = await loginReq.checkLoginCode(value)
      return Promise.resolve(res)
    } catch (e: any) {
      return Promise.reject(e.response.data)
    }
  })

  // 上传头像前触发的钩子
  // const beforeUpload = (file: RcFile) => {
  //   // 验证文件类型
  //   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  //   if (!isJpgOrPng) {
  //     message.error('文件类型错误!')
  //   }
  //   // 验证文件大小
  //   const isLt2M = file.size / 1024 / 1024 < 2
  //   if (!isLt2M) {
  //     message.error('图片大小不能大于2m!')
  //   }
  //   return isJpgOrPng && isLt2M
  // }

  useEffect(() => {
    getCode()
  }, [])

  const register = async (value: any) => {
    const res = await loginReq.register(value)
    message.success(res.message)
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      onFinish={register}
      initialValues={{ remember: true }}
    >
      <Form.Item
        name="username"
        hasFeedback
        rules={[
          {
            required: true,
            message: '用户姓名不能为空'
          }
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="请输入用户姓名"
        />
      </Form.Item>
      <Form.Item
        name="mobile"
        hasFeedback
        rules={[
          {
            required: true,
            message: '手机号不能为空'
          }
        ]}
      >
        <Input
          prefix={<MobileOutlined className="site-form-item-icon" />}
          placeholder="请输入手机号"
        />
      </Form.Item>
      <Form.Item
        name="email"
        hasFeedback
        rules={[
          {
            required: true,
            message: '邮箱不能为空'
          },
          {
            type: 'email',
            message: '邮箱格式不正确'
          }
        ]}
      >
        <Input
          prefix={<IconFont type="icon-youxiang1" />}
          placeholder="请输入邮箱"
        />
      </Form.Item>
      <Form.Item
        name="password"
        hasFeedback
        rules={[{ required: true, message: '密码不能为空' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入密码"
        />
      </Form.Item>
      <Form.Item
        className="captcha"
        hasFeedback
        name="captcha"
        extra={
          <div
            onClick={getCode}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(code)}`}
              alt=""
            />
            <span>点击刷新验证码</span>
          </div>
        }
        rules={[{ validator: checkCode }]}
      >
        <Input prefix={<KeyOutlined />} placeholder="验证码" key={1} />
      </Form.Item>
      {/* <Upload
        name="image"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={onChange}
        action={`${baseUrl}/upload/img`}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
              objectFit: 'cover',
              height: '100%',
              borderRadius: 'unset'
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload> */}
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          注册
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Register
