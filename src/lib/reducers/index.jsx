import { combineReducers } from 'redux';
import videoReducer from './videoReducer';
import generalReducer from './generalReducer';

const rootReducer = combineReducers({
   generalReducer: generalReducer,
   videoReducer: videoReducer,
});

export default rootReducer;
