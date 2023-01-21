import React from "react";

class Brands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || "Brands"
    };
  }

  render() {
    return (
      <div className="Brands">
        <h2>{this.state.title}</h2>
      </div>
    );
  }
}

export default Brands;
