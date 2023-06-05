import * as view from '@/view'
import Layout from '@/layout'

import { createBrowserRouter } from 'react-router-dom'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <view.Home />,
      },
      {
        path: "/profile",
        element: <view.Profile />,
      },
    ],
  },
  // {
  //   key: 'home',
  //   path: '/',
  //   exact: true,
  //   element: <view.Home />,
  // },
  // {
  //   key: 'profile',
  //   path: '/profile',
  //   exact: true,
  //   element: <view.Profile />,
  // },
  // {
  //   key: 'not-found',
  //   path: '*',
  //   element: <view.NotFound />,
  // },
])
