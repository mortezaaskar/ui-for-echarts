/**
 * Created by liekkas on 15/12/17.
 */
export const ActionTypes = {
  INIT_USER: 'INIT_USER',
}

export function createAction(type, payload = '', meta = '') {
  return {
    type,
    payload,
    meta,
  }
}
