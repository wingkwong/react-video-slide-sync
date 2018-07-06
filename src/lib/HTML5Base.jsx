import React, { Component } from "react";
import {connect} from "react-redux";


class HTML5Base extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    
  }

  renderSource() {
     var o = this.props.config.context.html5Setup;
     if(typeof o === 'undefined') return (null);

     if(typeof o.sources === "object" && o.sources.length == 1){
        let source = o.sources[0];
        return (<source src={source.file} type={source.type}/>);
      }else if(typeof o.sources === "object" && o.sources.length > 1){
        return o.sources.map((source, idx) => {
          return (
            <source src={o.sources[idx].file} type={o.sources[idx].type}/>
          );
        })
      }
  }

  render() {
    var o = this.props.config.context.html5Setup;
    return (
     <video id="chameleon-html5-video" className="chameleon-html5-video" controls preload="auto" width="100%" height="100%" poster={o.poster != null && o.poster != ''? o.poster: ''}>
        { this.renderSource() }
     </video>
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

export default connect(mapStateToProps, mapDispatchToProps)(HTML5Base);
