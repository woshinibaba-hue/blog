import React, { useState, useEffect, useRef } from 'react'

import { Form, Input, Button, message, Upload, FormInstance } from 'antd'

import { useUpload } from '@/hooks'
import { debounce } from '@/utils/debounce'

import * as loginReq from '@/api/login'

function Register() {
  // const [loading, setLoading] = useState(false)
  const [code, setCode] = useState<string>('')

  const formRef = useRef<FormInstance>(null)

  const { url, upload, setUrl } = useUpload() // setLoading

  const uploadButton = (
    <div>
      {/* {loading ? <LoadingOutlined /> : <PlusOutlined />} */}
      <i className="iconfont icon-jiahao" />
      <div style={{ marginTop: 8 }}>上传头像</div>
    </div>
  )

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

  useEffect(() => {
    getCode()
  }, [])

  const register = async (value: any) => {
    const res = await loginReq.register({ ...value, avatar: url })
    message.success(res.message)
    formRef.current?.resetFields()
    setUrl('')
  }

  return (
    <Form
      ref={formRef}
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
          prefix={<i className="iconfont icon-yonghuming" />}
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
          prefix={<i className="iconfont icon-youxiang" />}
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
          prefix={<i className="iconfont icon-youxiang" />}
          placeholder="请输入邮箱"
        />
      </Form.Item>
      <Form.Item
        name="password"
        hasFeedback
        rules={[{ required: true, message: '密码不能为空' }]}
      >
        <Input.Password
          prefix={<i className="iconfont icon-mima" />}
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
              className="lazyload"
            />
            <span>点击刷新验证码</span>
          </div>
        }
        rules={[{ validator: checkCode }]}
      >
        <Input
          prefix={<i className="iconfont icon-yanzhengma" />}
          placeholder="验证码"
          key={1}
        />
      </Form.Item>
      <Upload
        name="image"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        customRequest={upload}
      >
        {url ? (
          <img
            src={url}
            alt="avatar"
            className="lazyload"
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
      </Upload>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          注册
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Register
