import React, { Component } from "react";
import {connect} from "react-redux";
import PreviewSlideContainer from './PreviewSlideContainer';
import CarouselControl from './CarouselControl';

class CarouselContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="carousel-container">
        <PreviewSlideContainer/>
        <CarouselControl/>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
 console.log(state)
  return {
    context: state.generalReducer.context
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselContainer);

