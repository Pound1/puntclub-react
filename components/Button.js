import React from "react";
import Link from "next/link";

class Button extends React.Component {
  render() {
    return (
      <Link href={this.props.url}>
        <div className="buttonContainer">
          <div className="buttonText">{this.props.text}</div>
        </div>
      </Link>
    );
  }
}

export default Button;
