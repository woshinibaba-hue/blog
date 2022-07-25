import React from 'react'

import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

function Login() {
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true
      }}
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login
