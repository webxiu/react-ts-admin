import 'moment/locale/zh-cn'

import React, { Suspense } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import RenderRouter from './router'
import zhCN from 'antd/es/locale/zh_CN'

// import enUS from 'antd/es/locale/en_US'

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN} componentSize="middle">
      <Suspense fallback={<div>loading</div>}>
        <BrowserRouter>
          <RenderRouter />
        </BrowserRouter>
      </Suspense>
    </ConfigProvider>
  )
}

export default App
