/**
 * Created by liekkas on 15/12/17.
 */
import { ActionTypes } from '../actions'
import { UPDATE_LOCATION } from 'react-router-redux'
import { fromJS } from 'immutable'

const initState = fromJS({
  route: 'home',
  user: {
    id: 'No10000',
    name: 'root',
    role: 'admin',
  }
})

export default function globalReducer(state = initState, action = {}) {
  switch (action.type) {
    case UPDATE_LOCATION:
      const route = action.payload.pathname.substr(1)
      return state.update('route', () => route === '' ? 'home' : route)
    case ActionTypes.INIT_USER:
      return state
    default:
      return state
  }
}
