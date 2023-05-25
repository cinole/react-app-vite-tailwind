import * as view from '../view'

export const DesktopRoutes = [
  {
    key: 'home',
    path: '/',
    exact: true,
    element: view.Home
  },
  {
    key: 'profile',
    path: '/profile',
    exact: true,
    element: view.Profile
  },
  {
    key: 'not-found',
    path: '*',
    element: view.NotFound
  }
]

export const MobileRoutes = [
  {
    path: '/',
    exact: true,
    element: view.Home
  },
  {
    path: '*',
    element: view.NotFound
  }
]
