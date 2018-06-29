import React, { Component } from "react";

class PreviewImage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { children } = this.props;
    return (
      <div className="thumbnail-container">
        <div className="slide-image">
          <img/>
        </div>
        <div className="slide-number"></div>
      </div>
    );
  }
}

export default PreviewImage;
