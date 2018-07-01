import React, { Component } from "react";
import {connect} from "react-redux";

class InfoPanelContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ visible: ! this.state.visible });
  }

  renderMarkerContent() {
    const { context } = this.props.config;
    console.log(context)
    return context.slides.map((slide, idx) => {
      return (
        <a href="javascript:;" className="info-panel-slide" data-index={idx}>
          <div className="slide-number">#{idx+1}</div>
          <div className="slide-time">{slide.time}</div>
          <div className="slide-title-wrapper">
            <div className="slide-title">
              {slide.title || '-'}
            </div>
          </div>
        </a>
      );
    });
  }

  render() {
    return (
      <div className="info-panel">
      	<div className="dropdown-box">
          <div className="dropdown-header">
            <div className="dropdown-btn-wrapper" onClick={this.handleClick}>Markers <span className={"dropdown-btn " + (this.state.visible ? 'up': 'down')}></span></div>
          </div>
          { this.state.visible ? 
            <div className="dropdown-content">
              { this.renderMarkerContent() }
            </div>
          : null } 
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanelContainer);
