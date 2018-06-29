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
    const { player, config } = this.props;
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);  
    const store = createStoreWithMiddleware(rootReducer);

    return (
      <Provider store={store}>
        <Main player={player} config={config}/>
      </Provider>
    );
  }
}


export default VideoSlideSync;
