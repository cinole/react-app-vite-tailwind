import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { DesktopRoutes } from './RoutesConfig'
import Layout from '@/layout'
import Home from '@/view/Home'
import Profile from '@/view/Profile'
import * as view from '../view'

export const AppRoute = () => {
  const location = useLocation()
  // const routesDefault = window.innerWidth <= 1024 ? MobileRoutes : DesktopRoutes
  // const [routes, setRoutes] = useState(routesDefault)
  const routes = DesktopRoutes

  const blackList = ['/']
  const active = blackList.includes(location.pathname)
    ? null
    : location.pathname
  // useEffect(() => {
  //   window.addEventListener('resize', function(event) {
  //     if (window.innerWidth <= 1024) {
  //       return setRoutes(MobileRoutes)
  //     }

  //     return setRoutes(DesktopRoutes)
  //   })

  //   return () => {
  //     window.removeEventListener('resize')
  //   }
  // }, [])

  return (
    <Layout>
      {/* <SwitchTransition>
          <CSSTransition
            key={active}
            classNames="main-fade-up"
            timeout={{ enter: 750, exit: 200 }}
          > */}
      <Routes>
        {routes.map((r) => (
          <Route
            key={r.key}
            exact={r.exact}
            path={r.path}
            element={<r.element />}
          />
        ))}
      </Routes>
      {/* </CSSTransition>
        </SwitchTransition> */}
    </Layout>
  )
}

export default AppRoute
