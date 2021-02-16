import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Product from "./Product";

class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        slug: 'IpX',
        name: "IphoneX",
        price: 35000000,
      },
      {
        id: 2,
        slug: 'samsum',
        name: "SamSum Galaxy S7",
        price: 5000000,
      },
      {
        id: 3,
        slug: 'oppo',
        name: "Oppo S1s",
        price: 15000000,
      },
    ];
    var {match} = this.props
    var url = match.url
    var result = products.map((product, index) => {
      return (
        <NavLink className="uk-link uk-link-reset" to={`${url}/${product.slug}`} key={index}>
          <div className="uk-padding uk-list-collapse" >
            <div className="uk-card uk-card-secondary uk-card-body">
              <p>{product.id}</p>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          </div>
        </NavLink>
      );
    });
    var {location} = this.props;
    console.log(location);
    return (
      <div className="uk-text-center uk-margin uk-section uk-container">
        <h1>Page Product</h1>
        <div className="uk-child-width-1-3 " uk-grid="true">
          {result}
        </div>
        <div className="uk-child-width-1-3 " uk-grid="true">
            <Route  path="/products/:slug" component={Product}/>
        </div>
      </div>
    );
  }
}

export default Products;
