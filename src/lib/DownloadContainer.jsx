import React, { Component } from "react";

class DownloadContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { children } = this.props;
    return (
      <div className="download-container">
        DownloadContainer
      </div>
    );
  }
}

export default DownloadContainer;
