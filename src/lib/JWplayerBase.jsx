import React, { Component } from "react";

class JWplayerBase extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { children } = this.props;
    return (
       <div id="jwplayer" className="chameleon-jwplayer-video"></div>
    );
  }
}

export default JWplayerBase;
