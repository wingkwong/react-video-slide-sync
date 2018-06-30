import React, { Component } from "react";
import {connect} from "react-redux";

class DownloadContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderDownloadSlideButton() {
    const { context } = this.props.config;
    console.log(context)
    if(typeof context.download.slides != "undefined" && typeof context.download.slides === "object") {
       if(typeof context.download.slides.url != "undefined" && typeof context.download.slides.url === "string"){
         return (
          <a href={context.download.slides.url} className="download-btn download-slides" target="_blank" download 
            title={typeof context.download.slides.title != "undefined" && typeof context.download.slides.title === 'string'? context.download.slides.title: ''}>
              Download slides
          </a>
         )
       }
    }

    return (null);
  }

  renderDownloadVideoButton() {
    const { context } = this.props.config;
    if(typeof context.download.video != "undefined" && typeof context.download.video === "object") {
       if(typeof context.download.video.url != "undefined" && typeof context.download.video.url === "string"){
         return (
          <a href={context.download.video.url} className="download-btn download-video" target="_blank" download 
            title={typeof context.download.video.title != "undefined" && typeof context.download.video.title === 'string'? context.download.video.title: ''}>
              Download Video
          </a>
         )
       }
    }

    return (null);
  }

  renderDownloadTranscriptButton() {
    const { context } = this.props.config;
    if(typeof context.download.transcript != "undefined" && typeof context.download.transcript === "object") {
       if(typeof context.download.transcript.url != "undefined" && typeof context.download.transcript.url === "string"){
         return (
          <a href={context.download.transcript.url} className="download-btn download-transcript" target="_blank" download 
            title={typeof context.download.transcript.title != "undefined" && typeof context.download.transcript.title === 'string'? context.download.transcript.title: ''}>
              Download Transcript
          </a>
         )
       }
    }

    return (null);
  }

  render() {
    const { children } = this.props;
    return (
      <div className="download-container">
        { this.renderDownloadSlideButton() }
        { this.renderDownloadVideoButton() }
        { this.renderDownloadTranscriptButton() }
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

export default connect(mapStateToProps, mapDispatchToProps)(DownloadContainer);
