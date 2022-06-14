/**
 * Created by liekkas on 15/12/17.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistory } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { Map } from 'immutable'

const finalCreateStore = compose(
  require('./containers/DevTools').default.instrument()
)(createStore)

export default function configureStore (initialState = {}, history) {
  const routerMiddleware = syncHistory(history)
  let middleware = applyMiddleware(thunk, routerMiddleware)

  const store = __DEV__
    ? middleware(finalCreateStore)(rootReducer, Map(initialState))
    : middleware(createStore)(rootReducer, Map(initialState))

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

