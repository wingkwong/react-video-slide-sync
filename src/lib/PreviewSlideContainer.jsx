import React, { Component } from "react";
import {connect} from "react-redux";


class PreviewSlideContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderPreviewImages() {
     const { slides } = this.props.config.context;
     return slides.map( (slide, idx) => {

        return (
          <div className={"carousel-item" + (idx==0? ' active': "")} key={idx}>
            <div className="thumbnail-container">
              <div className="slide-image" data-index={idx}>
                <img src={slide.img} title={slide.title} alt={slide.alt}/>
              </div>
              <div className="slide-number">{idx} / {slide.length}</div>
            </div>
            { this.renderClonedthumbnailContainer() }
          </div>
        );
     })
  }

  renderClonedthumbnailContainer() {
    const { numOfCarouselSlide } = this.props.config;
  }

  render() {
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
    config: state.generalReducer.config
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewSlideContainer);
