import React, { Component } from "react";
import {connect} from "react-redux";
import YouTube from 'react-youtube';

class YoutubeBase extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
     var o = this.props.context.youtubeSetup;
    return (
      <YouTube videoId={o.videoId}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    context: state.generalReducer.context
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeBase);
