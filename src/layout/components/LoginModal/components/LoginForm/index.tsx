import React from 'react'

import { useDispatch } from 'react-redux'
import { setUserAction } from '@/layout/store/actioncreatore'

import { Form, Input, Button, Checkbox, message, Space, Divider } from 'antd'
import { UserOutlined, LockOutlined, GithubOutlined } from '@ant-design/icons'

import storage from '@/utils/storage'

import { login } from '@/api/login'
import { ILogin } from '@/api/login/types'

const redirect_uri = process.env.REACT_APP_REDIRECT_URL

function Login({ handleClose }: { handleClose: () => void }) {
  const dispatch = useDispatch()

  // 登录
  const onFinish = (values: ILogin) => {
    login(values).then((res) => {
      dispatch(setUserAction(res.data))
      storage.set('user', res.data)
      message.success(res.message)
      handleClose()
    })
  }

  // github 登录
  const githubLogin = async () => {
    // 保存登录前的地址，用于登录后跳转
    storage.set('location', window.location.href)
    window.location.href = `https://github.com/login/oauth/authorize?client_id=a948126501fe95560646&scope=user&redirect_uri=${redirect_uri}`
  }

  return (
    <Form
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        hasFeedback
        rules={[
          { required: true, message: '邮箱不能为空' },
          { type: 'email', message: '邮箱格式不正确' }
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="邮箱"
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
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="#">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Space split={<Divider type="horizontal" />}>
          其他登录方式
          <GithubOutlined
            style={{ cursor: 'pointer', fontSize: '18px' }}
            onClick={githubLogin}
          />
        </Space>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login
