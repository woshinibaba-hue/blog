import React from 'react'
import { useRoutes } from 'react-router-dom'
import router from './router'

import Music from './components/Music'

function App() {
  const routers = useRoutes(router)
  return (
    <div className="App">
      {routers}
      <Music />
    </div>
  )
}

export default App
