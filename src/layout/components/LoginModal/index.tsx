import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setIsShowLoginAction } from '../../store/actioncreatore'
import { RootStateType } from '@/store/types'

import { Modal, Tabs } from 'antd'

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

function LoginModal() {
  const dispatch = useDispatch()

  const isLoginModalVisible = useSelector<RootStateType, boolean>(
    (state) => state.layoutStore.isShowLogin
  )

  const handleClose = () => {
    dispatch(setIsShowLoginAction())
  }

  return (
    <Modal
      visible={isLoginModalVisible}
      closable
      onCancel={() => handleClose()}
      zIndex={1000}
      footer={null}
      destroyOnClose
    >
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="用户登录" key="1">
          <LoginForm handleClose={handleClose} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="用户注册" key="2">
          <RegisterForm />
        </Tabs.TabPane>
      </Tabs>
    </Modal>
  )
}

export default LoginModal
