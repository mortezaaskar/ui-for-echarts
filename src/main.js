/**
 * Created by liekkas on 15/12/14.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routes'
import { Root } from './containers'
//import './normalize.css'
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css'
import 'loaders.css/loaders.min.css'
import './common.scss'
//import 'antd/lib/index.css'
import 'antd/style/index.less'
import configureStore from './configureStore'
import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

//import { createAction, ActionTypes } from './actions'

//const store = configureStore()
const historyConfig = { basename: __BASENAME__ }
const history = useRouterHistory(createHashHistory)(historyConfig)

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, history)

//fetch(REST_API_BASE_URL + 'root')
//  .then(function(response) {
//    return response.json()
//  }).then(function(json) {
//    console.log('parsed json', json)
//    if (json.hasOwnProperty('curScene')) {
//      store.dispatch(createAction(ActionTypes.INIT_SCENE, json))
//    }
//    store.dispatch(createAction(ActionTypes.INIT_USER, 'root'))
//  }).catch(function(ex) {
//    console.log('parsing failed', ex)
//  })

ReactDOM.render(
  <Root history={history} route={AppRouter} store={store} />,
  document.getElementById('root')
)

