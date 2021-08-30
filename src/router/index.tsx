import React, { FC, lazy } from 'react'

import LayoutPage from '@/layout'
import LoginPage from '@/pages/login'
import { PartialRouteObject } from 'react-router'
import WrapperRouteComponent from './config'
import { useRoutes } from 'react-router-dom'

const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '@/pages/404'))
//测试页面组件
const Test = lazy(() => import(/* webpackChunkName: "test'"*/ '@/pages/test'))

const routeList: PartialRouteObject[] = [
  {
    path: 'login',
    element: <WrapperRouteComponent element={<LoginPage />} title="登陆" />
  },
  {
    path: '',
    element: <WrapperRouteComponent element={<LayoutPage />} title="" />,
    children: [
      //测试路由
      {
        path: 'test/test1/test2',
        element: <WrapperRouteComponent element={<Test />} auth title="测试" />
      }
    ]
  },
  {
    path: '*',
    element: <WrapperRouteComponent element={<NotFound />} auth title="title.notFount" />
  }
]

const RenderRouter: FC = () => {
  const element = useRoutes(routeList)
  return element
}

export default RenderRouter
