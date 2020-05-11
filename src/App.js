import React from 'react'
// import { useSelector } from 'react-redux'
// import { Route, Switch } from 'react-router-dom'
// import { authorized, unauthorized } from 'modules/router/routes'
import { Layout } from 'components'
import MainPage from './pages/MainPage/MainPage'

// const RouteWithSubRoutes = route => (
//   <Route path={route.path} render={props => <route.component {...props} routes={route.routes} />} />
// )

const App = () => {
  // const { user } = useSelector(state => state.session)
  // const renderContent = routes => (
  //   <Switch>
  //     {routes.map(route => <RouteWithSubRoutes key={route.path} {...route} />)}
  //     <Route component={() => <div>404</div>} />
  //   </Switch>
  // )
  return (
    <Layout className='wrapper'>
      <MainPage />
      {/* {renderContent(user ? authorized : unauthorized)} */}
    </Layout>
  )
}

export default App
