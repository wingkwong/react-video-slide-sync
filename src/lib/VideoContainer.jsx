import React, { Component } from "react";
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
  }

  _initPlayer() {
   	const { player } = this.props;

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


  renderBase() {
  	const { player } = this.state;
  	const { context } = this.props;
  	return (
  		<div>
  			{ player == 'jwplayer' && <JwplayerBase jwplayerKey={context.jwplayerKey} jwplayerSetup={context.jwplayerSetup}/> }
  			{ player == 'html5' && <HTML5Base html5Setup={context.html5Setup}/> }
  			{ player == 'youtube' && <YoutubeBase youtubeSetup={context.youtubeSetup}/> }
  		</div>
  	)
  }

  render() {
    const { children } = this.props;
    return (
      <div className="">
      	{ this.renderBase() }
      </div>
    );
  }
}

export default VideoContainer;
