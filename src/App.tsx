import React, { useEffect } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import router from './router'

function App() {
  const routers = useRoutes(router)
  const loocation = useLocation()

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
  }, [loocation.pathname])

  return <div className="App">{routers}</div>
}

export default App
