import React, { lazy, LazyExoticComponent, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'

interface IRoute {
  path: string
  component: LazyExoticComponent<React.ComponentType>
  children?: IRoute[]
}

const routers: IRoute[] = [
  {
    path: '/',
    component: lazy(() => import('@/layout')),
    children: [
      {
        path: '/detail',
        component: lazy(() => import('@/view/NotFound'))
      }
    ]
  },
  {
    path: '*',
    component: lazy(() => import('@/view/NotFound'))
  }
]

const syncRouter = (routers: IRoute[]): RouteObject[] => {
  const mRouters: RouteObject[] = []

  routers.forEach((route) => {
    mRouters.push({
      path: route.path,
      element: (
        <Suspense fallback={<div>页面正在努力加载中...</div>}>
          <route.component />
        </Suspense>
      ),
      children: route.children && syncRouter(route.children)
    })
  })

  return mRouters
}

export default syncRouter(routers)
