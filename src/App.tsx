import React from 'react'
import { useRoutes } from 'react-router-dom'

import router from './router'

function App() {
  const routers = useRoutes(router)
  return <div className="App">{routers}</div>
}

export default App
