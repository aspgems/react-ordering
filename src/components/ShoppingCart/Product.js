import React, { Component } from 'react';
import ProductPropType from './PropTypes';

class Product extends Component {
  render() {
    return (
      <div>
        <div>Product Item {this.props.product.id}</div>

        <div>{this.props.product.description}</div>
        <div>{this.props.product.price}</div>
        <div>{this.props.product.category}</div>
      </div>
    );
  }
}

Product.propTypes = {
  product: ProductPropType
};

export default Product;
