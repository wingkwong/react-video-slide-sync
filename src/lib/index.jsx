import React, { Component } from "react";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';  
import rootReducer from './reducers';
import Main from './Main';



class VideoSlideSync extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { player, context } = this.props;
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);  
    const store = createStoreWithMiddleware(rootReducer);

    return (
      <Provider store={store}>
        <Main player={player} context={context}/>
      </Provider>
    );
  }
}


export default VideoSlideSync;
