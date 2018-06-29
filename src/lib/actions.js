import {
  SET_CONFIG
} from './constants';


function dispatchSetConfig(config) {
  return {type: SET_CONFIG, config: config};
}



export function setConfig(config) {
  return dispatch => {
    dispatch(dispatchSetConfig(config));
  };
}
