import React, { Component } from "react";

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
    const { slides } = this.props.context;
    this.setState({
      src: slides[0].img,
      title: slides[0].title,
      alt: slides[0].alt
    })
  }

  render() {
    const { context } = this.props;
    const { src, title, alt } = this.state; 
    return (
      <img src={src} title={title} alt={alt}/>
    );
  }
}

export default SlideContainer;
