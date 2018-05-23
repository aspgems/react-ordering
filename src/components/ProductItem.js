import React, { Component } from 'react';
import Product from './Product';

class ProductItem extends Component {
  add() {
    this.props.addCallback(this.props.product);
  }

  render() {
    return (
      <div>
        <Product product={this.props.product} />
        <button onClick={this.add.bind(this)}>Add</button>
      </div>
    );
  }
}

export default ProductItem;
