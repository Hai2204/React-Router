import React, { Component } from "react";

class Product extends Component {
  render() {
    var { match } = this.props;
    var name = match.params.slug;
    return (
      <div className="uk-align-center">
        <h1>Chi tiet san pham</h1>
        <p>{name}</p>
      </div>
    );
  }
}

export default Product;
