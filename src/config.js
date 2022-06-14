/**
 * Created by liekkas on 16/1/8.
 */
import { loadingStyles } from './constants/Consts';

export const VERSION = 'v1.0.0';
export const BASE_URL = 'http://' + window.location.host + '/';
//export const BASE_URL = 'http://' + window.location.host + '/parabird/index.html';
//export const REST_API_BASE_URL = 'http://192.168.18.79:4000/api/v1';
export const REST_API_BASE_URL = 'http://localhost:4000/api/v1';
//export const REST_API_BASE_URL = 'http://192.168.18.202:4000/api/v1/parabirds/';

//加载效果
export const LOADING_STYLE = loadingStyles.lineScalePulseOut;
