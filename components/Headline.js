import React from "react";

class Headline extends React.Component {

  render() {
    return <div className="headlineContainer">
      <img src="./images/slash.png" alt="Punt Club Slash" />
      <h2>{this.props.text}</h2>
    </div>;
  }
}

export default Headline;
