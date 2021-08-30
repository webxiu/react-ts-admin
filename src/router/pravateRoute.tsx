import React, { FC } from 'react'

import { Route } from 'react-router-dom'
import { RouteProps } from 'react-router'

const PrivateRoute: FC<RouteProps> = props => {
  return <Route {...props} />
}

export default PrivateRoute
