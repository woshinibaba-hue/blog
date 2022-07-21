import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.min.css'

import 'default-passive-events'

import './assets/css/index.css'
import './assets/css/media.css'
import App from './App'

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    {/* 不使用 StrictMode 严格模式 可以避免 useEfect 在不依赖任何依赖项的条件下触发两次 */}
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
