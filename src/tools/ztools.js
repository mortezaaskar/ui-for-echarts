/**
 * Created by liekkas on 15/12/24.
 */
import _ from 'lodash';

export function createUniqueId(mark) {
  return _.uniqueId(new Date().getMilliseconds() + mark);
}

export function swap(arr, indexA, indexB) {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}
