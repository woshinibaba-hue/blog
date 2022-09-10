import React from 'react'

import { useDispatch } from 'react-redux'
import { setUserAction } from '@/layout/store/actioncreatore'

import { Form, Input, Button, Checkbox, message, Space, Divider } from 'antd'

import storage from '@/utils/storage'

import { QQLogin } from '@/api/login'

import { login } from '@/api/login'
import { ILogin } from '@/api/login/types'

// const redirect_uri = process.env.REACT_APP_REDIRECT_URL
const client_id = process.env.REACT_APP_CLIENT_ID

function Login({ handleClose }: { handleClose: () => void }) {
  const dispatch = useDispatch()

  function loginSuccess(res: any) {
    dispatch(setUserAction(res.data))
    storage.set('user', res.data)
    message.success(res.message)
    handleClose()
  }

  // 登录
  const onFinish = (values: ILogin) => {
    login(values).then((res) => {
      loginSuccess(res)
    })
  }

  // github 登录
  const githubLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=user`
  }

  // qq登录
  const qqLogin = () => {
    const win = window.open(
      'https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=102018709&response_type=token&scope=all&redirect_uri=https://www.yimiciji.top:7777/home',
      'newwin',
      'toolbar=no,scrollbars=yes,menubar=no'
    )

    const timerId = setInterval(() => {
      // 检查用户是否登录成功
      if (QC.Login.check()) {
        // 获取 appenId 和 accessToken
        QC.Login.getMe(async (appenId: string, accessToken: string) => {
          const res = await QQLogin(appenId, accessToken)
          loginSuccess(res)
        })
        // 关闭小窗口，清除定时器
        win?.close()
        clearInterval(timerId)
      }
    }, 500)
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
          prefix={<i className="iconfont icon-youxiang" />}
          placeholder="邮箱"
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
          <i className="iconfont icon-github" onClick={githubLogin}></i>
          {/* <span id="qqLoginBtn"></span> */}
          <img
            onClick={qqLogin}
            src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_1.png"
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
