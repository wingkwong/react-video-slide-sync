import React, { Component } from "react";
import {connect} from "react-redux";
import JwplayerBase from "./JwplayerBase";
import HTML5Base from "./HTML5Base";
import YoutubeBase from "./YoutubeBase";
import {slideCarouselHandler} from "./Utils";

class VideoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	
    }
  }

  componentDidMount() {
  	this._initPlayer();
  }

  _initPlayer() {
   	const { player } = this.props.config;

   	switch(player){
        case 'jwplayer':
           	this.setState({ player: 'jwplayer' });
            this._initJWPlayer();
            break;

        case 'html5':
            this.setState({ player: 'html5' });
            this._initHTML5Player();
            break;

        case 'youtube': 
            this.setState({ player: 'youtube' });
            this._initYoutubePlayer();
            break;

        default: 
            throw new Error(player + " is not supported");
    }
   }

   _initJWPlayer(){
    const { context } = this.props.config;
   }

   _initHTML5Player(){
    const { config } = this.props;
    var video = document.querySelector('.chameleon-html5-video');
    video.ontimeupdate = function() {
      var time = this.get(0).currentTime;
      slideCarouselHandler(config.context.slides,config.numOfCarouselSlide, time);
    }
   }

   _initYoutubePlayer(){
    const { context } = this.props.config;
   }

  renderBase() {
  	const { player } = this.props.config;
  	return (
  		<div>
  			{ player == 'jwplayer' && <JwplayerBase/> }
  			{ player == 'html5' && <HTML5Base/> }
  			{ player == 'youtube' && <YoutubeBase/> }
  		</div>
  	)
  }

  render() {
    return (
      <div className="video-container">
      	{ this.renderBase() }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    config: state.generalReducer.config
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer);
