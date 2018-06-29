import {
	SET_CONFIG
} from '../constants';

function generalReducer(state={config: null}, action) {
  switch (action.type) {
    case SET_CONFIG:
      return {config: action.config};
    default:
      return state;
  }
}


export default generalReducer;