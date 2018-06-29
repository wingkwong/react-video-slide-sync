import React, { Component } from "react";

class CarouselControl extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div><a className="carousel-control prev"></a><a className="carousel-control next"></a></div>
    );
  }
}

export default CarouselControl;
