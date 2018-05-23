import React, { Component } from 'react';
import Product from './Product';

class ProductItem extends Component {
  render() {
    return (
      <div>
        <Product product={this.props.product} />
        <button>Add</button>
      </div>
    );
  }
}

export default ProductItem;
