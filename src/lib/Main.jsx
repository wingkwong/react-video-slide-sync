import React, { Component } from "react";
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';  
import rootReducer from './reducers';
import VideoContainer from './VideoContainer';
import SlideContainer from './SlideContainer';
import InfoPanelContainer from './InfoPanelContainer';
import CarouselContainer from './CarouselContainer';
import DownloadContainer from './DownloadContainer';
import { setContext } from './actions';



class Main extends Component {
  constructor(props) {
    super(props);
    const { context } = this.props;
    this.props.setContext(context);
    
    let o = Object.assign({}, this.defaultProps, props);
    this.state = {
      o
    }
  }

  static propTypes = {
    
  }

  static defaultProps = {
        width: '968px',                    // width of chameleon container
        height: '300px',                   // height of chameleon container
        context: {},              // slides JSON file / object 
        numOfCarouselSlide: 5,             // number of slides showing in carousel
        responsive: false,              
        player: 'html5'
  };

  componentDidMount() {
    // const { context } = this.props;
    // this.props.setContext(context);
  }

  render() {
    const { player, context } = this.props;

    return (
        <div className="chameleon">
          <VideoContainer player={player}/>
          <SlideContainer/>
          <InfoPanelContainer/>
          <CarouselContainer/>
          <DownloadContainer/>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
 console.log(state)
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setContext: (context) =>
      dispatch(setContext(context))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
