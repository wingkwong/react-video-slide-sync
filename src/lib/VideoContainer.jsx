import React, { Component } from "react";
import {connect} from "react-redux";
import JwplayerBase from "./JwplayerBase";
import HTML5Base from "./HTML5Base";
import YoutubeBase from "./YoutubeBase";

class VideoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	
    }
  }

  componentDidMount() {
  	this._initPlayer();
    this._responsify();
  }

  _initPlayer() {
   	const { player } = this.props.config;

   	switch(player){
        case 'jwplayer':
           	this.setState({ player: 'jwplayer' });
            break;

        case 'html5':
            this.setState({ player: 'html5' });
            break;

        case 'youtube': 
            this.setState({ player: 'youtube' });
            break;

        default: 
            throw new Error(player + " is not supported");
    }
   }

   _responsify() {
      var { responsive } = this.props.config;
      if(responsive){
        //TODO
      }
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
