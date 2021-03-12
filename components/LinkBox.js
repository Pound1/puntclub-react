import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LinkBox extends React.Component {
  render() {
    return (
      <div className="linkBox">
        <FontAwesomeIcon
          className="navIcon"
          icon={["fas", this.props.icon]}
          size="6x"
        />
        <h2>{this.props.text}</h2>
        {this.props.route && (
          <img src="/images/navHover.png" className="navHover" />
        )}
      </div>
    );
  }
}

export default LinkBox;
