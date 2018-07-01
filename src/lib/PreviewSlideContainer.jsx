import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {connect} from "react-redux";


class PreviewSlideContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    const { numOfCarouselSlide, context } = this.props.config;
    var carouselInnerWidth = document.querySelector('.carousel-item.active').getBoundingClientRect().width;
    var imageWidth = document.querySelectorAll('.carousel-item.active .thumbnail-container')[0].getBoundingClientRect().width;
    var maxImgInARow = Math.floor(carouselInnerWidth / imageWidth);
    if(numOfCarouselSlide > maxImgInARow && maxImgInARow > 5) {
      document.querySelector('.carousel-item .js-chameleon-3').classList.add("current-slide");
    }else {
      var total = document.querySelectorAll('.carousel-item.active .thumbnail-container').length;
      if (Math.floor(total / 2) >= 1) {
         var i = document.querySelector('.carousel-item.active .thumbnail-container:nth-child( ' + Math.floor(total / 2) + ') .slide-image').getAttribute("data-index");
         console.log(i)
         Array.prototype.slice.call(document.querySelectorAll('.carousel-item .js-chameleon-' + i + ''))
         .forEach(function(element) {
            element.classList.add('current-slide');
        });
         this._updateSlideCarouel(0);
      } else {
          document.querySelector('.carousel-item').classList.add('current-slide')
      }
    }

  }

  _updateSlideCarouel(idx) {
    var idx = parseInt(idx) +1 ;
    document.querySelector('.carousel-item.active').classList.remove("active");
    document.querySelector('.current-slide .slide-image[data-index="' + idx + '"]').closest('.carousel-item').classList.add("active");
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
    const { numOfCarouselSlide, context } = this.props.config;

    if ( slides.length > numOfCarouselSlide ) {
      var cloned = [];
      for ( var i = 1, j = 1; i < numOfCarouselSlide; i++, j++ ) {
        if(idx+j > slides.length) {
          idx = 1;
          j = 0;
        }

        cloned[i] = (
           <div className={"thumbnail-container js-chameleon-"+i } key={i}>
              <div className="slide-image" data-index={idx+j}>
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
