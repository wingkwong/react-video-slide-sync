import {
  SET_CONTEXT
} from './constants';


function dispatchSetContext(context) {
  return {type: SET_CONTEXT, context: context};
}



export function setContext(context) {
  return dispatch => {
    dispatch(dispatchSetContext(context));
  };
}
