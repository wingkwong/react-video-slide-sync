import React, { Component } from "react";

class CarouselControl extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { children } = this.props;
    return (
      <a className="carousel-control prev"></a><a className="carousel-control next"></a>
    );
  }
}

export default CarouselControl;
