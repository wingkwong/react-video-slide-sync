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
              <div className="slide-number">{idx + 1} / {slides.length}</div>
            </div>
            { this.renderClonedthumbnailContainer(slides, idx + 1) }
          </div>
        );
     })
  }

  renderClonedthumbnailContainer(slides, idx) {
    console.log(idx)
    const { numOfCarouselSlide, context } = this.props.config;

    if ( slides.length > numOfCarouselSlide ) {
      var cloned = [];
      for ( var i = 1, j = 1; i < numOfCarouselSlide; i++, j++ ) {
        if(idx+j > slides.length) {
          idx = 1;
          j = 0;
        }

        cloned[i] = (
           <div className="thumbnail-container js-chameleon" key={i}>
              <div className="slide-image" data-index={i}>
                 <img src={slides[idx+j-1].img} title={slides[idx-1].title} alt={slides[idx-1].alt}/>
              </div>
              <div className="slide-number">{idx+j} / {slides.length} </div>
            </div>
        );
      }
      return cloned;
    }
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
