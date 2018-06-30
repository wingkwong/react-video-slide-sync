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
import { setConfig } from './actions';



class Main extends Component {
  constructor(props) {
    super(props);
    const { config } = this.props;
    const defaultProps = {
        width: '968px',                    // width of chameleon container
        height: '300px',                   // height of chameleon container
        context: {},              // slides JSON file / object 
        numOfCarouselSlide: 5,             // number of slides showing in carousel
        responsive: false,              
        player: 'html5'
    };

    var o = {
        width: config.width || defaultProps.width2,
        height: config.height || defaultProps.height,
        context: config.context || defaultProps.context,
        numOfCarouselSlide: config.numOfCarouselSlide || defaultProps.numOfCarouselSlide,
        responsive: config.responsive || defaultProps.responsive,
        player: config.player || defaultProps.player
    }

    this.props.setConfig(o);
  }

  componentDidMount() {
    // const { context } = this.props;
    // this.props.setContext(context);
  }

  render() {
    const { player, config } = this.props;

    return (
        <div className={"chameleon " + (config.responsive || false? 'responsive': 'non-responsive')}>
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
    setConfig: (config) =>
      dispatch(setConfig(config))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
