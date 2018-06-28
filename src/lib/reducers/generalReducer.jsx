import {
	SET_CONTEXT
} from '../constants';

function generalReducer(state={context: null}, action) {
  switch (action.type) {
    case SET_CONTEXT:
      return {context: action.context};
    default:
      return state;
  }
}


export default generalReducer;