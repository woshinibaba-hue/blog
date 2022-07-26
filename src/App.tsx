import React, { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import router from './router'

function App() {
  const routers = useRoutes(router)

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [location.pathname])

  return <div className="App">{routers}</div>
}

export default App
