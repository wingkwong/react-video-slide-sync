import React, { Component } from "react";

class HTML5Base extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    
  }

  renderSource() {
     var o = this.props.html5Setup;
     if(typeof o.sources === "object" && o.sources.length == 1){
          return (<source src={o.sources.file} type={o.sources.type}/>);
      }else if(typeof o.sources === "object" && o.sources.length > 1){
        return o.sources.map((source, idx) => {
          return (
            <source src={o.sources[idx].file} type={o.sources[idx].type}/>
          );
        })
      }
  }

  render() {
    return (
     <video id="chameleon-html5-video" className="chameleon-html5-video" controls preload="auto" width="100%" height="100%">
        { this.renderSource() }
     </video>
    );
  }
}

export default HTML5Base;
