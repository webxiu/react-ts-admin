import { Button, Result } from 'antd'

import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage: React.FC<{}> = () => {
  const navigate = useNavigate()
  return (
    <Result
      status="404"
      title="404"
      subTitle={'9999999'}
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          按钮
        </Button>
      }
    ></Result>
  )
}

export default NotFoundPage
