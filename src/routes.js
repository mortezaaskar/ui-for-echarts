import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, Home, PC, Asset, Mobile, Screen } from './containers'
import { NotFound, About } from './components'

const AppRouter = (
  <Route path="/" component={App}>
    <IndexRoute component={PC} />
    <Route path="mobile" component={Mobile} />
    <Route path="screen" component={Screen} />
    <Route path="asset" component={Asset} />
    <Route path="*" component={NotFound} status={404}/>
  </Route>
);

export default AppRouter;
