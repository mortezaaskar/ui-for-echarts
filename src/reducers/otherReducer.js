/**
 * Created by liekkas on 15/12/17.
 */
import { ActionTypes } from '../actions';
import { fromJS } from 'immutable';

const initState = fromJS({
  user: {
    id: 'No10000',
    name: 'root',
    role: 'admin',
  }
})

export default function otherReducer(state = initState, action = {}) {
  switch (action.type) {
    case ActionTypes.INIT_USER:
      return state
    default:
      return state
  }
}
