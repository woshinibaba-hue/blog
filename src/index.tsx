import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.min.css'

import 'default-passive-events'

import './index.css'
import App from './App'

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
