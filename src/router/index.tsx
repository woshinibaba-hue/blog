import React, { lazy, LazyExoticComponent, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'

import { Spin } from 'antd'

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
        path: '/home',
        component: lazy(() => import('@/view/Home'))
      },
      {
        path: '/about',
        component: lazy(() => import('@/view/About'))
      },
      {
        path: '/link',
        component: lazy(() => import('@/view/FriendLink'))
      },
      {
        path: '/msg',
        component: lazy(() => import('@/view/LeaveMessage'))
      },
      {
        path: '/history',
        component: lazy(() => import('@/view/Pigeonhole'))
      },
      {
        path: '/tags',
        component: lazy(() => import('@/view/Tags'))
      },
      {
        path: '/article/:id',
        component: lazy(() => import('@/view/Article'))
      },
      {
        path: '/search',
        component: lazy(() => import('@/view/Search'))
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
        <Suspense
          fallback={
            <Spin
              style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              tip="正在努力加载中..."
            />
          }
        >
          <route.component />
        </Suspense>
      ),
      children: route.children && syncRouter(route.children)
    })
  })

  return mRouters
}

export default syncRouter(routers)
