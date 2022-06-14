/**
 * Created by liekkas on 15/12/17.
 */
import { combineReducers } from 'redux-immutablejs'
import globalReducer from './globalReducer'
import otherReducer from './otherReducer'

const rootReducer = combineReducers({
  global: globalReducer,
  other: otherReducer,
})

export default rootReducer
