import * as view from '@/view'
import { createBrowserRouter } from 'react-router-dom'

export const Routes = createBrowserRouter([
  {
    key: 'home',
    path: '/',
    exact: true,
    element: view.Home,
  },
  {
    key: 'profile',
    path: '/profile',
    exact: true,
    element: view.Profile,
  },
  {
    key: 'not-found',
    path: '*',
    element: view.NotFound,
  },
])
