import React, { Component } from "react";
import {connect} from "react-redux";


class PreviewSlideContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderPreviewImages() {
     const { slides } = this.props.context;
     return slides.map( (slide, idx) => {
      console.log(slide)
        return (
          <div className="carousel-item" key={idx}>
            <div className="thumbnail-container">
              <div className="slide-image" data-index={idx}>
                <img src={slide.img} title={slide.title} alt={slide.alt}/>
              </div>
              <div className="slide-number">{idx} / {slide.length}</div>
            </div>
          </div>
        );
     })
  }

  render() {
    const { children } = this.props;
    return (
      <div className="preview-slide-container">
        { this.renderPreviewImages() }
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

export default connect(mapStateToProps, mapDispatchToProps)(PreviewSlideContainer);
