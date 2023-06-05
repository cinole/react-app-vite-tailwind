import { RouterProvider } from 'react-router-dom'

import { routes } from './RoutesConfig'
import Layout from '@/layout'

export const AppRoute = () => {
  // const location = useLocation()
  // const routesDefault = window.innerWidth <= 1024 ? MobileRoutes : DesktopRoutes
  // const [routes, setRoutes] = useState(routesDefault)

  // const blackList = ['/']
  // const active = blackList.includes(location.pathname)
  // ? null
  // : location.pathname

  return (
    <RouterProvider router={routes}>
      <Layout />
    </RouterProvider>
  )
}

export default AppRoute
