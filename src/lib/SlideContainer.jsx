import React, { Component } from "react";
import {connect} from "react-redux";

class SlideContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      title: '',
      alt: ''
    }
  }

  componentDidMount() {
    const { context } = this.props.config;
    this.setState({
      src: context.slides[0].img,
      title: context.slides[0].title,
      alt: context.slides[0].alt
    })
  }

  render() {
    const { src, title, alt } = this.state; 
    return (
      <div className="slide-container">
        <img src={src} title={title} alt={alt}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SlideContainer);
